import { Dot } from 'lucide-react';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Props {
  title: string;
  institution: string;
  location: string;
  description: string;
  date: string;
  keywords: string[];
  details: string[];
}
const ProjectCard = ({
  title,
  institution,
  location,
  description,
  date,
  keywords,
  details,
}: Props) => {
  return (
    <Dialog>
      <Card className="bg-dark flex flex-col gap-2 p-2 text-primary dark:border-white/60 print:shadow-none">
        <CardHeader className="flex w-full flex-col p-0">
          <CardTitle className="text-md">
            <DialogTrigger className="flex text-start underline-offset-2 hover:underline">
              {title} <Dot color="#20f339" className="-ml-1" />
            </DialogTrigger>
          </CardTitle>
          <div className="flex flex-col justify-center text-xs text-black/60 dark:text-white/60">
            <p>{institution}</p>
            <p className="font-light">{location}</p>
            <p className="font-light">{date}</p>
          </div>
        </CardHeader>
        <CardContent className="p-0 text-black/60 dark:text-white/60">
          <p className="text-wrap text-xs leading-normal">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-1 p-0">
          {keywords.map((keyword: string) => (
            <Badge className="select-none bg-zinc-700 text-xs text-white hover:bg-zinc-700">
              {keyword}
            </Badge>
          ))}
        </CardFooter>
      </Card>
      <DialogContent className="p flex flex-col sm:min-w-[700px]">
        <DialogHeader>
          <DialogTitle className="w-full">{title}</DialogTitle>
        </DialogHeader>
        <ul className="col-span-3 mt-2 flex list-inside list-disc flex-col gap-1 text-justify text-sm text-black/60 dark:text-white/60">
          {details.map((v) => (
            <li>{v}</li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
