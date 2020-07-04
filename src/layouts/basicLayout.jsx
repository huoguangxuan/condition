import { Layout } from 'antd';
import React from 'react'
const { Header, Footer, Content } = Layout;

class BasicLayout extends React.Component{
    render(){
        return(
          <div>
            <Layout>
              <Header>Header</Header>
              <Content style={{padding:20}}>
                  {this.props.children}
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </div>
        )
    }
}

export default BasicLayout;