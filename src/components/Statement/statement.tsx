import { Header } from '../Header/header';
import { Container } from './statement.styles';
export function Statement() {
  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000,00</td>
            <td>Venda</td>
            <td>24/04/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$2.000,00</td>
            <td>Casa</td>
            <td>19/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}