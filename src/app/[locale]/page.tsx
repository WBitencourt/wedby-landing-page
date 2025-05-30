import Image from "next/image";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Home",
  description: "Página inicial",
};

export default function Home() {
  const t = useTranslations('pages.home');

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image
        src="/wedby-logo.svg"
        alt="Wedby"
        width={500}
        height={500}
        priority
      />

      <p className="text-center text-2xl/6 w-full">
        🚧 {t('construction')} 🚧
      </p>
    </div>
  );
}
