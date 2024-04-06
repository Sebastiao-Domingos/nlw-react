import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> {}

export function Table({ children, ...others }: TableProps) {
  return (
    <div className="w-full rounded border border-zinc-600  min-h-96">
      <table className="w-full" {...others}>
        {children}
      </table>
    </div>
  );
}
