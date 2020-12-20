import React from 'react';
import Button from 'antd/lib/button';
import { FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';

export const YouTubeButton = () => {
    return (
            <span className="youTubeWrapper">
            <Button href="https://www.youtube.com/" style={{ marginLeft: 8 }}><YoutubeOutlined style={{ fontSize: '18px', color: '#FF0000' }} />YouTube</Button>
            </span>
    );
}
 
export const FacebookButton = () => {
    return (
            <span className="facebookWrapper">
            <Button href="https://www.facebook.com/" icon={<FacebookOutlined style={{ fontSize: '18px', color: '#08c' }}/>} style={{ marginLeft: 8 }}>Facebook</Button>
            </span>
    );
}
 
