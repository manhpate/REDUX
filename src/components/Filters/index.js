import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { chon_GiaTris_MucDo_Change, searchFilterChange, searchTheo_mucChon_HoanThanh_Change } from '../../kho_redux/cac_thao_tac_actions';
import { filtersSlide } from "./FiltersSlide"; //vì ko phải export default nên cần lấy dúng tên
const { Search } = Input;

export default function Filters() {
  const guiDi_Dispatch = useDispatch();
  const [inputTimKiem, setinputTimKiem] = useState('');
  const [tim_theo_MucChon_ChuaHoanThanh, settim_theo_MucChon_ChuaHoanThanh] = useState('All');
  const [tim_theo_mucDo, settim_theo_mucDo] = useState([]);

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
            guiDi_Dispatch(filtersSlide.actions.thaydoitimkiem(e.target.value));
          }}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={tim_theo_MucChon_ChuaHoanThanh}
          onChange={(e) => {
            settim_theo_MucChon_ChuaHoanThanh(e.target.value);
            guiDi_Dispatch(filtersSlide.actions.searchTheo_mucChon_HoanThanh_Change(e.target.value));
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
          value={tim_theo_mucDo}
          onChange={(e) => { //mode multiple của antd sẽ luôn trả về 1 giá trị mảng
            settim_theo_mucDo(e);
            guiDi_Dispatch(filtersSlide.actions.kieuGiaTri(e))
          }}
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
