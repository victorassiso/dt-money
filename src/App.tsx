import { Dashboard } from "./components/Dashboard/dashboard";
import { Header } from "./components/Header/header";
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal/newTransactionModal";
import { TransactionsProvider } from "./transactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}