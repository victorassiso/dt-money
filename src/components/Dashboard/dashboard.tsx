import { Container } from './dashboard.styles';
import { Summary } from '../Summary/summary';
import { Statement } from '../Statement/statement';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Statement />
    </Container>
  );
}