import { calculateYearsMonths } from "@/lib/utils";
import { Dot } from "lucide-react";

const SingleExp = ({
  position,
  company,
  logo,
  location,
  date,
  responsibilities,
  border,
  pageBreak,
}: {
  position: string;
  company: string;
  logo: any;
  location: string;
  date: string;
  responsibilities: string[];
  border: boolean;
  pageBreak: boolean;
}) => {
  const [start, end] = date.split(" - ");
  const { years, months } = calculateYearsMonths(start, end);

  return (
    <li
      className={`flex flex-col gap-2 ${
        border && "border-b border-b-gray-300"
      } pb-3 print:border-0 print:pb-1 ${pageBreak && "page-break"}`}
    >
      <div className="flex gap-2 pt-3">
        <div>
          <img className="h-10 max-w-none sm:h-12" src={logo.src} />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{position}</p>
          <div className="flex flex-col text-sm">
            <p>{company}</p>
            <p className="font-thin">{location}</p>
            <div className="flex items-center">
              <p className="font-thin">{date}</p>
              <Dot />
              <span className="font-thin">{`${years} ${months}`}</span>
            </div>
          </div>
          <ul className="col-span-3 mt-2 flex list-inside list-disc flex-col text-sm sm:pr-14">
            {responsibilities.map((r) => (
              <li className="text-justify">{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default SingleExp;
