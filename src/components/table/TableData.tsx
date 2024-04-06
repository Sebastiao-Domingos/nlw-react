import { ComponentProps } from "react";

interface TdProps extends ComponentProps<"td"> {}

export function TableCell({ children, ...others }: TdProps) {
  return <td {...others}>{children}</td>;
}
