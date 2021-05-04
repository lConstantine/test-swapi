import React, { useEffect, useState } from 'react'

import { HomeContainer } from './style'
import { adapter, columns } from './helper'
import { Table } from '../../Components/Table'
import { fetchData } from '../../api/fetchData'

export const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const apiCall = async () => {
      setLoading(true)
      const swapi = await fetchData('https://swapi.dev/api/')

      const result = adapter(swapi)

      setData(result)
      setLoading(false)
    }
    apiCall()
  }, [])

  return loading ? (
    <div>LOADING...</div>
  ) : (
    <HomeContainer>
      <Table dataSource={data} columns={columns} />
    </HomeContainer>
  )
}
