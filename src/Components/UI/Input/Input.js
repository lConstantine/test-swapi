import React, { useState } from 'react'

import { Input as AntInput } from 'antd'

export const Input = ({ data }) => {

  const [state, setState] = useState({
    filterDropdownVisible: false,
    data,
    searchText: '',
  })

  const onInputChange = e => {
    this.setState({ searchText: e.target.value })
  }
  const onSearch = () => {
    const { searchText } = state
    const reg = new RegExp(searchText, 'gi')
    setState({
      filterDropdownVisible: false,
      data: data
        .map(record => {
          const match = record.name.match(reg)
          if (!match) {
            return null
          }
          return {
            ...record,
            name: (
              <span>
                {record.name
                  .split(reg)
                  .map((text, i) =>
                    i > 0
                      ? [<span className='highlight'>{match[0]}</span>, text]
                      : text
                  )}
              </span>
            ),
          }
        })
        .filter(record => !!record),
    })
  }

  return (
    <AntInput
      placeholder='Search name'
      value={state.searchText}
      onChange={onInputChange}
      onPressEnter={onSearch}
    />
  )
}
