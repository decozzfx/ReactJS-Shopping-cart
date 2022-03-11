import React from 'react'

const Container = ({children}) => {
  return (
    <div className='px-10 mx-auto min-h-screen'>
        {children}
    </div>
  )
}

export default Container