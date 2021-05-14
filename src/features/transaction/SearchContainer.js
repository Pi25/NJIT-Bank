import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterBySearchText } from './transactionSlice'

const SearchContainer = () => {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')

  const handleChange = event => {
    setSearchText(event.target.value)
    dispatch(filterBySearchText(event.target.value))
  }

  return (
    <input
      className='search-box'
      placeholder='search transaction'
      value={searchText}
      onChange={handleChange}
    />
  )
}

export default SearchContainer
