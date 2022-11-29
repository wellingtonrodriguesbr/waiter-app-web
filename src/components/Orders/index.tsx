import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Order } from "../../types/Order";
import { Container } from "../Container";
import { OrderCard } from "../OrderCard";
import { OrdersContainer } from "./styles";

import socketIo from "socket.io-client";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  async function getOrders() {
    const { data } = await api.get("/orders");
    setOrders(data);
  }

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  function handleOrderStatusChange(orderId: string, status: Order["status"]) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  }

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    const socket = socketIo("http://localhost:3333", {
      transports: ["websocket"],
    });
    socket.on("orders@new", (order) => {
      setOrders((prevState) => prevState.concat(order));
    });
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  return (
    <OrdersContainer>
      <Container>
        <OrderCard
          onChangeOrderStatus={handleOrderStatusChange}
          onCancelOrder={handleCancelOrder}
          orders={waiting}
          icon="🕑"
          text="Fila de espera"
        />
        <OrderCard
          onChangeOrderStatus={handleOrderStatusChange}
          onCancelOrder={handleCancelOrder}
          orders={inProduction}
          icon="👩‍🍳"
          text="Em produção"
        />
        <OrderCard
          onChangeOrderStatus={handleOrderStatusChange}
          onCancelOrder={handleCancelOrder}
          orders={done}
          icon="✅"
          text="Pronto!"
        />
      </Container>
    </OrdersContainer>
  );
}
