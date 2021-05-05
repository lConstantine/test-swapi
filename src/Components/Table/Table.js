import React from 'react'

import { Table as AntTable } from 'antd'

export const Table = ({
  dataSource,
  columns,
  onChange,
  pagination,
  sticky,
  scroll,
}) => {
  return (
    <AntTable
      dataSource={dataSource}
      columns={columns}
      pagination={pagination}
      onChange={onChange}
      sticky={sticky}
      scroll={scroll}
    />
  )
}
