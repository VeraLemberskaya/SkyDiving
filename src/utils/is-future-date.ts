import { DatePickerProps } from 'antd';
import dayjs from 'dayjs';

export const isFutureDate: DatePickerProps['disabledDate'] = (current) => {
  return current && current.isAfter(dayjs().endOf('day'));
};
