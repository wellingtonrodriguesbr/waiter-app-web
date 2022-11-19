import {
  Actions,
  HeaderContainer,
  Item,
  ModalContainer,
  OrderDetails,
  OrdersItems,
  Overlay,
  ProductDetails,
  StatusContainer,
  Total,
} from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

export function OrderModal({ isOpen, order, onClose }: OrderModalProps) {
  const total = order?.products.reduce((acc, item) => {
    return (acc += item.product.price * item.quantity);
  }, 0);

  useEffect(() => {
    function handleKeyDownOnClose(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDownOnClose);

    return () => {
      document.removeEventListener("keydown", handleKeyDownOnClose);
    };
  }, [onClose]);

  return (
    <>
      {isOpen || order ? (
        <Overlay>
          <ModalContainer>
            <HeaderContainer>
              <strong>Mesa {order?.table}</strong>
              <button type="submit" onClick={onClose}>
                <img src={closeIcon} alt="" />
              </button>
            </HeaderContainer>

            <StatusContainer>
              <small>Status do pedido</small>
              <div>
                <span>
                  {order?.status === "WAITING" && "🕑"}
                  {order?.status === "IN_PRODUCTION" && "👩‍🍳"}
                  {order?.status === "DONE" && "✅"}
                </span>
                <strong>
                  {order?.status === "WAITING" && "Fila de espera"}
                  {order?.status === "IN_PRODUCTION" && "Em produção"}
                  {order?.status === "DONE" && "Pronto"}
                </strong>
              </div>
            </StatusContainer>

            <OrderDetails>
              <strong>Itens</strong>
              <OrdersItems>
                {order?.products.map(({ _id, product, quantity }) => (
                  <Item key={_id}>
                    <img
                      src={`http://localhost:3333/uploads/${product.imagePath}`}
                      alt={product.name}
                      width="56"
                      height="42"
                    />
                    <span>{quantity}x</span>
                    <ProductDetails>
                      <strong>{product.name}</strong>
                      <span>{formatCurrency(product.price)}</span>
                    </ProductDetails>
                  </Item>
                ))}
              </OrdersItems>
              <Total>
                <span>Total</span>
                <strong>{formatCurrency(Number(total))}</strong>
              </Total>
            </OrderDetails>

            <Actions>
              <button type="button">
                <span>👩‍🍳</span>
                <strong>Iniciar Produção</strong>
              </button>
              <button type="button">Cancelar pedido</button>
            </Actions>
          </ModalContainer>
        </Overlay>
      ) : null}
    </>
  );
}
