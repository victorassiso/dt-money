import { useEffect } from 'react';
import { Container } from './statement.styles';

export function Statement() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
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