import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12.375rem;
  background-color: #d73035;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8125rem 0;

  div {
    h1 {
      font-size: 2rem;
      color: #fff;
    }

    p {
      font-size: 1rem;
      color: #fff;
    }
  }
`;
