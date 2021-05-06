import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const Link = ({ to, children }) => {
  return (
    <RouterLink className='link' to={to}>
      {children}
    </RouterLink>
  )
}
