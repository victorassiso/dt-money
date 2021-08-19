import { Content } from './header.styles'
import { Container } from './header.styles'
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="dt money" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}