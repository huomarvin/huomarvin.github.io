import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import About from './about';
import Users from './users';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Policy</Menu.Item>
                        <Menu.Item key="2">NB</Menu.Item>
                        <Menu.Item key="3">BCP</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>com</Breadcrumb.Item>
                        <Breadcrumb.Item>udmp</Breadcrumb.Item>
                        <Breadcrumb.Item>kengliang</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <UserOutlined />
                  kengliang1
                </span>
                                    }
                                >
                                    <Menu.Item key="1">A.class</Menu.Item>
                                    <Menu.Item key="2">B.class</Menu.Item>
                                    <Menu.Item key="3">C.class</Menu.Item>
                                    <Menu.Item key="4">D.class</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <LaptopOutlined />
                                            kengliang2
                </span>
                                    }
                                >
                                    <Menu.Item key="5">E.Class</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <NotificationOutlined />
                                            kengliang3
                </span>
                                    }
                                >
                                    <Menu.Item key="9">F.class</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>坑亮专属**盗版必究**</Footer>
            </Layout>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}