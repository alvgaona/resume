import { CircleIcon } from '@phosphor-icons/react/dist/ssr';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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

/**
 * Interactive project card: a Card trigger that opens a Dialog with details.
 * This is the one résumé primitive that ships JS — render it with a client:*
 * directive (e.g. client:load) when used from Astro.
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
          'flex flex-col gap-2 p-2 dark:border-white/60 print:shadow-none',
          breakBefore && 'page-break',
        )}
      >
        <CardHeader className="flex w-full flex-col p-0">
          <CardTitle className="text-base">
            <DialogTrigger className="flex text-start underline-offset-2 hover:underline">
              {title}{' '}
              <CircleIcon
                weight="fill"
                size={10}
                className="ml-0.5 inline-block align-middle text-resume-accent"
              />
            </DialogTrigger>
          </CardTitle>
          <div className="flex flex-col justify-center text-resume-muted text-xs">
            <p>{institution}</p>
            <p className="font-light">{location}</p>
            <p className="font-light">{date}</p>
          </div>
        </CardHeader>
        <CardContent className="p-0 text-resume-muted">
          <p className="text-wrap text-xs leading-normal">{description}</p>
        </CardContent>
        <CardFooter className="p-0">
          <ResumeBadges items={keywords} />
        </CardFooter>
      </Card>
      <DialogContent className="flex flex-col sm:min-w-[700px]">
        <DialogHeader>
          <DialogTitle className="w-full">{title}</DialogTitle>
        </DialogHeader>
        <ResumeBullets items={details} className="text-justify" />
      </DialogContent>
    </Dialog>
  );
};
