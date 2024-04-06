import { ComponentProps } from "react";

interface TableBodyProps extends ComponentProps<"tbody"> {}

export function TableBody({ children, ...others }: TableBodyProps) {
  return <tbody {...others}>{children}</tbody>;
}
