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
}
const ProjectCard = ({
  title,
  institution,
  location,
  description,
  date,
  keywords,
}: Props) => {
  return (
    <Dialog>
      <Card className="flex flex-col gap-2 p-2">
        <CardHeader className="flex w-full flex-col p-0">
          <CardTitle className="text-md">
            <DialogTrigger className="text-start underline-offset-2 hover:underline">
              {title}
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
            <Badge className="bg-dark-void text-xs text-slate-200">
              {keyword}
            </Badge>
          ))}
        </CardFooter>
      </Card>
      <DialogContent className="p flex flex-col sm:min-w-[700px]">
        <DialogHeader>
          <DialogTitle className="w-full">{title}</DialogTitle>
        </DialogHeader>
        <ul className="col-span-3 mt-2 flex list-inside list-disc flex-col gap-1 text-justify text-sm">
          <li>
            Designed and delivered a comprehensive deep‑learning workshop
            tailored for secondary school students. The workshop encompassed
            foundational concepts such as the Rosenblatt Perceptron, linear
            neural networks, multi‑layer linear neural networks utilizing the
            MNIST dataset, and Convolutional Neural Networks applied to the
            Kaggle Dataset named Flowers. The entire workshop was built upon
            Jupyter Notebooks, utilizing PyTorch as the preferred framework for
            deep learning.
          </li>
          <li>
            Students successfully learned the concepts and built their own
            deep‑learning models to classify images of flowers.
          </li>
          <li>
            Workshop was a great success and students were very enthusiastic
            about learning more about deep learning.
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
