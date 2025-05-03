import Image from "next/image";
import { version } from "../../package.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Página inicial",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start">
        <Image
          src="/wedby-logo.svg"
          alt="Wedby logo"
          width={500}
          height={500}
          priority
        />

        <p className="text-center text-2xl/6 w-full">
          🚧 Site em construção 🚧
        </p>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center">
        <p className="text-center text-xs sm:text-sm/6">
          Copyright © {new Date().getFullYear()} Wedby. Todos os direitos reservados. v{version}
        </p>
      </footer>
    </div>
  );
}
