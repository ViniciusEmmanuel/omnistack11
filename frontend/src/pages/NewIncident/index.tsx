import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import * as yup from 'yup';

import { FiArrowLeft } from 'react-icons/fi';

import ImageLogo from '../../assets/images/logo.svg';

import { StyleLink } from '../../components/Link/styles';
import { InputForm } from '../../components/InputForm/styles';
import { TextArea } from '../../components/TextArea/styles';
import { Button } from '../../components/Button/styles';

import { MainRegister, Container, Section } from './styles';

import { IResposnse } from '../../interfaces/api/IResponse';
import { IOng } from '../../interfaces/models/IOng';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const dataPost = { title, description, value };

    const schema = yup.object().shape({
      title: yup.string().required(),
      description: yup.string().required(),
      value: yup.string().required(),
    });

    if (!(await schema.isValid(dataPost))) {
      return;
    }

    try {
      const { status }: IResposnse<IOng> = await api.post(
        '/incidents',
        dataPost
      );

      if (status === 201) {
        setTitle('');
        setDescription('');
        setValue('');
        alert('Criado com sucesso.');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <InputForm
              type="text"
              placeholder="Titulo do caso"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextArea
              placeholder="Descrição"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <InputForm
              type="text"
              placeholder="Valor em reais"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />

            <Button type="submit">Cadastrar</Button>
          </form>
        </Section>
      </Container>
    </MainRegister>
  );
}
