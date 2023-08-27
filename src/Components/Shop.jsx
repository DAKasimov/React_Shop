import { API_URL, API_KEY } from "../config"
import { useState, useEffect } from "react"
import { GoodList } from "./GoodList"
import { Preloader } from "./Preloader"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const addOrder = (obj) => {
    let flag = false
    let temp = {}
    let tempPrice = obj.price
    order.forEach((item) => {
      if (obj.id === item.id) {
        flag = true
        temp = item
        
      }
    })
    if (flag === false) {
      setOrder([obj, ...order])
      setAlertName(obj.name)
    } else {
      temp.count += 1
      temp.price += tempPrice
      order.forEach((item) => {
        if (temp.id === item.id) {
          item = temp
          
        }
      })
      setOrder([...order])
    }
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const closeAlert = () =>{
    setAlertName('')
  }

  const filterBasket = (id) => {
    setOrder(order.filter((item) => item.id !== id))
  }

  const addElemetToBasket = (id) => {
    let tempPrice = 0
    goods.forEach((item)=>{
        if (item.mainId === id){
            tempPrice = item.price.regularPrice
        }
    })
    order.forEach((item) => {
      if (item.id === id) {
        item.count += 1
        item.price += tempPrice
      }
    })
    
    setOrder([...order])
  }

  const removeElemetToBasket = (id) => {
    let tempPrice = 0
    goods.forEach((item)=>{
        if (item.mainId === id){
            tempPrice = item.price.regularPrice
        }
    })
    order.forEach((item) => {
      if (item.id === id) {
        if (item.count > 0) {
          item.count -= 1
          item.price -= tempPrice
        }
      }
    })
    setOrder([...order])
  }

  useEffect(() => {
    fetch("https://fortniteapi.io/v2/shop?lang=ru", {
      headers: {
        Authorization: `84e6482d-bf7e1daa-e14bbf9b-6ecf3ef1`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop)
        setLoading(false)
      })
  }, [])

  // useEffect(()=>{console.log(isBasketShow);}, [isBasketShow])

  return (
    <div className="container content">
      <Cart
        quantity={order && order.length}
        handleBasketShow={handleBasketShow}
      />
      {loading ? <Preloader /> : <GoodList addOrder={addOrder} goods={goods} />}
      {isBasketShow && (
        <BasketList
          removeElemetToBasket={removeElemetToBasket}
          addElemetToBasket={addElemetToBasket}
          filterBasket={filterBasket}
          order={order}
          
          handleBasketShow={handleBasketShow}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
    </div>
  )
}
