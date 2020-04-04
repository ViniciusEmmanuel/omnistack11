import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    const dataPost = {
      name,
      email,
      whatsapp,
      city,
      uf,
      password,
      confirmPassword,
    };

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      whatsapp: yup.string().required().length(13),
      city: yup.string().required(),
      uf: yup.string().required(),
      password: yup.string().required().min(6).max(16),
      confirmPassword: yup.string().required().min(6).max(16),
    });

    if (!(await schema.isValid(dataPost))) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    try {
      const { status, data: response }: IResposnse<IOng> = await api.post(
        '/ongs',
        dataPost
      );

      if (Number(status) === 201) {
        const user = {
          email: response?.data.email,
          token: response?.data.token,
        };

        console.log(user);

        localStorage.setItem('@behero/user', JSON.stringify(user));

        return history.replace('/profile', { user });
      }
    } catch (error) {
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
              onChange={(e) => setEmail(String(e.target.value).toLowerCase())}
            />
            <InputForm
              type="text"
              value={whatsapp}
              placeholder="WhatsApp"
              maxLength={19}
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
                onChange={(e) => setUf(String(e.target.value).toUpperCase())}
              />
            </div>

            <InputForm
              type="text"
              value={password}
              placeholder="Password"
              maxLength={16}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputForm
              type="text"
              value={confirmPassword}
              placeholder="Confirm Password"
              maxLength={16}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button type="submit">Cadastrar</Button>
          </form>
        </Section>
      </Container>
    </MainRegister>
  );
}
