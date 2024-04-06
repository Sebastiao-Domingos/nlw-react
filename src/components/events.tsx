import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import { IconButton } from "./buttons/IconButton";
import { SearchSection } from "./Search";
import { Table } from "./table/Table";
import { TableCell } from "./table/TableData";
import { TableHead } from "./table/TableHead";
import { TableRow } from "./table/TableRow";
import { TableBody } from "./table/TbleBody";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativetime from "dayjs/plugin/relativeTime";
import { TableFoot } from "./table/TableFoot";
import { events, Event } from "../data/events";

dayjs.extend(relativetime);
dayjs.locale("pt-br");

export function Events() {
  const [value, setValue] = useState("");
  const [events_filtered, set_events_filtered] = useState<Event[]>(events);

  const [currentPage, setCurrentPage] = useState(1);

  var totalPage = Math.ceil(events_filtered.length / 10);

  function goToFirstPage() {
    setCurrentPage(1);
  }

  function gotoLastPage() {
    setCurrentPage(totalPage);
  }

  function goToNextPage() {
    setCurrentPage((prev) => prev + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((prev) => prev - 1);
  }

  useEffect(() => {
    const eventsfiltered = events.filter((event) => {
      return event.name.toLowerCase().includes(value.toLowerCase());
    });
    set_events_filtered(() => eventsfiltered);
    totalPage = Math.ceil(events_filtered.length / 10);
    setCurrentPage(1);
  }, [value]);

  return (
    <div className="space-y-4 pb-8">
      <div className="w-full flex gap-4 items-center">
        <h1 className="text-2xl font-bold">Eventos</h1>
        <SearchSection setValue={setValue} value={value} />
      </div>
      <div>
        <Table>
          <TableHead>
            <TableCell className="w-[62px] pl-4 py-2">
              <IconButton>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </IconButton>
            </TableCell>
            <TableCell>Código</TableCell>
            <TableCell>Evento</TableCell>
            <TableCell>Mentor</TableCell>
            <TableCell>Data de início</TableCell>
            <TableCell colSpan={2} className="pl-10">
              Data de termino
            </TableCell>
          </TableHead>
          <TableBody>
            {events_filtered
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((event) => (
                <TableRow key={event.id} className="hover:bg-zinc-800">
                  <TableCell className="w-[62px] pl-4 py-5">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10"
                    />
                  </TableCell>
                  <TableCell style={{ width: 160 }}>{event.id}</TableCell>
                  <TableCell className="">
                    <span>{event.name}</span>
                  </TableCell>
                  <TableCell className="">{event.coutch}</TableCell>
                  <TableCell>{dayjs().to(event.createdAt)}</TableCell>
                  <TableCell className="pl-10">
                    {dayjs().to(event.finishedAt)}
                  </TableCell>
                  <TableCell
                    style={{ width: 36 }}
                    className="text-right pl-[0px]"
                  >
                    <IconButton>
                      {" "}
                      <MoreHorizontal className="size-4" />{" "}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableCell colSpan={5} className="py-5 pl-4">
                Mostrando 10 de 200 eventos
              </TableCell>
              <TableCell
                className="space-x-4 flex items-center py-5"
                style={{ width: 260 }}
              >
                <span>
                  Página {currentPage} de {totalPage}
                </span>
                <span className="flex gap-1">
                  <IconButton onClick={goToFirstPage} isAble={currentPage > 1}>
                    <ChevronsLeft />
                  </IconButton>
                  <IconButton
                    onClick={goToPreviousPage}
                    isAble={currentPage > 1}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton onClick={goToNextPage} isAble={currentPage < 20}>
                    <ChevronRight />
                  </IconButton>
                  <IconButton onClick={gotoLastPage} isAble={currentPage < 20}>
                    <ChevronsRight />
                  </IconButton>
                </span>
              </TableCell>
            </TableRow>
          </TableFoot>
        </Table>
      </div>
    </div>
  );
}
