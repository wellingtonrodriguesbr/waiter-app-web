import { Order } from "../../types/Order";
import { Container } from "../Container";
import { OrderCard } from "../OrderCard";
import { OrdersContainer } from "./styles";

export function Orders() {
  return (
    <OrdersContainer>
      <Container>
        <OrderCard orders={orders} icon="🕑" text="Fila de espera" />
        <OrderCard orders={[]} icon="👩‍🍳" text="Em produção" />
        <OrderCard orders={[]} icon="✅" text="Pronto!" />
      </Container>
    </OrdersContainer>
  );
}

const orders: Order[] = [
  {
    _id: "6374b75f548a679de48598d1",
    table: "1",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Coca Cola",
          imagePath: "1668591742614-coca-cola.png",
          price: 7,
        },
        quantity: 3,
        _id: "6374b75f548a679de48598d2",
      },
    ],
  },

  {
    _id: "6374b75f548a679de48598d11",
    table: "3",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Coca Cola",
          imagePath: "1668591742614-coca-cola.png",
          price: 7,
        },
        quantity: 3,
        _id: "6374b75f548a679de48598d2",
      },
    ],
  },
];
