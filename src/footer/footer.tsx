import React from 'react';
//import { Layout, Button } from 'antd';
import Button from 'antd/lib/button';
import Layout from 'antd/lib/layout';
import { FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';

const { Footer, } = Layout;

export const Foot = () => {
    return (
          <Footer style={{ textAlign: 'right' }}>
            Range Club
            <Button href="https://www.facebook.com/" icon={<FacebookOutlined style={{ fontSize: '18px', color: '#08c' }}/>} style={{ marginLeft: 8 }}>Facebook</Button>
            <div className="youTubeWrapper">
            <Button href="https://www.youtube.com/" style={{ marginLeft: 8 }}><YoutubeOutlined style={{ fontSize: '18px', color: '#FF0000' }} />YouTube</Button>
            </div>
          </Footer>
    );
}
 