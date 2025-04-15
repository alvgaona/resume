import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function calculateYearsMonths(start: string, end: string) {
  let endDate;
  if (end == 'Present') {
    endDate = new Date();
  } else {
    endDate = new Date(end);
  }

  const startDate = new Date(start);

  let years: string | number = endDate.getFullYear() - startDate.getFullYear();
  let months: string | number = endDate.getMonth() - startDate.getMonth() + 1;

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  months = months == 0 ? '' : months + (months > 1 ? ' mos' : ' mo');
  years = years == 0 ? '' : years + (years > 1 ? ' yrs' : ' yr');

  return { years, months };
}
