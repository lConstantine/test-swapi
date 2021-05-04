import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { HomeContainer } from './style'
import { Table } from '../../Components/Table'
import { fetchData } from '../../api/fetchData'

export const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const apiCall = async () => {
      setLoading(true)
      const swapi = await fetchData('https://swapi.dev/api/')

      const array = Object.entries(swapi)
      const result = array.map((innerArray, index) => ({
        name: innerArray[0],
        api: innerArray[1],
        key: index + 1,
      }))
      setData(result)
      setLoading(false)
    }
    apiCall()
  }, [])

  const columns = [
    {
      title: 'Номер',
      dataIndex: 'key',
      key: 'number',
      width: '25%',
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
    },
    {
      title: 'API',
      dataIndex: 'api',
      key: 'api',
      width: '25%',
    },
    {
      title: '',
      dataIndex: '',
      key: 'button',
      width: '25%',
      render: record => <Link to={`${record.name}`}>Открыть страницу</Link>,
    },
  ]

  return loading ? (
    <div>LOADING...</div>
  ) : (
    <HomeContainer>
      <Table dataSource={data} columns={columns} />
    </HomeContainer>
  )
}
