import './App.css';
import {Home} from './components/home';
import {Profile} from './components/profile';
import {Login} from './components/login';
import {Sidebar} from './components/sidebar';
import {Foot} from './components/footer';
import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content } = Layout;

class App extends React.Component<any,any> {
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
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, alignItems: "center" }}>
          <Router>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/login" exact render={() => <Login />} />
            <Route path="/profile" exact render={() => <Profile />} />
          </Switch>
          </Router>
          </div>
        </Content>
        <Foot />
      </Layout>
    </Layout>

    );
  }
}

export default App;
