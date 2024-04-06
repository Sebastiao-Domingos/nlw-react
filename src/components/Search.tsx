import { Search } from "lucide-react";
import { ComponentProps } from "react";

interface SearchProps extends ComponentProps<"div"> {
  value: string;
  setValue: (item: string) => void;
}

export function SearchSection({ value, setValue, ...others }: SearchProps) {
  return (
    <div
      className="w-72 flex items-center gap-2 rounded-xl border border-zinc-600 p-2"
      {...others}
    >
      <Search className="size-4 text-emerald-300" />
      <input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        type="text"
        className="w-full bg-transparent border border-transparent rounded-none outline-none"
      />
    </div>
  );
}
