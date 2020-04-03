import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import ImageLogo from '../../assets/images/logo.svg';

import { Button } from '../../components/Button/styles';
import { StyleLink } from '../../components/Link/styles';

import { Container, Header, MainProfile, List } from './styles';

export default function Profile() {
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

        <button type="button" className="btn-icon">
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
