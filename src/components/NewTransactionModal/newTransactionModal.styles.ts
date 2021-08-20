import styled from 'styled-components';
import {RadioBoxProps } from './newTransactionModal'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25;
    
    border: 1px solid var(--input-border);
    background: var(--input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  div {
    margin: 1rem 0;
    display: flex;
    gap: 0.5rem;
  
  }
  
  button[type="submit"] {
    width: 100%;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }  
`;

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid var(--input-border);
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  color: var(--text-title);

  background: ${(props) => props.isSelected ? '#12A454' : 'transparent'};

  img{
    margin-right: 1rem;
  }

  transition: filter 0.2s;

  &:hover {
    border-color: rgba(var(--input-border), 0.5)
  }

`;