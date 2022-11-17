import { ReactNode } from "react";
import { DivContainer } from "./styles";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <DivContainer>{children}</DivContainer>;
}
