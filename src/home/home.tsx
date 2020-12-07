import React from 'react';
import {Sidebar} from '../sidebar/sidebar';
import {Foot} from '../footer/footer';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content } = Layout;

export class Home extends React.Component<any,any> {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Foot />
        </Layout>
      </Layout>
    );
  }
}
