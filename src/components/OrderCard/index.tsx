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
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <OrderCardContainer>
      <header>
        <span>{icon}</span>
        <h2>{text}</h2>
        <span>({orders.length})</span>
      </header>
      {orders.map((order) => (
        <TableContainer key={order._id} onClick={() => handleOpenModal(order)}>
          <strong>Mesa {order.table}</strong>
          <span>
            {order.products.length}{" "}
            {order.products.length === 1 ? "item" : "itens"}
          </span>
        </TableContainer>
      ))}

      <OrderModal
        isOpen={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
    </OrderCardContainer>
  );
}
