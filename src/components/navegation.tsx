import { ComponentProps } from "react";

interface NavProps extends ComponentProps<"a"> {}
export function NavLink({ children, href, ...others }: NavProps) {
  return (
    <a href={href} {...others}>
      {children}
    </a>
  );
}
