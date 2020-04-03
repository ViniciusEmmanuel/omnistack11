import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import * as yup from 'yup';

import { FiArrowLeft } from 'react-icons/fi';

import ImageLogo from '../../assets/images/logo.svg';

import { StyleLink } from '../../components/Link/styles';
import { InputForm } from '../../components/InputForm/styles';
import { Button } from '../../components/Button/styles';

import { MainRegister, Container, Section } from './styles';

import { IResposnse } from '../../interfaces/api/IResponse';
import { IOng } from '../../interfaces/models/IOng';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    const data: IOng = { name, email, whatsapp, city, uf };

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      whatsapp: yup.string().required().min(10).max(11),
      city: yup.string().required(),
      uf: yup.string().required(),
    });

    if (!(await schema.isValid(data))) {
      return;
    }

    try {
      const { status }: IResposnse<IOng> = await api.post('/ongs', data);

      if (Number(status) === 201) {
        alert('Salvo com sucesso');
      }
    } catch (error) {
      alert('Error');
      console.log(error);
    }
  };

  return (
    <MainRegister>
      <Container>
        <Section className="welcome">
          <img src={ImageLogo} alt="Be The Heroe" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <StyleLink to="/" className="logon">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar Logon
          </StyleLink>
        </Section>

        <Section className="form">
          <form onSubmit={handleRegister}>
            <InputForm
              type="text"
              value={name}
              placeholder="Nome da ONG"
              onChange={(e) => setName(e.target.value)}
            />
            <InputForm
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
              type="text"
              value={whatsapp}
              placeholder="WhatsApp"
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
              <InputForm
                type="text"
                value={city}
                placeholder="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
              <InputForm
                type="text"
                value={uf}
                placeholder="UF"
                className="uf"
                maxLength={2}
                onChange={(e) => setUf(e.target.value)}
              />
            </div>

            <Button type="submit">Cadastrar</Button>
          </form>
        </Section>
      </Container>
    </MainRegister>
  );
}
