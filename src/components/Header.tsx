import { useResolvedPath } from "react-router-dom";
import logo from "../assets/icon-nlw.svg";
import { NavLink } from "./navegation";

export function Header() {
  const { pathname } = useResolvedPath({});

  return (
    <div className="w-full py-6 mb-10">
      <div className="w-full flex items-center gap-4">
        <nav className="flex gap-4">
          <NavLink href="/">
            <img src={logo} alt="Logo" />
          </NavLink>
          <NavLink
            href="/events"
            className={`${pathname === "/events" && "text-primary"}`}
          >
            Eventos
          </NavLink>
          <NavLink
            href="/attendees"
            className={`${pathname === "/attendees" && "text-primary"}`}
          >
            Participantes
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
