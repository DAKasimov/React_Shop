export const BasketItem = (props) =>{
    const {id, name, price, count, filterBasket=Function.prototype, addElemetToBasket = Function.prototype, removeElemetToBasket=Function.prototype} = props
    return (
        <li  className="collection-item">{name} x {count} = {price} <button className="btn" onClick={()=> addElemetToBasket(id)}>+</button> <button className="btn" onClick={()=>removeElemetToBasket(id)}>-</button>
        <span  className="secondary-content "><i onClick={()=>filterBasket(id)} className="material-icons basket-delete">close</i></span>
        </li>
    )
}