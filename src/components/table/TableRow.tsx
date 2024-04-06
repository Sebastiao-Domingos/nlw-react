import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends ComponentProps<"tr"> {}

export function TableRow({ children, ...others }: TableRowProps) {
  return (
    <tr
      {...others}
      className={twMerge("border-b border-b-zinc-600/40", others.className)}
    >
      {children}
    </tr>
  );
}
