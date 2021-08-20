import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { Container, RadioBox } from './newTransactionModal.styles'
import { Transaction, TransactionsContext } from '../../transactionsContext';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export interface RadioBoxProps {
  isSelected: boolean;
  activeColor: 'green' | 'red';
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  
  const [title, setTitle] = useState<Transaction["title"]>('');
  const [amount, setAmount] = useState<Transaction["amount"]>(0);
  const [type, setType] = useState<Transaction["type"]>('deposit');
  const [category, setCategory] = useState<Transaction["category"]>('');  
  
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      type,
      category
    })

  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
        
        <div>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isSelected={type === 'deposit'}
            activeColor='green'
            >
              <img src={incomeImg} alt="deposit" />
              <p>Entrada</p>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            isSelected={type === 'withdraw'}
            activeColor='red'
            >
              <img src={outcomeImg} alt="withdraw" />
              <p>Saída</p>
          </RadioBox>
        </div>
        
        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        
        <button type="submit">
          Cadastrar
        </button>
        
      </Container>
    </Modal>
  );
}