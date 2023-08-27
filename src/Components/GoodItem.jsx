export const GoodItem = (props) => {
  return (
    <div style={{marginLeft : '250px'}} className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={props.image} />
          </div>
          <div className="card-content">
            <p>
              Описание: {props.description}
            </p>
          </div>
          <div className="card-action">
            <span style={{fontSize : '18px', fontWeight : 'bold'}}>Цена {props.price} уед.</span>
            <button onClick={()=>{
                props.addOrder({id : props.id, price : props.price, name : props.name, count : 1})
                }} className="btn right">Купить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
