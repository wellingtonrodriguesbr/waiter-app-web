import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 2rem;
  width: 480px;
  height: fit-content;
  border-radius: 8px;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.5rem;
  }

  button {
    border: none;
    font-size: 0;
    background-color: transparent;
  }
`;

export const StatusContainer = styled.section`
  margin-top: 2rem;

  small {
    opacity: 0.8;
    font-size: 0.875rem;
    font-weight: 500;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 0.5rem;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }
`;

export const OrdersItems = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.div`
  display: flex;

  > span {
    display: block;
    margin-left: 0.75rem;
    min-width: 1.25rem;
    color: #666;
    font-size: 0.875rem;
  }

  img {
    border-radius: 6px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  gap: 4px;

  span {
    font-size: 0.875rem;
    color: #666;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;

  > span {
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0.8;
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  > button:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    padding: 0.875rem 0;
    border-radius: 999px;
    background-color: #333;
    color: #fff;
  }

  > button:last-child {
    border: none;
    background-color: transparent;
    padding: 0.875rem 0;
    color: #d73035;
    font-size: 1rem;
    font-weight: 600;
  }
`;
