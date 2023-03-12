import React from "react";
import done from  '../../images/done.svg'
import details from '../OrderDetails/OrderDetails.module.css'

function OrderDetail () {
    console.log(details);
    return (
        <div className={`${details.box}`}>
            <h1 className={` mb-8 text text_type_digits-large ${details.name}`}> 034536</h1>
            <h1 className={` mb-15 text text_type_main-medium ${details.subtitle}`}> идентификатор заказа</h1>
            <div className={`mb-15 ${details.image}`}>            
            </div>          
            <p className="mb-2 text text_type_main-small"> Ваш заказ начали готовить</p>
            <p className="mb-30 text text_type_main-default text_color_inactive" > Дождитесь готовности на орбитальной станции </p>

        </div>
    )

}

export default OrderDetail;