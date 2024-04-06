import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  isAble?: boolean;
}

export function IconButton(props: ButtonProps) {
  return (
    <button
      {...props}
      disabled={!props.isAble}
      className={twMerge(
        `size-6 border rounded border-zinc-700 flex justify-center items-center active:bg-zinc-700 ${
          !props.isAble && `bg-zinc-700/70 cursor-not-allowed`
        }`,
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
