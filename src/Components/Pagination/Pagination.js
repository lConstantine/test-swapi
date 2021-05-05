import React from 'react'
import { Pagination as AntPagination } from 'antd'

export const Pagination = ({ defaultCurrent, total }) => {
  return <AntPagination defaultCurrent={defaultCurrent} total={total} />
}
