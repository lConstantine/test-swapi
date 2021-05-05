import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import * as columns from './helper'
import { dataAPI } from '../../api'
import { Table } from '../../Components/Table'
import logo from '../../assets/darth-vader.svg'
import { Link } from '../../Components/UI/Link'
import { Button } from '../../Components/UI/Button'
import { fetchFinalData } from '../../store/features/dataSlice'

const { Header, Content, Footer } = Layout

export const DataDisplay = () => {
  const data = useSelector(state => state.data.final)
  const dispatch = useDispatch()
  const { selection } = useParams()

  const url = `${dataAPI}${selection}`

  useEffect(() => {
    dispatch(fetchFinalData(url))
  }, [url, dispatch])

  const onChange = pagination => {
    const paginationUrl = `${url}/?page=${pagination.current}`
    dispatch(fetchFinalData(paginationUrl))
  }

  return (
    <Layout className='layout'>
      <Header className='header'>
        <img src={logo} className='logo' alt='darth-logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='1'>
            <Button>
              <Link to='/'>Go Home</Link>
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className='content'>
        <Table
          dataSource={data.results}
          columns={columns[selection]}
          onChange={onChange}
          sticky={true}
          scroll={{ y: 550 }}
          pagination={{
            total: data.count,
            hideOnSinglePage: true,
            showSizeChanger: false,
          }}
        />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        May The 4th Be With You Created by Konstantin Lebedev
      </Footer>
    </Layout>
  )
}
