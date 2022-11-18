import {
  HeaderContainer,
  ModalContainer,
  Overlay,
  StatusContainer,
} from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";

interface OrderModalProps {
  isOpen: boolean;
}

export function OrderModal({ isOpen }: OrderModalProps) {
  return (
    <>
      {isOpen ? (
        <Overlay>
          <ModalContainer>
            <HeaderContainer>
              <strong>Mesa 2</strong>
              <button type="submit">
                <img src={closeIcon} alt="" />
              </button>
            </HeaderContainer>
            <StatusContainer>
              <small>Status do pedido</small>
              <div>
                <span>👩‍🍳</span>
                <strong>Em produção</strong>
              </div>
            </StatusContainer>
          </ModalContainer>
        </Overlay>
      ) : null}
    </>
  );
}
