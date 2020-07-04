
import React from 'react'
import { Form, Icon, Input, Button, Select } from 'antd';
import {ThemeContext} from './MyForm'
const { Option } = Select;
class FormItem extends React.Component{
    static contextType = ThemeContext
    componentDidMount(){
        // console.log(this.props)
    }
    handleChange = value => {
        console.log(`selected ${value}`);
    }
    inputChange = e =>{
        this.props.onChange && this.props.onChange(e.target.value)
        // console.log(this.context.getFieldValue(this.props.name)) //校验用
    }
    render(){
        function convertNode(t,that){
            const {type, placeholder,options}= t
            switch ( type ) {
                case "input" :
                    return (
                        <Input
                            onChange={that.inputChange}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder={placeholder}
                        />
                    );
                case "select" :
                    return (
                        <Select 
                            style={{ minWidth:200}}
                            onChange={that.handleChange}
                            placeholder={placeholder}
                        >
                            {options.map(item => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    );
                    
                default:
            }
        }
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.context;
        // Only show error after a field is touched.
        // const usernameError = isFieldTouched('username') && getFieldError('username');
        // const passwordError = isFieldTouched('password') && getFieldError('password');
        return(
            <>
                <Form.Item label={this.props.name}>
                    {getFieldDecorator(`${this.props.name}`, {
                      rules: this.context[`${this.props.name}`],
                      initialValue : '',
                    })(convertNode(this.props,this))}
                </Form.Item>
          </>
        )
    }
}
export default FormItem