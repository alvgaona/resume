// The /dist/ssr entry, like the rest of the icons here: this renders on the
// server and is never hydrated, so the client bundle should not be pulled in.
import { GithubLogoIcon, LinkedinLogoIcon, XLogoIcon } from '@phosphor-icons/react/dist/ssr';

const socials = [
    { icon: GithubLogoIcon, href: 'https://github.com/alvgaona', label: 'GitHub' },
    { icon: XLogoIcon, href: 'https://x.com/alvgaona', label: 'X' },
    { icon: LinkedinLogoIcon, href: 'https://linkedin.com/in/alvaro-gaona', label: 'LinkedIn' },
];

function OrcidIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="12" cy="12" r="10.5" />
            <circle cx="7.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            <line x1="7.5" y1="9" x2="7.5" y2="17.5" />
            <path d="M10.5 9h2.5c2.5 0 4 1.5 4 4s-1.5 4.5-4 4.5h-2.5V9z" />
        </svg>
    );
}

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-fg-dark light:text-fg-light hover:opacity-70 transition-opacity"
                >
                    <Icon size={16} />
                </a>
            ))}
            <a
                href="https://orcid.org/0009-0003-4967-4444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                className="text-fg-dark light:text-fg-light hover:opacity-70 transition-opacity"
            >
                <OrcidIcon size={16} />
            </a>
        </div>
    );
}
