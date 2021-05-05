import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import './Home.css'
import { Layout, Menu } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import logo from '../../assets/darth-vader.svg'
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
      <Header className='header'>
        <img src={logo} className='logo' alt='darth-logo' />
        <h1 className='heading'>MAGENTA STRIKES BACK</h1>
      </Header>
      <Content className='content'>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ hideOnSinglePage: true }}
        />
      </Content>
      <Footer className='footer'>
        May The 4th Be With You Created by Konstantin Lebedev
      </Footer>
    </Layout>
  )
}
