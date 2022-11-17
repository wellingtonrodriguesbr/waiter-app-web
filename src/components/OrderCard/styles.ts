import styled from "styled-components";

export const OrderCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    margin-top: 1rem;

    span {
      font-weight: 400;
    }
  }
`;

export const TableContainer = styled.button`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: #ffffff;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 0.5rem;

  & + button {
    margin-top: 1.5rem;
  }

  strong {
    font-weight: 500;
  }

  span {
    font-size: 0.875rem;
    color: #666;
  }
`;
