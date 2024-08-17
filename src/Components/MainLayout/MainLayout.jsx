import React from 'react'
import Header from '../Header/Header'

const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default MainLayout
