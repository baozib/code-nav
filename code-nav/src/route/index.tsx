import React, { ReactElement, ReactNode } from 'react'
import { 
    AppstoreOutlined,
    FileTextOutlined,
    VideoCameraOutlined
} from '@ant-design/icons'

//define route type
export interface IRoute{
    title: string
    key: number
    url: string
    component?: ReactNode
    icon?: ReactNode
    children?: IRoute[]
}

//write the contents of the left menu
export const router:IRoute[] = [
    {
        title: '找资源',
        key: 1,
        url: '/resource',
        icon: <AppstoreOutlined/>
    },
    {
        title: '找教程',
        key: 2,
        url: '/tutorial',
        icon: <FileTextOutlined/>
    },
    {
        title: '找视频',
        key: 3,
        url: '/video',
        icon: <VideoCameraOutlined />
    },
]
