import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb , Input , Avatar, Button} from 'antd'
import { 
    HomeOutlined,
    TeamOutlined,
    GlobalOutlined,
    BarsOutlined,
    UserOutlined 
} from '@ant-design/icons'
import './index.less'

const {Header}  = Layout

const {Search} = Input
interface IProp {

}

export default class MyHeader extends Component<IProp> {
    render() {
        return (
            <Header className="header" >
                <div className='header-left'>
                    <a href="#" title='logo'>
                        <img 
                            className="logo" 
                            src='https://baozizibao.oss-cn-beijing.aliyuncs.com/code-nav/%E5%8C%85%E5%AD%90%20%282%29.png'
                            alt='logo'
                        /> 
                        <h1 className='nav'>编程导航</h1>
                    </a>
                </div>
                <div className='header-middle'>
                    <Menu mode="horizontal" className='middle-contents'>
                        <Menu.Item key="mail" icon={<HomeOutlined/>}>
                            主页
                        </Menu.Item>
                        <Menu.Item key="resource" icon={<BarsOutlined />}>
                            资源
                        </Menu.Item>
                        <Menu.Item key="world" icon={<GlobalOutlined/>}>
                            世界
                        </Menu.Item>
                        <Menu.Item key="own" icon={<TeamOutlined />}>
                            我的
                        </Menu.Item>
                    </Menu>
                </div>
                <div className='header-right'>
                    <Search placeholder="搜索学习资源"  enterButton className='search'/>
                    {/* <Button type="primary" className='recommend'>推荐</Button> */}
                    <Avatar icon={<UserOutlined />} className='avatar'/>
                </div>
            </Header>
        )
    }
}
