import { Form, Button } from 'antd';
import React from 'react';

 export const ThemeContext = React.createContext();

class HorizontalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        this.props.submit(values)
        console.log('Received values of form: ', values);
    });
  };
  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <ThemeContext.Provider value={{...this.props.form,...this.props.rules}}>
            {this.props.children}
        </ThemeContext.Provider>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default WrappedHorizontalLoginForm