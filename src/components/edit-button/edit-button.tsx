import { EditTwoTone } from '@ant-design/icons';
import { Button, theme } from 'antd';
import { ButtonProps } from 'antd/lib';

export const EditButton = (props: ButtonProps) => {
  const { token } = theme.useToken();

  const color = props.disabled ? token.colorBorder : token.colorPrimary;

  return (
    <Button
      icon={<EditTwoTone twoToneColor={color} />}
      shape="circle"
      size="middle"
      type="text"
      {...props}
    />
  );
};
