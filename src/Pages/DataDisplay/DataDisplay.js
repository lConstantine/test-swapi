import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import * as columns from './helper'
import { dataAPI } from '../../api/fetchData'
import { Table } from '../../Components/Table'
import { Link } from '../../Components/UI/Link'
import { Button } from '../../Components/UI/Button'
import { Pagination } from '../../Components/Pagination'
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

  console.log('display data', data)
  console.log('display data.results', data.results)

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='1'>
            <Button>
              <Link to='/'>Go Home</Link>
            </Button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Table dataSource={data.results} columns={columns[selection]} />
        <Pagination defaultCurrent={1} total={data.count} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        May The 4th Be With You Created by Konstantin Lebedev
      </Footer>
    </Layout>
  )
}
