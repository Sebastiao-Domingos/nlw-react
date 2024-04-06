import { ComponentProps } from "react";

interface TableFootProps extends ComponentProps<"tfoot"> {}

export function TableFoot(props: TableFootProps) {
  return <tfoot {...props}>{props.children}</tfoot>;
}
