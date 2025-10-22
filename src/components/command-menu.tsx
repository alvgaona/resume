import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  CommandIcon,
  FileCheck,
  Globe,
  Languages,
  Sun,
  Moon,
} from 'lucide-react';
import { Button } from './ui/button';

import * as React from 'react';

interface Props {
  links: { url: string; title: string }[];
}

const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-primary p-1 text-center text-sm text-muted-foreground text-white xl:block print:hidden"
        aria-live="polite"
      >
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-lg">⌘</span>K
        </kbd>{' '}
        to open the command menu
      </div>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl xl:hidden print:hidden"
        aria-label="Open command menu"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <CommandIcon className="my-6 size-6" aria-hidden="true" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          className="bg-background"
          placeholder="Type a command or search..."
          aria-label="Search commands"
        />
        <CommandList className="bg-background">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Languages" aria-label="Language selection">
            <CommandItem
              onSelect={async () => {
                window.location.href = '/';
              }}
              aria-label="Switch to English version"
            >
              <span className="flex items-center gap-1">
                <Languages aria-hidden="true" /> EN
              </span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                window.location.href = '/es';
              }}
              aria-label="Switch to Spanish version"
            >
              <span className="flex items-center gap-1">
                <Languages aria-hidden="true" /> ES
              </span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Actions" aria-label="Theme and print actions">
            <CommandItem
              onSelect={async () => {
                setOpen(false);
                document.firstElementChild?.classList.add('dark');
              }}
              aria-label="Switch to dark theme"
            >
              <span className="flex items-center gap-1">
                <Moon aria-hidden="true" /> Dark theme
              </span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                setOpen(false);
                document.firstElementChild?.classList.remove('dark');
              }}
              aria-label="Switch to light theme"
            >
              <span className="flex items-center gap-1">
                <Sun aria-hidden="true" /> Light theme
              </span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                setOpen(false);
                await new Promise((r) => setTimeout(r, 1000)); // needed so the state change has time to get applied
                window.print();
              }}
              aria-label="Print resume"
            >
              <span className="flex items-center gap-1">
                <FileCheck aria-hidden="true" /> Print
              </span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links" aria-label="External links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                aria-label={`Open ${title} in new tab`}
              >
                <span className="flex items-center gap-1">
                  <Globe aria-hidden="true" /> {title}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
