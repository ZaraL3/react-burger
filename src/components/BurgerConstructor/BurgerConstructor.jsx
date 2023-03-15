import React from 'react';
import constructor from './BurgerConstructor.module.css'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import OrderDetail from '../OrderDetails/OrderDetails';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types'

function BurgerConstructor(props) {
  const { data } = props;

  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className={`${constructor.main}`}>

      {isModalOpen &&
        <Modal onClose={() => setIsModalOpen(false)} >
          <OrderDetail />

        </Modal>

      }
      <div className={`mt-25 mr-8`}>

        {data
          .filter((name) => name.name.includes("Краторная булка N-200i"))
          .map((ingr) => {
            return (
              <div className={` pl-8 ${constructor.roster}`} key={ingr._id}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={ingr.name + " (верх)"}
                  price={ingr.price}
                  thumbnail={ingr.image}
                />
              </div>
            )
          })}



        <ul className={`${constructor.list}`}>
          {data.map((ingr) => {
            if (ingr.type === ('main' || 'sauce')) {
              return (
                <li className={`mb-4 ${constructor.roster}`} key={ingr._id}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingr.name}
                    price={ingr.price}
                    thumbnail={ingr.image}
                  />
                </li>
              )
            }
          }
          )
          }
        </ul>



        {data
          .filter((name) => name.name.includes("Краторная булка N-200i"))
          .map((ingr) => {
            return (
              <div className={`pl-8 ${constructor.roster}`} key={ingr._id}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={ingr.name + " (низ)"}
                  price={ingr.price}
                  thumbnail={ingr.image}
                />
              </div>
            )
          })}


      </div>



      <div className={`mt-10 ${constructor.info}`}>
        <div className={`mr-10 ${constructor.price}`}>
          <p className={`text text_type_digits-medium ${constructor.counter}`}>610</p>
          <CurrencyIcon type="primary" className={constructor.img} />
        </div>

        <Button htmlType="button" type="primary" size="large" onClick={() => setIsModalOpen(true)}>
          Оформить заказ
        </Button>

      </div>


    </div>
  )

}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
}

export default BurgerConstructor;

