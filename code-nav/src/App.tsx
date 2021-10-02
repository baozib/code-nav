import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MyHeader from './components/GlobalHeader'
import { router } from './route'
import { NavLink , Link , Redirect, Route, Switch} from 'react-router-dom';
import Resource from './pages/Resource';
import Video from './pages/Video';
import Tutorial from './pages/Tutorial';
import './App.less'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App: React.FC = () => {

    return (
        <Layout>
           <MyHeader></MyHeader>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="55px"
                    width={200}
                    className="site-layout-background main-menu"
                >

                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                       
                    {
                        router.map((route)=> {
                            return (
                                <Menu.Item key={route.key} icon={route.icon}>
                                    <NavLink  to={route.url}>
                                        {route.title}
                                    </NavLink>
                                </Menu.Item>
                            )
                        })
                        
                    }   
                     <Redirect to="resource"></Redirect>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            <Switch>
                                <Route path="/resource" component={Resource}></Route>
                                <Route path='/tutorial' component={Tutorial}></Route>
                                <Route path='/video' component={Video}></Route>
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default App