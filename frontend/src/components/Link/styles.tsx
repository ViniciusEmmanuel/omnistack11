import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: #41414d;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;
