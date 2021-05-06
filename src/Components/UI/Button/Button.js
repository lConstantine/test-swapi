import React from 'react'

import { Button as AntButton } from 'antd'

export const Button = ({ children }) => {
  return (
    <AntButton type='primary' style={{ alignSelf: 'center' }}>
      {children}
    </AntButton>
  )
}
