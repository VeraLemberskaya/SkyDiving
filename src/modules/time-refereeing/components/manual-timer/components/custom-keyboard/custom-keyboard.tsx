import { Button, Flex } from 'antd';

import { CustomKeyboardProps } from '../../../../time-refereeing.types';
import { MAX_INPUT_VALUE } from '../../../../time-refereeing.config';

import styles from './custom-keyboard.module.scss';

export const CustomKeyboard = ({
  onInput,
  currentValue,
}: CustomKeyboardProps) => {
  const handleButtonClick = (value: string) => () => {
    const newValue = currentValue + value;

    if (newValue.length <= MAX_INPUT_VALUE) {
      onInput(newValue);
    }
  };

  const handleClear = () => {
    onInput('');
  };

  const handleBackspace = () => {
    onInput(currentValue.slice(0, -1));
  };

  const renderButtons = (numbers: number[]) => {
    return numbers.map((num) => (
      <Button
        className={styles.keyboardButton}
        key={num}
        onClick={handleButtonClick(num.toString())}
      >
        {num}
      </Button>
    ));
  };

  return (
    <Flex vertical gap="small">
      <Flex gap="small">
        <Button className={styles.keyboardButton} onClick={handleClear}>
          C
        </Button>
        <Button className={styles.keyboardButton} onClick={handleBackspace}>
          ⌫
        </Button>
      </Flex>
      <Flex gap="small">{renderButtons([7, 8, 9])}</Flex>
      <Flex gap="small">{renderButtons([4, 5, 6])}</Flex>
      <Flex gap="small">{renderButtons([1, 2, 3])}</Flex>
      <Flex>
        <Button
          className={styles.keyboardButton}
          onClick={handleButtonClick('0')}
        >
          0
        </Button>
      </Flex>
    </Flex>
  );
};
