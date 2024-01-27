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
      <Card className="flex flex-col gap-2 border-gray-300 bg-white p-2 text-black print:shadow-none">
        <CardHeader className="flex w-full flex-col p-0">
          <CardTitle className="text-md">
            <DialogTrigger className="flex text-start underline-offset-2 hover:underline">
              {title} <Dot color="#20f339" className="-ml-1" />
            </DialogTrigger>
          </CardTitle>
          <div className="flex flex-col justify-center text-xs">
            <p>{institution}</p>
            <p className="font-light">{location}</p>
            <p className="font-light">{date}</p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-wrap text-xs leading-normal">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-1 p-0">
          {keywords.map((keyword: string) => (
            <Badge className="bg-zinc-700 text-xs text-white">{keyword}</Badge>
          ))}
        </CardFooter>
      </Card>
      <DialogContent className="p flex flex-col sm:min-w-[700px]">
        <DialogHeader>
          <DialogTitle className="w-full">{title}</DialogTitle>
        </DialogHeader>
        <ul className="col-span-3 mt-2 flex list-inside list-disc flex-col gap-1 text-justify text-sm">
          {details.map((v) => (
            <li>{v}</li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
