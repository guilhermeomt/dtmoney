import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  onNewTransactionModalOpen: () => void;
}

export function Header({ onNewTransactionModalOpen}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onNewTransactionModalOpen}>Nova transação</button>
      </Content>
    </Container>
  );
}
