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
