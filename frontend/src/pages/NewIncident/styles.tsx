import styled from 'styled-components';
import { Main } from '../../components/Main/styles';

export const MainRegister = styled(Main)`
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding: 7%;

  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Section = styled.section`
  flex: 1 1 40%;
  max-width: 50%;

  &.new-incident {
    width: 100%;
    max-width: 35%;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      line-height: 32px;
      color: #737380;
    }

    .logon {
      margin: 32px 0 12px;
    }
  }

  &.form {
    width: 100%;
    max-width: 45%;

    input,
    textarea {
      margin-top: 8px;
    }

    .input-group {
      display: flex;
      justify-content: space-between;

      .uf {
        width: 80px;
        margin-left: 16px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    &.welcome,
    &.form {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;
