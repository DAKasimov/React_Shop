import { GoodItem } from "./GoodItem"

export const GoodList = (props) =>{


    return (
        <div>
            {props.goods && props.goods.map((item)=>{
                return (
                    <GoodItem addOrder={props.addOrder} key={item.mainId} id={item.mainId} image={item.granted[0].images.full_background} price={item.price.regularPrice} name={item.displayName} description={item.granted[0].description}/>
                )
            })}
        </div>
    )
}