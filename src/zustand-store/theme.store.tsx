import { create } from "zustand";
import { setCookie, parseCookies, destroyCookie } from 'nookies';

export type Theme = 'light' | 'dark';

export interface ThemeState {
  theme: Theme | undefined;
  toggleTheme: () => void;
  startThemeStore: () => void;
}

type Set = {
  (partial: ThemeState | Partial<ThemeState> | ((state: ThemeState) => ThemeState | Partial<ThemeState>), replace?: false | undefined): void;
  (state: ThemeState | ((state: ThemeState) => ThemeState), replace: true): void;
};
type Get = () => ThemeState;

const updateDOMTheme = (theme: Theme) => {
  document.documentElement.className = theme;
}

const toggleTheme = (get: Get, set: Set) => () => {
  const theme = get().theme === 'light' ? 'dark' : 'light';

  set({ theme });
  updateDOMTheme(theme)

  destroyCookie(undefined, 'wedby.current_theme', { domain: `.${window.location.hostname}`, path: '/' });
  setCookie(null, 'wedby.current_theme', theme, { domain: `.${window.location.hostname}`, path: '/' });
}

const startThemeStore = (get: Get, set: Set) => () => {
  try {
    const {'wedby.current_theme': cookieTheme } = parseCookies();

    if(cookieTheme === 'light' || cookieTheme === 'dark') {
      set({ theme: cookieTheme });  
      updateDOMTheme(cookieTheme)
      return;
    }

    const theme: Theme = 'light';

    set({ theme });  
    updateDOMTheme(theme)

    destroyCookie(undefined, 'wedby.current_theme', { domain: `.${window.location.hostname}`, path: '/' });
    setCookie(null, 'wedby.current_theme', theme, { domain: `.${window.location.hostname}`, path: '/' });
  } catch {
    set({ theme: 'light' });  
    updateDOMTheme('light')

    destroyCookie(undefined, 'wedby.current_theme', { domain: `.${window.location.hostname}`, path: '/' });
    setCookie(null, 'wedby.current_theme', 'light', { domain: `.${window.location.hostname}`, path: '/' });
  }
}

export const useThemeStore = create<ThemeState>((set, get) => {
  return {
    theme: 'light',
    toggleTheme: toggleTheme(get, set),
    startThemeStore: startThemeStore(get, set),
  }
})