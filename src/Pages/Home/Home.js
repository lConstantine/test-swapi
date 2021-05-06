import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout } from 'antd'
import 'antd/dist/antd.css'

import { fetchData } from '../../store/features/dataSlice'
import logo from '../../assets/logo.svg'
import { Table } from '../../Components/Table'
import { baseURL } from '../../api'
import { columns, loader } from './helper'
import './Home.css'

const { Header, Content, Footer } = Layout

export const Home = () => {
  const { initialData, loading } = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData(baseURL))
  }, [dispatch])

  return (
    <Layout className='layout'>
      <Header className='header'>
        <img src={logo} className='logo' alt='darth-logo' />
        <h1 className='heading'>Magenta Strikes Back</h1>
      </Header>
      <Content className='content'>
        <Table
          dataSource={initialData}
          columns={columns}
          loading={loader(loading)}
          pagination={{ hideOnSinglePage: true }}
        />
      </Content>
      <Footer className='footer'>
        May The 4th Be With You Created by Konstantin Lebedev
      </Footer>
    </Layout>
  )
}
