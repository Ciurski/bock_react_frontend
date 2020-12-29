import React from 'react';
import { Layout, Menu } from 'antd';
import {
  CalendarOutlined,
  LoginOutlined,
  FileOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
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
              <Menu.Item key="1" icon={<LoginOutlined />} >
                <Router><Link to="/login">Log in</Link></Router>
              </Menu.Item>
              <Menu.Item key="2" icon={<CalendarOutlined />}>
                Calendar
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Competitor">
                <Menu.Item key="3"><Router><Link to="/profile">Profile</Link></Router></Menu.Item>
                <Menu.Item key="4">My Events</Menu.Item>
                <Menu.Item key="5">Competitors</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TrophyOutlined />} title="Contests">
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