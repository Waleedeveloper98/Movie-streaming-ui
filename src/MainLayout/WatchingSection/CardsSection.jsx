import React from 'react'
import Card from '../../GeneralComponents/Card'

const CardsSection = () => {
  return (
    <div id='cardsSection' className='overflow-auto py-4 flex items-center gap-6'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default CardsSection