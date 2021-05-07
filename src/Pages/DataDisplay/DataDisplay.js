import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'

import { fetchData } from '../../store/features/dataSlice'
import { Icon } from '../../Components/UI/IconFolder'
import { Button } from '../../Components/UI/Button'
import { Link } from '../../Components/UI/Link'
import { Table } from '../../Components/Table'
import { baseURL } from '../../api'
import * as helper from './helper'
import './DataDisplay.css'

const { Header, Content, Footer } = Layout

export const DataDisplay = () => {
  const { finalData, loading } = useSelector(state => state.data)
  const dispatch = useDispatch()
  const { selection } = useParams()

  const dataURL = `${baseURL}${selection}`

  useEffect(() => {
    dispatch(fetchData(dataURL))
  }, [dataURL, dispatch])

  const onChange = pagination => {
    const paginationUrl = `${dataURL}/?page=${pagination.current}`
    dispatch(fetchData(paginationUrl))
  }

  return (
    <Layout className='layout'>
      <Header className='header'>
        <Icon />
        <Button className='button'>
          <Link to='/'>Go Home</Link>
        </Button>
      </Header>
      <Content className='content'>
        <Table
          dataSource={finalData.results}
          columns={helper[selection]}
          onChange={onChange}
          sticky={true}
          scroll={{ y: 550 }}
          loading={helper.loader(loading)}
          pagination={{
            total: finalData.count,
            hideOnSinglePage: true,
            showSizeChanger: false,
          }}
        />
      </Content>
      <Footer>May The 4th Be With You Created by Konstantin Lebedev</Footer>
    </Layout>
  )
}
