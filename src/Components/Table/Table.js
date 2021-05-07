import React from 'react'
import { Table as AntTable } from 'antd'

export const Table = ({
  dataSource,
  columns,
  onChange,
  pagination,
  sticky,
  scroll,
  loading,
  filterMultiple,
}) => {
  return (
    <AntTable
      className='table'
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}
      onChange={onChange}
      sticky={sticky}
      scroll={scroll}
      loading={loading}
    />
  )
}
