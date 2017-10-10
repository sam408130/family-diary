import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from 'antd';
import DiaryList from '../pages/DiaryList';
import DiaryMaker from '../pages/DiaryMaker';
const { Content } = Layout;

export default class Contents extends Component {
  render() {
    return (
      <Content className="content">
        <Route path="/index" component={DiaryList} />
        <Route path="/create" component={DiaryMaker} />
      </Content>
    )
  }
};
