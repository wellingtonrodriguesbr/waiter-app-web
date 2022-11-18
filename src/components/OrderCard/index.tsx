import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { OrderCardContainer, TableContainer } from "./styles";

interface OrderCardProps {
  icon: string;
  text: string;
  orders: Order[];
}

export function OrderCard({ icon, text, orders }: OrderCardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  return (
    <OrderCardContainer>
      <h2>
        <span>{icon}</span>
        {text}
        <span>({orders.length})</span>
      </h2>
      {orders.map((order) => (
        <TableContainer key={order._id} onClick={handleOpenModal}>
          <strong>Mesa {order.table}</strong>
          <span>
            {order.products.length}{" "}
            {order.products.length === 1 ? "item" : "itens"}
          </span>
        </TableContainer>
      ))}

      <OrderModal isOpen={isModalVisible} />
    </OrderCardContainer>
  );
}
