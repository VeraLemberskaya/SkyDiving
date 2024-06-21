import { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Descriptions,
  DescriptionsProps,
  Flex,
  Row,
  Select,
  Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';

import { routes } from '@constants/routes';

import { PenaltyList } from './components/penalty-list';
import { PenaltyReasonType, PenaltyTypes } from './penalty-filling-out.types';
import styles from './penalty-filling-out.module.scss';
import { getPenaltySelectOptions } from './penalty-filling-out.lib';
import {
  HEADER_CARD_TEXT_COLOR,
  PENALTY_HEADER_CARD_COLOR,
  dataConfig,
  initialState,
  titleMapping,
} from './penalty-filling-out.config';

const { Text } = Typography;

export const PenaltyFillingOut = () => {
  const [angles, setAngles] = useState(initialState);
  const [penalty, setPenalty] = useState(PenaltyReasonType.NP);

  const navigate = useNavigate();

  const handleAngleSelect = (
    title: string,
    type: PenaltyTypes,
    angle: number,
  ) => {
    const key = titleMapping[title];

    setAngles((prevPenalties) => ({
      ...prevPenalties,
      [key]: {
        ...prevPenalties[key],
        [type]: angle,
      },
    }));
  };

  const handlePenaltySelect = () => (value: PenaltyReasonType) => {
    setPenalty(value);
  };

  const onSave = () => {
    //TODO: получить айди и отправить на сервер
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = {
      trickSerieId: 1,
      penaltyReason: penalty,
      ...angles,
    };
  };

  const onContinue = () => {
    navigate(routes.COMPETITIONS_REFEREEING);
  };

  //TODO: получить откуда-то время с прошлой страницы
  //TODO: получить penaltyValue в ответ на нажатие кнопки Ок
  const time = '08.52';
  const penaltyValue = null;
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Время',
      children: <Text strong>{time}</Text>,
    },
    {
      key: '2',
      label: 'Штраф',
      children: <Text strong>{penaltyValue ?? '—'}</Text>,
    },
  ];

  const isContinueButtonDisabled = penaltyValue === null ? true : false;

  return (
    <Flex vertical gap="middle">
      <Flex>
        <Descriptions
          bordered
          items={items}
          labelStyle={{ fontWeight: 'bold' }}
        />
      </Flex>
      <PenaltyList dataConfig={dataConfig} onSelect={handleAngleSelect} />
      <Row gutter={16}>
        <Col span={8}>
          <Card
            styles={{
              header: {
                backgroundColor: PENALTY_HEADER_CARD_COLOR,
                color: HEADER_CARD_TEXT_COLOR,
              },
            }}
            title="Штраф 16.0"
          >
            <Select
              allowClear
              className={styles.select}
              placeholder="Выбрать причину штрафа"
              onChange={handlePenaltySelect()}
            >
              {getPenaltySelectOptions()}
            </Select>
          </Card>
        </Col>
        <Col className={styles.buttonContainer} offset={8} span={8}>
          <Button size="large" type="primary" onClick={onSave}>
            Сохранить
          </Button>
          <Button
            disabled={isContinueButtonDisabled}
            size="large"
            type="primary"
            onClick={onContinue}
          >
            Продолжить
          </Button>
        </Col>
      </Row>
    </Flex>
  );
};
