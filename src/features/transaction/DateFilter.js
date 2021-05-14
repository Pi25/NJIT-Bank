import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterByDate } from './transactionSlice'
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const DateFilter = () => {
  const dispatch = useDispatch()
  const [selectedDate, setSelectedDate] = useState({
    year: -1,
    month: -1
  })

  const accountCreated = useSelector(
    state => state.account.selectedAccount.dateCreated
  )
  const [yearOptions, setYearOptions] = useState([])

  const handleDateChange = event => {
    let newDate = {
      ...selectedDate,
      [event.target.name]: event.target.value
    }
    setSelectedDate(newDate)
    dispatch(filterByDate(newDate))
  }

  const getYears = () => {
    let todayYear = new Date().getFullYear()
    let createdYear = new Date(accountCreated).getFullYear()
    //ES6 arrow function to create list of year from account created year to today
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range
    let tempYearOptions = Array.from(
      { length: todayYear + 1 - createdYear },
      (v, k) => createdYear + k
    )
    setYearOptions([...tempYearOptions])
  }

  useEffect(() => {
    getYears()
  }, [accountCreated])
  return (
    <div className='filter-container'>
      <div className='filter-content'>
        <p>Filter By Month :</p>
        <select
          value={selectedDate.month}
          onChange={handleDateChange}
          name='month'
          disabled={selectedDate.year == -1}
        >
          <option value={-1}>Any</option>
          {months.map((month, index) => (
            <option value={index} key={month}>{month}</option>
          ))}
        </select>
      </div>
      <div className='filter-content'>
        <p>Filter By Year :</p>
        <select
          value={selectedDate.year}
          onChange={handleDateChange}
          name='year'
        >
          <option value={-1}>Any</option>
          {yearOptions.map(year => (
            <option value={year} key={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default DateFilter
