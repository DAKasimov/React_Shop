import { useEffect, useState } from "react"
import { BasketItem } from "./BasketItem"

export const BasketList = (props) =>{
    const {order = [], handleBasketShow = Function.prototype, filterBasket=Function.prototype, addElemetToBasket = Function.prototype, removeElemetToBasket=Function.prototype} = props

    const totalPrice = order.reduce((acc, item)=>{
        return acc + item.price
    },0)
    
    
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? order.map((item)=>{
                return (
                    <BasketItem  removeElemetToBasket={removeElemetToBasket} addElemetToBasket={addElemetToBasket} filterBasket={filterBasket} key={item.id} id={item.id} name={item.name} price={item.price} count={item.count} />
                )
            }) : <li  className="collection-item">Корзина пуста</li>}
            <li className="collection-item active">Общая стоимость: {totalPrice} уед. {order.length ? <button className="btn" style={{marginLeft : '340px'}}>Оформить заказ</button> : ''} </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
      </ul>
    )
}