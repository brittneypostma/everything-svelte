import { isBefore } from 'date-fns';

export const convertDate = (myDate: string): string => {
	const [year, month, date] = splitDate(myDate);
	return `${parseInt(month)}/${parseInt(date)}/${year}`;
};

export const isLate = (myDate: string): boolean => {
	const [year, month, date] = splitDate(myDate);
	const dueDate = new Date(parseInt(year), parseInt(month), parseInt(date));
	const today = new Date();
	return isBefore(dueDate, today);
};

export const splitDate = (myDate: string): string[] => {
	return myDate.split('-');
};
