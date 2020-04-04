import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiPower, FiTrash2 } from 'react-icons/fi';

import ImageLogo from '../../assets/images/logo.svg';

import { Button } from '../../components/Button/styles';
import { StyleLink } from '../../components/Link/styles';

import { Container, Header, MainProfile, List } from './styles';

import { IResposnse } from '../../interfaces/api/IResponse';
import { IOng } from '../../interfaces/models/IOng';

export default function Profile() {
  const history = useHistory();

  const [ong, setOng] = useState<IOng>();

  const logout = useCallback((): void => {
    localStorage.removeItem('@behero/user');
    history.replace('/');
  }, [history]);

  const fethcIncidentsOng = useCallback(async (): Promise<void> => {
    const { status, data: response }: IResposnse<IOng> = await api.get('/ongs');

    if (status === 200 && response) {
      setOng(response?.data);
    }
  }, []);

  const handleDelete = useCallback(
    async (id) => {
      if (!id) {
        return;
      }

      try {
        const { status }: IResposnse<IOng> = await api.delete(
          `/incidents/${id}`
        );

        if (status === 204) {
          const newArrayInicident = ong?.incidents.filter(
            (item) => item.id !== id
          );
          setOng({ ...ong, incidents: newArrayInicident || [] });
        }
      } catch (error) {
        alert(error.response.data.message);
        console.log(error.response);
      }
    },
    [ong]
  );

  useEffect(() => {
    fethcIncidentsOng();
  }, [fethcIncidentsOng]);

  return (
    <Container>
      <Header>
        <img src={ImageLogo} alt="Be The Hero" />
        <span>
          Bem vinda, <strong>{ong?.name}</strong>
        </span>

        <StyleLink to="/incidents/new" className="link">
          <Button>Cadastrar novo caso</Button>
        </StyleLink>

        <button type="button" className="btn-icon" onClick={logout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <MainProfile>
        <h1>Casos cadastrasdos</h1>

        <List>
          {ong?.incidents.map((item) => {
            return (
              <li key={item.id}>
                <strong>CASO:</strong>
                <p>{item.title}</p>

                <strong>DESCRIÇÃO:</strong>
                <p>{item.description}</p>

                <strong>VALOR:</strong>
                <p>{item.value}</p>

                <button
                  type="button"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </li>
            );
          })}
        </List>
      </MainProfile>
    </Container>
  );
}
