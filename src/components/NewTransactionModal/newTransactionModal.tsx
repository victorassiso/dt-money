import Modal from 'react-modal';
import { Container } from './newTransactionModal.styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="NewTransactionModalOverlay"
      className="NewTransactionModalContent"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="closeModal"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />
        
        <div>
          <button className="deposit" type="button">
            <img src={incomeImg} alt="deposit" />
            <p>Entrada</p>
          </button>
          <button className="withdraw" type="button">
            <img src={outcomeImg} alt="withdraw" />
            <p>Saída</p>
          </button>
        </div>
        
        <input
          placeholder="Categoria"
        />
        
        <button type="submit">
          Cadastrar
        </button>
        
      </Container>
    </Modal>
  );
}