
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    let tempDate;
    try {
        tempDate = format(date, 'LLLL	d, yyyy')
    } catch {
        tempDate = format(parseISO("2020-08-08"), 'LLLL	d, yyyy')
    }
   
    return <time dateTime={dateString}>{tempDate}</time>
}