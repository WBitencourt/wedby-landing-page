'use client';

import { FontSizeControl } from "@/components/font-size-control";
import { ToggleTheme } from "@/components/toggle-theme";
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from "next/navigation";

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue } from "@/components/shadcn/select";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  
  const t = useTranslations('header');

  const locales = [
    { value: 'pt', label: '🇧🇷 Português (BR)' },
    { value: 'en', label: '🇺🇸 English (US)' },
  ];

  const updatePathname = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[^\/]+/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
  };

  const handleLocaleChange = (value: string) => {
    updatePathname(value);
  }

  return (
    <header className="flex gap-4 justify-center items-center self-center row-start-1 p-4 border-b border-dashed border-zinc-200 dark:border-zinc-800">
      <div>
        <ToggleTheme.Root>
          <ToggleTheme.Icon />
        </ToggleTheme.Root>
      </div>
      <div>
        <Select 
          value={locale}
          onValueChange={handleLocaleChange}
        >
          <SelectTrigger className="w-[180px] text-sm text-black dark:text-white">
            <SelectValue placeholder={t('select.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{t('select.label')}</SelectLabel>
              {locales.map((locale) => (
                <SelectItem 
                  key={locale.value} 
                  value={locale.value}
                  className="text-sm text-black dark:text-white"
                >
                  {locale.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <h1 className="text-center text-2xl/6 w-full text-black dark:text-white">
        
      </h1>
      <div>
        <FontSizeControl.Root>
          <FontSizeControl.Actions />
        </FontSizeControl.Root>
      </div>

      </header>
    )
  }