import { CircleIcon } from '@phosphor-icons/react/dist/ssr';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const mutedLabel = 'text-resume-muted text-xs uppercase';

function Resume({ className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="resume"
      className={cn(
        'flex flex-col gap-6 px-12 md:mx-32 md:my-12 lg:mx-48 xl:mx-64 2xl:mx-96 print:mx-0',
        className,
      )}
      {...props}
    />
  );
}

function ResumeHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="resume-header"
      className={cn('mb-6 flex items-center gap-8', className)}
      {...props}
    />
  );
}

function ResumeIdentity({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="resume-identity"
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
}

function ResumeAvatar({
  className,
  alt = '',
  ...props
}: React.ComponentProps<'img'>) {
  return (
    <img
      data-slot="resume-avatar"
      alt={alt}
      className={cn('h-24 w-24 rounded-full object-cover', className)}
      {...props}
    />
  );
}

function ResumeName({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      data-slot="resume-name"
      className={cn('font-medium text-2xl', className)}
      {...props}
    />
  );
}

function ResumeLocation({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="resume-location"
      className={cn('text-[11px] font-thin uppercase', className)}
      {...props}
    />
  );
}

function ResumeSection({
  title,
  breakBefore = false,
  className,
  children,
  ...props
}: React.ComponentProps<'section'> & {
  title: React.ReactNode;
  breakBefore?: boolean;
}) {
  const headingId = React.useId();
  return (
    <section
      data-slot="resume-section"
      aria-labelledby={headingId}
      className={cn(
        'flex flex-col gap-2',
        breakBefore && 'page-break',
        className,
      )}
      {...props}
    >
      <h2
        id={headingId}
        data-slot="resume-section-title"
        className={mutedLabel}
      >
        {title}
      </h2>
      <Separator />
      {children}
    </section>
  );
}

const listVariants = cva('flex flex-col', {
  variants: {
    spacing: { tight: 'gap-2', loose: 'gap-4' },
  },
  defaultVariants: { spacing: 'tight' },
});

function ResumeList({
  spacing,
  className,
  ...props
}: React.ComponentProps<'ul'> & VariantProps<typeof listVariants>) {
  return (
    <ul
      data-slot="resume-list"
      className={cn(listVariants({ spacing }), className)}
      {...props}
    />
  );
}

function ResumeEntry({
  title,
  meta,
  breakBefore = false,
  className,
  children,
  ...props
}: React.ComponentProps<'li'> & {
  title: React.ReactNode;
  meta?: React.ReactNode;
  breakBefore?: boolean;
}) {
  return (
    <li
      data-slot="resume-entry"
      className={cn(breakBefore && 'break-before-page', className)}
      {...props}
    >
      <h3 className="font-semibold text-base">{title}</h3>
      {(Array.isArray(meta) ? meta.length > 0 : meta != null) ? (
        <div
          data-slot="resume-entry-meta"
          className={cn('flex flex-col', mutedLabel)}
        >
          {Array.isArray(meta)
            ? meta.map((line) => <span key={String(line)}>{line}</span>)
            : meta}
        </div>
      ) : null}
      {children}
    </li>
  );
}

function ResumeOrg({
  href,
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  if (!href) {
    return <span className={className}>{children}</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('hover:underline', className)}
      {...props}
    >
      {children}
    </a>
  );
}

function ResumeBullets({
  items,
  className,
  ...props
}: React.ComponentProps<'ul'> & { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul
      data-slot="resume-bullets"
      className={cn(
        'mt-2 list-inside list-disc text-resume-muted text-sm',
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ResumeBadges({
  items,
  className,
  ...props
}: React.ComponentProps<'div'> & { items: string[] }) {
  return (
    <div
      data-slot="resume-badges"
      className={cn('flex flex-wrap gap-1', className)}
      {...props}
    >
      {items.map((item) => (
        <Badge key={item} className="select-none text-white dark:bg-zinc-900">
          {item}
        </Badge>
      ))}
    </div>
  );
}

function ResumeSkill({
  category,
  items,
  breakBefore = false,
  className,
  ...props
}: Omit<React.ComponentProps<'li'>, 'children'> & {
  category: React.ReactNode;
  items: string[];
  breakBefore?: boolean;
}) {
  return (
    <li
      data-slot="resume-skill"
      className={cn(
        'flex flex-col gap-2 pr-14',
        breakBefore && 'break-before-page',
        className,
      )}
      {...props}
    >
      <span className={mutedLabel}>{category}</span>
      <ResumeBadges items={items} />
    </li>
  );
}

function ResumeLinkList({
  links,
  className,
  ...props
}: Omit<React.ComponentProps<'ul'>, 'children'> & {
  links: { label: string; href: string }[];
}) {
  return (
    <ul
      data-slot="resume-link-list"
      className={cn('flex gap-2 text-xs uppercase', className)}
      {...props}
    >
      {links.map((link, i) => (
        <React.Fragment key={link.href}>
          <li className="cursor-pointer hover:underline">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
          {i < links.length - 1 ? <li aria-hidden="true">•</li> : null}
        </React.Fragment>
      ))}
    </ul>
  );
}

function ResumeDefinitionList({
  items,
  className,
  ...props
}: Omit<React.ComponentProps<'ul'>, 'children'> & {
  items: { term: React.ReactNode; description: React.ReactNode }[];
}) {
  return (
    <ul
      data-slot="resume-definition-list"
      className={cn('mt-2 flex flex-col gap-1 text-sm', className)}
      {...props}
    >
      {items.map((item, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: terms are not guaranteed unique
        <li key={i} className="flex flex-col">
          <span>{item.term}</span>
          <span className="text-resume-muted text-xs">{item.description}</span>
        </li>
      ))}
    </ul>
  );
}

function ResumeCredentialList({
  items,
  className,
  ...props
}: Omit<React.ComponentProps<'ul'>, 'children'> & {
  items: { name: React.ReactNode; href: string; meta?: React.ReactNode }[];
}) {
  return (
    <ul
      data-slot="resume-credential-list"
      className={cn('my-2 grid grid-cols-2 text-xs sm:text-sm', className)}
      {...props}
    >
      {items.map((item) => (
        <li key={item.href} className="mb-2 flex flex-col">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            {item.name}{' '}
            <CircleIcon
              weight="fill"
              size={10}
              className="ml-0.5 inline-block align-middle text-resume-accent"
            />
          </a>
          {item.meta ? (
            <div className="flex gap-1 text-resume-muted text-xs">
              {item.meta}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export {
  Resume,
  ResumeHeader,
  ResumeIdentity,
  ResumeAvatar,
  ResumeName,
  ResumeLocation,
  ResumeSection,
  ResumeList,
  ResumeEntry,
  ResumeOrg,
  ResumeBullets,
  ResumeBadges,
  ResumeSkill,
  ResumeLinkList,
  ResumeDefinitionList,
  ResumeCredentialList,
};
