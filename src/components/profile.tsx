import React from 'react';
import axios from 'axios';
import { Console } from 'console';
export class Profile extends React.Component<any,any> {
  componentDidMount () {
    axios.get('https://bock-django.herokuapp.com/api/competitors/1/')
      .then(response =>{
        console.log(response);
      });
  }
  render() {
    return (
              <p>Profile</p>
    );
  }
}
