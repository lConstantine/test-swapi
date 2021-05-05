import React from 'react'

import { Table as AntTable } from 'antd'

export const Table = ({ dataSource, columns }) => {
  return <AntTable dataSource={dataSource} columns={columns} />
}
