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
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-primary p-1 text-center text-sm text-muted-foreground text-white xl:block print:hidden">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-lg">⌘</span>
        </kbd>{' '}
        to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl xl:hidden print:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          className="bg-background"
          placeholder="Type a command or search..."
        />
        <CommandList className="bg-background">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Languages">
            <CommandItem
              onSelect={async () => {
                window.location.href = '/';
              }}
            >
              <span className="flex items-center gap-1">
                <Languages /> EN
              </span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                window.location.href = '/es';
              }}
            >
              <span className="flex items-center gap-1">
                <Languages /> ES
              </span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={async () => {
                setOpen(false);
                document.firstElementChild?.classList.add('dark');
              }}
            >
              <span className="flex items-center gap-1">
                <Moon /> Dark theme
              </span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                setOpen(false);
                document.firstElementChild?.classList.remove('dark');
              }}
            >
              <span className="flex items-center gap-1">
                <Sun /> Light theme
              </span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                setOpen(false);
                await new Promise((r) => setTimeout(r, 1000)); // needed so the state change has time to get applied
                window.print();
              }}
            >
              <span className="flex items-center gap-1">
                <FileCheck /> Print
              </span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, '_blank');
                }}
              >
                <span className="flex items-center gap-1">
                  <Globe /> {title}
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
