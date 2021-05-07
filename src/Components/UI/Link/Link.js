import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import './Link.css'

export const Link = ({ to, children }) => {
  return (
    <RouterLink className='link' to={to}>
      {children}
    </RouterLink>
  )
}
