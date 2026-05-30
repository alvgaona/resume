import { MonitorIcon, MoonIcon, SunIcon } from '@phosphor-icons/react/dist/ssr';
import * as React from 'react';
import { Button } from './ui/button';

type Theme = 'light' | 'dark' | 'system';

const ORDER: Theme[] = ['light', 'dark', 'system'];

const prefersDark = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (theme: Theme) => {
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark());
  document.documentElement.classList.toggle('dark', isDark);
};

const ICONS: Record<Theme, typeof SunIcon> = {
  light: SunIcon,
  dark: MoonIcon,
  system: MonitorIcon,
};

export const ThemeToggle = ({ label }: { label: string }) => {
  // Default to "system"; the real choice is read from localStorage on mount,
  // and the no-flash <head> script has already applied the correct class.
  const [theme, setTheme] = React.useState<Theme>('system');

  React.useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  React.useEffect(() => {
    applyTheme(theme);
    if (theme !== 'system') return;
    // Keep following the OS while in "system" mode.
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme('system');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [theme]);

  const cycle = () => {
    const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Ignore unavailable storage (e.g. private mode); state still updates.
    }
    setTheme(next);
  };

  const Icon = ICONS[theme];

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={cycle}
      aria-label={label}
      title={label}
      className="rounded-full print:hidden"
    >
      <Icon size={18} weight="bold" aria-hidden="true" />
    </Button>
  );
};
