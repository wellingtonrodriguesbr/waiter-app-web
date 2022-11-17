import { OrderCardContainer, TableContainer } from "./styles";

interface OrderCardProps {
  icon: string;
  text: string;
  count: string;
}

export function OrderCard({ icon, text, count }: OrderCardProps) {
  return (
    <OrderCardContainer>
      <h2>
        <span>{icon}</span>
        {text}
        <span>{count}</span>
      </h2>
      <TableContainer>
        <strong>Mesa 2</strong>
        <span>2 itens</span>
      </TableContainer>
      <TableContainer>
        <strong>Mesa 2</strong>
        <span>2 itens</span>
      </TableContainer>
    </OrderCardContainer>
  );
}
