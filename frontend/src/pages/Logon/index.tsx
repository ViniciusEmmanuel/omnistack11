import React, { FormEvent, useState } from 'react';
import api from '../../services/api';
import * as yup from 'yup';

import { FiLogIn } from 'react-icons/fi';

import ImageHeroes from '../../assets/images/heroes.png';
import ImageLogo from '../../assets/images/logo.svg';

import { InputForm } from '../../components/InputForm/styles';
import { Button } from '../../components/Button/styles';
import { StyleLink } from '../../components/Link/styles';

import { MainLogon, SectionForm, ImageLarge } from './styles';

import { IResposnse } from '../../interfaces/api/IResponse';
import { IOng } from '../../interfaces/models/IOng';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    const data = { email, password };

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(data))) {
      return;
    }

    try {
      const { status }: IResposnse<IOng> = await api.post('/session', data);
      if (Number(status) === 201) {
        //location profile

        localStorage.setItem('@behero/token', JSON.stringify(status));
      }
    } catch (error) {
      alert('Email ou password não conferem.');
      console.log(error);
    }
  };

  return (
    <MainLogon>
      <SectionForm>
        <img src={ImageLogo} alt="Be The Hero" />

        <form className="form-logon" onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <InputForm
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputForm
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Entrar</Button>

          <StyleLink to="/register" className="register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </StyleLink>
        </form>
      </SectionForm>

      <ImageLarge src={ImageHeroes} alt="heroes" />
    </MainLogon>
  );
}
