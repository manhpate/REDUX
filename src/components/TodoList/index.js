import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'; //useDispatch: gửi đi dữ liệu,//useSelector: lấy dự liệu từ kho store
import { addThuMuc } from '../../kho_redux/cac_thao_tac_actions'; //import action
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { layDuLieu_ListThemThuMuc_Tu_TimKiem_selector } from '../../kho_redux/layDuLieuSelectors';
export default function TodoList() {
  const guiDi = useDispatch(); //=> trả về funcn
  const xulyClickAdd = () => {
    guiDi(addThuMuc({
      id: uuidv4(), ten: inputThem, mucDo: mucDo, chuaHoanThanh: false
    }));
    setInputThem(""); setMucDo('Medium')
  }
  //const listKhoStore_themCacMuc = useSelector((state) => state.themCacMuc); //tạo file mới để khi đổi tên "themCacMuc" không phải cập nhật nhiều nơi
  const listKhoStore_themCacMuc = useSelector(layDuLieu_ListThemThuMuc_Tu_TimKiem_selector)
  const [inputThem, setInputThem] = useState('');
  const [mucDo, setMucDo] = useState('Medium');
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {listKhoStore_themCacMuc.map((item) => (<Todo key={item.id} name={item.ten} prioriry={item.mucDo} completed={item.chuaHoanThanh} />))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={inputThem} onChange={(e) => setInputThem(e.target.value)} />
          <Select defaultValue="Medium" value={mucDo} onChange={(value) => { setMucDo(value); }}>
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
          <Button type='primary' onClick={() => xulyClickAdd()}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
