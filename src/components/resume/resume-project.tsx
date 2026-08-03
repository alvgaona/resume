import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ResumeBadges, ResumeBullets } from './resume';

interface ResumeProjectProps {
    title: string;
    institution: string;
    location: string;
    description: string;
    date: string;
    keywords: string[];
    details: string[];
    breakBefore?: boolean;
}

const focusRing =
    'rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

/**
 * Interactive project card: a Card whose title opens a details dialog.
 * Composes the shadcn/Base UI ui/Dialog (Base UI under the hood). Ships JS;
 * render with a client:* directive from Astro.
 */
export const ResumeProject = ({
    title,
    institution,
    location,
    description,
    date,
    keywords,
    details,
    breakBefore = false,
}: ResumeProjectProps) => {
    return (
        <Dialog>
            <Card
                data-slot="resume-project"
                className={cn(
                    'flex flex-col gap-3 rounded-lg border p-3 shadow-none print:shadow-none',
                    breakBefore && 'page-break',
                )}
            >
                <CardHeader className="flex w-full flex-col gap-1 p-0">
                    <CardTitle className="font-medium text-base">
                        {/* Underlined on hover only: a wall of underlined card
                            titles competes with the body links. */}
                        <DialogTrigger className={cn('flex text-start underline-offset-4 hover:underline', focusRing)}>
                            {title}
                        </DialogTrigger>
                    </CardTitle>
                    <div className="meta flex flex-col">
                        <span>{institution}</span>
                        <span>{location}</span>
                        <span>{date}</span>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-sm leading-normal opacity-80">{description}</p>
                </CardContent>
                <CardFooter className="p-0">
                    <ResumeBadges items={keywords} />
                </CardFooter>
            </Card>

            <DialogContent className="sm:max-w-2xl">
                <DialogTitle className="font-medium text-base">{title}</DialogTitle>
                <ResumeBullets items={details} className="mt-0" />
            </DialogContent>
        </Dialog>
    );
};
