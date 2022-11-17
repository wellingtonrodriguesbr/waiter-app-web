import { Container } from "../Container";
import { Description, HeaderContainer } from "./styles";

import logoImg from "../../assets/images/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Description>
          <div>
            <h1>Pedidos</h1>
            <p>Acompanhe os pedidos dos clientes</p>
          </div>
          <img src={logoImg} alt="" />
        </Description>
      </Container>
    </HeaderContainer>
  );
}
