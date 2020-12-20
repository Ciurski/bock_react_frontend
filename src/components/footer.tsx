import React from 'react';
import {YouTubeButton, FacebookButton} from './buttons';
import Layout from 'antd/lib/layout';

const { Footer, } = Layout;

export const Foot = () => {
    return (
          <Footer style={{ textAlign: 'right' }}>
            <span id="rangeClub">Range Club Name</span>
            <FacebookButton/>
            <YouTubeButton/>
          </Footer>
    );
}
 