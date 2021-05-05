import React from 'react'

import { StyledLink } from './style'

export const Link = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}
