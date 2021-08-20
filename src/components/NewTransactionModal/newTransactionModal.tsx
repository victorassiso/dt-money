import Modal from 'react-modal';
import { Container, RadioBox } from './newTransactionModal.styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export interface RadioBoxProps {
  isSelected: boolean;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState<string>('deposit');
  
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
          <RadioBox
            type="button"
            onClick={() => setTransactionType('deposit')}
            isSelected={transactionType === 'deposit'}
            >
              <img src={incomeImg} alt="deposit" />
              <p>Entrada</p>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => setTransactionType('withdraw')}
            isSelected={transactionType === 'withdraw'}
            >
              <img src={outcomeImg} alt="withdraw" />
              <p>Saída</p>
          </RadioBox>
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