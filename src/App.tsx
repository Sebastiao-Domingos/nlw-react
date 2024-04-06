import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1216px] m-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export { App };
