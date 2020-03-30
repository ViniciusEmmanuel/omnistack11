import { createGlobalStyle } from 'styled-components';

const globalstyles = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root{
    width: 100%;
    height: 100%;
  }
  
  body{
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
  }

  input, button, textarea{
    font: 400 18px Roboto, sans-serif;
  }

  a, button {
    background: none;
    cursor: pointer;
  }
`;

export default globalstyles;
