const SingleExp = ({
  position,
  company,
  logo,
  location,
  date,
  responsibilities,
  border,
}: {
  position: string;
  company: string;
  logo: any;
  location: string;
  date: string;
  responsibilities: string[];
  border: boolean;
}) => {
  return (
    <li
      className={`flex flex-col gap-2 ${
        border && 'border-b border-b-gray-300'
      } pb-3 print:border-0`}
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
            <p className="font-thin">{date}</p>
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
