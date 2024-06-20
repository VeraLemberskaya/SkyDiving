import { DatePickerProps } from 'antd';
import dayjs from 'dayjs';

export const isPastDate: DatePickerProps['disabledDate'] = (current) => {
  return current && current.isBefore(dayjs().endOf('day'));
};
