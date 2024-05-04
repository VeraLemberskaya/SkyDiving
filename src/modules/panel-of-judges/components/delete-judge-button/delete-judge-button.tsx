import { DeleteTwoTone } from '@ant-design/icons';
import { Button, theme } from 'antd';

export const DeleteJudgeButton = () => {
  const { token } = theme.useToken();

  return (
    <Button
      icon={<DeleteTwoTone twoToneColor={token.colorError} />}
      shape="circle"
      size="middle"
      type="text"
    />
  );
};
