import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableHeadProps extends ComponentProps<"thead"> {}

export function TableHead({ children, className, ...others }: TableHeadProps) {
  return (
    <thead
      className={twMerge("border-b border-b-zinc-600", className)}
      {...others}
    >
      <tr>{children}</tr>
    </thead>
  );
}
