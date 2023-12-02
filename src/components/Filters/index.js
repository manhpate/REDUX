import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterChange, searchTheo_mucLuaChon_Change } from '../../kho_redux/cac_thao_tac_actions';
const { Search } = Input;

export default function Filters() {
  const guiDi_Dispatch = useDispatch();
  const [inputTimKiem, setinputTimKiem] = useState('');
  const [tim_theoMucDo, settim_theoMucDo] = useState('All');
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text'
          value={inputTimKiem}
          onChange={(e) => {
            setinputTimKiem(e.target.value);
            guiDi_Dispatch(searchFilterChange(e.target.value));
          }}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={tim_theoMucDo}
          onChange={(e) => {
            settim_theoMucDo(e.target.value);
            guiDi_Dispatch(searchTheo_mucLuaChon_Change(e.target.value));
          }}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
