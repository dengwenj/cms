import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export default function formatUtcString(utc: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(utc).utcOffset(8).format(format)
}
