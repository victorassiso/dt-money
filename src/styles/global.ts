import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;

    --blue: #5429CC;
    --green: #33CC95;
    --red: #E62E4D;

    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
  };
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  //font-size: 16px (Desktop)

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    } 

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
   };

  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  };

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;