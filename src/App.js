import React from 'react';
import BasicLayout from './layouts/basicLayout'
import Condition from './condition/MyForm'
import Item from './condition/Item'
import rules from './condition/validator'
import { Row, Col } from 'antd';
function mysubmit(e){
  console.log(e)
}
function usernameChange(val){ //可以自己做个节流
  console.log(val)
}
function App() {

  return (
    <div className="App">
      <BasicLayout>
        <Condition rules={rules} submit={mysubmit}>
          <Row gutter={24}>
            <Col span={8}>
              <Item type="input" onChange={usernameChange} label="姓名" name="username" placeholder="username" />
            </Col>
            <Col span={8}>
              <Item type="input" label="年龄" name="age" placeholder="age" />
            </Col>
            <Col span={8}>
              <Item type="select" label="来选一下" name="xila" options={['abc','123454']} placeholder="请选择"></Item>
            </Col>
          </Row>
        </Condition>
      </BasicLayout>
    </div>
  );
}

export default App;
