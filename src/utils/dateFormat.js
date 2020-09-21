import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export const postedTime = (time) => {
  dayjs.extend(relativeTime);
  return dayjs().to(time);
};

export const displayDate = (time) => {
  return dayjs(time).format('DD/MM/YYYY');
};
