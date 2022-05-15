import React from 'react'
import Cards from './cards'
import cardsData from './cardsData'
import useCartContext from '../../context/cart-context'
import './productcards.css'



const Productcards = () => {
  const { cartState }= useCartContext();
    const cardElements = cardsData.map(card => {
        return <Cards img={card.img} heading={card.heading} subheading={card.subheading} link={card.link} outofstock={card.outofstock} price={card.price}
        originalPrice={card.originalPrice} key={card.id}/> 
    })

    
    
  return (

    <div className="flex-flow-row wrap product-cards">
    {cardElements}
    </div>
  )
}

export default Productcards;