import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import ImageLogo from '../../assets/images/logo.svg';

import { StyleLink } from '../../components/Link/styles';
import { InputForm } from '../../components/InputForm/styles';
import { TextArea } from '../../components/TextArea/styles';
import { Button } from '../../components/Button/styles';

import { MainRegister, Container, Section } from './styles';

export default function NewIncident() {
  return (
    <MainRegister>
      <Container>
        <Section className="new-incident">
          <img src={ImageLogo} alt="Be The Heroe" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resover
            isso.
          </p>

          <StyleLink to="/profile" className="logon">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </StyleLink>
        </Section>

        <Section className="form">
          <form>
            <InputForm type="text" placeholder="Titulo do caso" />
            <TextArea placeholder="Descrição" />
            <InputForm type="text" placeholder="Valor em reais" />

            <Button type="submit">Cadastrar</Button>
          </form>
        </Section>
      </Container>
    </MainRegister>
  );
}
