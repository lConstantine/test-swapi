import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Table } from '../../Components/Table'
import { fetchData } from '../../api/fetchData'
import * as columns from './helper'

export const DataDisplay = () => {
  const [data, setData] = useState([])
  const { selection } = useParams()

  const url = `https://swapi.dev/api/${selection}`

  useEffect(() => {
    const apiCall = async url => {
      const result = await fetchData(url)
      setData(result.results)
    }
    apiCall(url)
  }, [url])

  console.log('data', data)
  console.log('columns', columns.people)

  return !data ? (
    <div>LOADING...</div>
  ) : (
    <Table dataSource={data} columns={columns[selection]} />
  )
}

/*

!data ? (
    <div>LOADING...</div>
  ) : (
    <Table dataSource={data} columns={`${columns}.${selection}`} />
  )

  */
