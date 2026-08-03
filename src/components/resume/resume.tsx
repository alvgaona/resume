import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Shared keyboard-focus ring (Base UI / shadcn convention).
const focusRing =
    'rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

function Resume({ render, className, ...props }: useRender.ComponentProps<'main'>) {
    return useRender({
        defaultTagName: 'main',
        render,
        props: {
            'data-slot': 'resume',
            className: cn(
                'mx-auto flex max-w-4xl flex-col gap-10 px-6 pt-12 pb-12 sm:px-8 lg:px-16 print:px-0 print:pt-0',
                className,
            ),
            ...props,
        },
    });
}

function ResumeHeader({ render, className, ...props }: useRender.ComponentProps<'div'>) {
    return useRender({
        defaultTagName: 'div',
        render,
        props: {
            'data-slot': 'resume-header',
            className: cn('flex items-center gap-6', className),
            ...props,
        },
    });
}

function ResumeIdentity({ render, className, ...props }: useRender.ComponentProps<'div'>) {
    return useRender({
        defaultTagName: 'div',
        render,
        props: {
            'data-slot': 'resume-identity',
            className: cn('flex flex-col gap-1', className),
            ...props,
        },
    });
}

function ResumeName({ render, className, ...props }: useRender.ComponentProps<'h1'>) {
    return useRender({
        defaultTagName: 'h1',
        render,
        props: {
            'data-slot': 'resume-name',
            className: cn('font-medium text-3xl uppercase tracking-wide', className),
            ...props,
        },
    });
}

function ResumeLocation({ render, className, ...props }: useRender.ComponentProps<'p'>) {
    return useRender({
        defaultTagName: 'p',
        render,
        props: {
            'data-slot': 'resume-location',
            className: cn('meta uppercase', className),
            ...props,
        },
    });
}

function ResumeSection({
    render,
    title,
    breakBefore = false,
    className,
    children,
    ...props
}: useRender.ComponentProps<'section'> & {
    title: React.ReactNode;
    breakBefore?: boolean;
}) {
    const headingId = React.useId();
    return useRender({
        defaultTagName: 'section',
        render,
        props: {
            'data-slot': 'resume-section',
            'aria-labelledby': headingId,
            className: cn('flex flex-col gap-4', breakBefore && 'page-break', className),
            ...props,
            children: (
                <>
                    {/* The hairline is the same one the footer and the docked
                        header use. alvgaona.dev's three short sections read
                        fine without it; seven dense ones do not. */}
                    <h2 id={headingId} data-slot="resume-section-title" className="section-heading border-b pb-2">
                        {title}
                    </h2>
                    {children}
                </>
            ),
        },
    });
}

const listVariants = cva('flex flex-col', {
    variants: {
        spacing: { tight: 'gap-5', loose: 'gap-6' },
    },
    defaultVariants: { spacing: 'tight' },
});

function ResumeList({
    render,
    spacing,
    className,
    ...props
}: useRender.ComponentProps<'ul'> & VariantProps<typeof listVariants>) {
    return useRender({
        defaultTagName: 'ul',
        render,
        props: {
            'data-slot': 'resume-list',
            className: cn(listVariants({ spacing }), className),
            ...props,
        },
    });
}

function ResumeEntry({
    render,
    title,
    meta,
    breakBefore = false,
    className,
    children,
    ...props
}: useRender.ComponentProps<'li'> & {
    title: React.ReactNode;
    meta?: React.ReactNode;
    breakBefore?: boolean;
}) {
    return useRender({
        defaultTagName: 'li',
        render,
        props: {
            'data-slot': 'resume-entry',
            className: cn(breakBefore && 'break-before-page', className),
            ...props,
            children: (
                <>
                    <h3 className="font-medium text-base">{title}</h3>
                    {(Array.isArray(meta) ? meta.length > 0 : meta != null) ? (
                        <div data-slot="resume-entry-meta" className="meta flex flex-col">
                            {Array.isArray(meta) ? meta.map((line) => <span key={String(line)}>{line}</span>) : meta}
                        </div>
                    ) : null}
                    {children}
                </>
            ),
        },
    });
}

function ResumeOrg({ href, className, children, ...props }: React.ComponentProps<'a'>) {
    if (!href) {
        return <span className={className}>{children}</span>;
    }
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cn(focusRing, className)} {...props}>
            {children}
        </a>
    );
}

function ResumeBullets({ items, className, ...props }: React.ComponentProps<'ul'> & { items: string[] }) {
    if (items.length === 0) return null;
    return (
        <ul
            data-slot="resume-bullets"
            className={cn('mt-2 list-outside list-disc pl-5 text-sm opacity-80', className)}
            {...props}
        >
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

function ResumeBadges({ items, className, ...props }: React.ComponentProps<'div'> & { items: string[] }) {
    return (
        <div data-slot="resume-badges" className={cn('flex flex-wrap gap-1.5', className)} {...props}>
            {items.map((item) => (
                // Outline rather than filled: a wall of solid pills is louder
                // than anything else on the page, and the mono face already
                // reads these as data.
                <Badge key={item} variant="outline" className="select-none font-azeret text-[11px] tracking-[0.02em]">
                    {item}
                </Badge>
            ))}
        </div>
    );
}

function ResumeSkill({
    render,
    category,
    items,
    breakBefore = false,
    className,
    ...props
}: Omit<useRender.ComponentProps<'li'>, 'children'> & {
    category: React.ReactNode;
    items: string[];
    breakBefore?: boolean;
}) {
    return useRender({
        defaultTagName: 'li',
        render,
        props: {
            'data-slot': 'resume-skill',
            className: cn('flex flex-col gap-2', breakBefore && 'break-before-page', className),
            ...props,
            children: (
                <>
                    <span className="meta uppercase">{category}</span>
                    <ResumeBadges items={items} />
                </>
            ),
        },
    });
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
            // The Azeret voice without .meta's dimming: these are the one row
            // on the page a reader is meant to act on.
            className={cn(
                'flex flex-wrap items-center gap-2 font-azeret text-xs uppercase tracking-[0.02em]',
                className,
            )}
            {...props}
        >
            {links.map((link, i) => (
                <React.Fragment key={link.href}>
                    <li>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={focusRing}>
                            {link.label}
                            <span className="sr-only"> (opens in new tab)</span>
                        </a>
                    </li>
                    {i < links.length - 1 ? (
                        <li aria-hidden="true" className="opacity-40">
                            •
                        </li>
                    ) : null}
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
        <ul data-slot="resume-definition-list" className={cn('flex flex-col gap-2 text-sm', className)} {...props}>
            {items.map((item, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: terms are not guaranteed unique
                <li key={i} className="flex flex-col">
                    <span>{item.term}</span>
                    <span className="meta">{item.description}</span>
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
            className={cn('grid grid-cols-1 gap-4 text-sm sm:grid-cols-2', className)}
            {...props}
        >
            {items.map((item) => (
                <li key={item.href} className="flex flex-col">
                    {/* The peach dot that used to flag these is gone; the
                        stylesheet's external-link arrow already says it. */}
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn('font-medium', focusRing)}
                    >
                        {item.name}
                        <span className="sr-only"> (opens in new tab)</span>
                    </a>
                    {item.meta ? <div className="meta">{item.meta}</div> : null}
                </li>
            ))}
        </ul>
    );
}

export {
    Resume,
    ResumeBadges,
    ResumeBullets,
    ResumeCredentialList,
    ResumeDefinitionList,
    ResumeEntry,
    ResumeHeader,
    ResumeIdentity,
    ResumeLinkList,
    ResumeList,
    ResumeLocation,
    ResumeName,
    ResumeOrg,
    ResumeSection,
    ResumeSkill,
};
