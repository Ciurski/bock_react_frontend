import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from '../img/AK47.svg';
const { Sider } = Layout;
const { SubMenu } = Menu;


export class Sidebar extends React.Component<any,any> {
    state = {
      collapsed: false,
    };
  
    onCollapse = (collapsed:Boolean) => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
      const { collapsed } = this.state;
      return (
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo"><img src={logo} alt="Logo" /></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Register
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Calendar
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Competitors">
                <Menu.Item key="3">Results</Menu.Item>
                <Menu.Item key="4">Trainings</Menu.Item>
                <Menu.Item key="5">News</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Contests">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
      );
    }
  }