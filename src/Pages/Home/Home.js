import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { columns } from './helper'
import { dataAPI } from '../../api'
import { Table } from '../../Components/Table'
import { fetchInitialData } from '../../store/features/dataSlice'

const { Header, Content, Footer } = Layout

export const Home = () => {
  const data = useSelector(state => state.data.initial)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInitialData(dataAPI))
  }, [dispatch])

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ hideOnSinglePage: true }}
        />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        May The 4th Be With You Created by Konstantin Lebedev
      </Footer>
    </Layout>
  )
}
