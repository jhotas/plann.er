import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Jean Oliveira
            </span>
            <span className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              jcwilbertt@gmail.com
            </span>
          </div>
          <CircleDashed className="text-lime-400 size-5 shrink-0" />
        </div>
        {/*Segundo link começa aqui*/}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Bárbara Pereira
            </span>
            <span className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              barbarafjp12@gmail.com
            </span>
          </div>
          <CircleDashed className="text-lime-400 size-5 shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 transition">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
