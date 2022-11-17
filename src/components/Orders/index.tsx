import { Container } from "../Container";
import { OrderCard } from "../OrderCard";
import { OrdersContainer } from "./styles";

export function Orders() {
  return (
    <OrdersContainer>
      <Container>
        <OrderCard icon="🕑" text="Fila de espera" count="(1)" />
        <OrderCard icon="👩‍🍳" text="Em produção" count="(1)" />
        <OrderCard icon="✅" text="Pronto!" count="(1)" />
      </Container>
    </OrdersContainer>
  );
}
