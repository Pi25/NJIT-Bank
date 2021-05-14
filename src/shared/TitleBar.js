import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const TitleBar = ({ title }) => {
  const location = useLocation()
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }
  return (
    <div className='title-bar'>
      {location.pathname !== '/account' && (
        <img
          src='/images/arrow-back.png'
          alt='back icon'
          className='back-button'
          title='Back to Accounts'
          onClick={goHome}
        />
      )}
      <p>{title}</p>
    </div>
  )
}

export default TitleBar
