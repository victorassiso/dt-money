import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './statement.styles';

export function Statement() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>data</th>
          </tr>
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