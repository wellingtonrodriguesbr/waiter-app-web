import { useState } from "react";
import { api } from "../../service/api";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { OrderCardContainer, TableContainer } from "./styles";
import { toast } from "react-toastify";

interface OrderCardProps {
  icon: string;
  text: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order["status"]) => void;
}

export function OrderCard({
  icon,
  text,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrderCardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);
    const newStatus =
      selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";
    try {
      await api.patch(`/orders/${selectedOrder?._id}`, { status: newStatus });
      toast.success(
        `Pedido da mesa ${selectedOrder?.table} teve o status alterado!`
      );
    } catch (error) {
      console.log(error);
    } finally {
      onChangeOrderStatus(selectedOrder!._id, newStatus);
      setIsLoading(false);
      handleCloseModal();
    }
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    try {
      await api.delete(`/orders/${selectedOrder?._id}`);
      toast.success(
        `Pedido da mesa ${selectedOrder?.table} foi cancelado com sucesso!`
      );
    } catch (error) {
      console.log(error);
    } finally {
      onCancelOrder(selectedOrder!._id);
      setIsLoading(false);
      handleCloseModal();
    }
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
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
      />
    </OrderCardContainer>
  );
}
