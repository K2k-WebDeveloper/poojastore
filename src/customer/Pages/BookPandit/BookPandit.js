import React from 'react'
import Nava from '../../components/navigation/Nava'
import Form from './Form'

function BookPandit() {
  return (
    <div>
        <Nava />
        <div className="min-h-screen lg:mx-60 bg-gray-100">
            <Form />
        </div>
    </div>
  )
}

export default BookPandit