import React, { FormEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import { FiLogIn, FiLoader } from 'react-icons/fi';

import ImageHeroes from '../../assets/images/heroes.png';
import ImageLogo from '../../assets/images/logo.svg';

import { InputForm } from '../../components/InputForm/styles';
import { Button } from '../../components/Button/styles';
import { StyleLink } from '../../components/Link/styles';

import { MainLogon, SectionForm, ImageLarge } from './styles';

import { IState } from '../../interfaces/redux/logon';
import {
  requestToLogin,
  loadingToLogon,
} from '../../store/redux/logon/actions';

export default function Logon() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector<IState, boolean>((state) => state.logon.auth);
  const loading = useSelector<IState, boolean>((state) => state.logon.loading);

  useEffect(() => {
    if (auth) {
      history.replace('/profile');
    }
  }, [history, auth]);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    const dataPost = { email, password };

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(dataPost))) {
      return;
    }
    dispatch(loadingToLogon(true));
    dispatch(requestToLogin(dataPost));
  };

  console.log(loading);

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

          <Button type="submit" disabled={loading}>
            {loading ? <FiLoader size={32} color="#fff" /> : 'Entrar'}
          </Button>

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
