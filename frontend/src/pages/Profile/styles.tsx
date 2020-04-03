import styled from 'styled-components';
import { Main } from '../../components/Main/styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1180px;

  margin: 32px auto;
  padding: 0 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 64px;

  img {
    max-height: 100%;
  }

  span {
    font-size: 20px;
    margin-left: 24px;

    strong {
      text-transform: uppercase;
    }
  }

  .link {
    width: 260px;
    margin-left: auto;
    button {
      margin-top: 0px;
    }
  }

  .btn-icon {
    width: 60px;
    height: 90%;
    margin-left: 16px;

    background: transparent;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    transition: border-color 0.2s;

    :hover {
      border-color: #999;
    }
  }
`;

export const MainProfile = styled(Main)`
  margin-top: 48px;
  height: auto;
  display: block;
  h1 {
    margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  list-style: none;

  li {
    position: relative;
    padding: 24px;
    background: #fff;
    border-radius: 8px;

    strong {
      display: block;
      margin-bottom: 8px;
      color: #41414d;
      text-transform: uppercase;
    }

    p {
      + strong {
        margin-top: 32px;
      }

      font-size: 16px;
      line-height: 21px;
      color: #737380;
      display: inline-block;
    }

    button {
      position: absolute;
      top: 24px;
      right: 24px;
      border: 0;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
