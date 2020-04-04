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

  const [incidents, setIncidents] = useState([]);

  const logout = useCallback((): void => {
    localStorage.removeItem('@behero/user');
    history.replace('/');
  }, [history]);

  const fethcIncidentsOng = useCallback(async () => {
    const { status, data: response }: IResposnse<IOng> = await api.get('/ongs');

    if (status === 200) {
      console.log(response);

      setIncidents([]);
    }
  }, []);

  useEffect(() => {
    fethcIncidentsOng();
  }, [fethcIncidentsOng]);

  return (
    <Container>
      <Header>
        <img src={ImageLogo} alt="Be The Hero" />
        <span>
          Bem vinda, <strong>ONG</strong>
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
          <li>
            <strong>CASO:</strong>
            <p>teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p>teste</p>

            <strong>VALOR:</strong>
            <p>teste</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p>teste</p>

            <strong>VALOR:</strong>
            <p>teste</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p>teste</p>

            <strong>VALOR:</strong>
            <p>teste</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>teste</p>

            <strong>DESCRIÇÃO:</strong>
            <p>teste</p>

            <strong>VALOR:</strong>
            <p>teste</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </List>
      </MainProfile>
    </Container>
  );
}
