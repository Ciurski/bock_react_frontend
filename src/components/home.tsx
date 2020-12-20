import React from 'react';
import {Sidebar} from './sidebar';
import {Foot} from './footer';
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
              <Breadcrumb.Item>Homepage</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Content
            </div>
          </Content>
          <Foot />
        </Layout>
      </Layout>
    );
  }
}
