import { useContext } from 'react';
import { TransactionsContext } from '../../transactionsContext';
import { Container } from './statement.styles';

export function Statement() {
  const transactions = useContext(TransactionsContext);
  
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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                }).format(transaction.amount)
              }
            </td>
            <td>{transaction.type}</td>
            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
              }</td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}