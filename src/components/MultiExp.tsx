import { Dot } from 'lucide-react';

interface Job {
  position: string;
  location: string;
  date: string;
  responsibilities: string[];
}

interface Props {
  jobs: Job[];
  company: {
    name: string;
    logo: any;
  };
  border: boolean;
}

const MultiExp = ({ jobs, company, border }: Props) => (
  <li
    className={`page-break-always flex flex-col gap-2 ${
      border && 'border-b border-b-gray-300'
    } pb-3 pt-3 print:border-0`}
  >
    <div className="flex gap-2">
      <div>
        <img className="h-10 max-w-none sm:h-12" src={company.logo.src} />
      </div>
      <div className="flex flex-col">
        <p className="mr-auto text-lg font-semibold">{company.name}</p>
        <p className="mr-auto">1yr</p>
        <ul>
          {jobs.map((j, i) => {
            const isLast = i + 1 == jobs.length;
            return (
              <li className="relative mt-2 flex flex-col text-sm">
                <span className="absolute left-[calc(-2.2rem-6.5px/2)] top-3 block h-2 w-2 rounded-lg bg-gray-400"></span>
                <div
                  className={`before:absolute before:left-[calc(-2.2rem-1px/2)] before:top-[calc(calc(1.2rem+.8rem)+.1rem)] before:h-[calc(100%-(1.8rem))] before:w-[2px] before:bg-gray-300 before:content-[''] ${
                    isLast ? 'before:hidden' : ''
                  }`}
                >
                  <p className="text-lg font-semibold">{j.position}</p>
                  <p className="font-thin">{j.location}</p>
                  <div className="flex items-center">
                    <p className="font-thin">{j.date}</p>
                    <Dot />
                    <p className="font-thin">5 mos</p>
                  </div>
                  <ul className="col-span-3 mt-2 flex list-inside list-disc flex-col text-sm sm:pr-14">
                    {j.responsibilities.map((r) => (
                      <li className="text-justify">{r}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </li>
);

export default MultiExp;
