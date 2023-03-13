import React from 'react';
import constructor from './BurgerConstructor.module.css'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../utils/data'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import OrderDetail from '../OrderDetails/OrderDetails';


function BurgerConstructor() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className={`${constructor.main}`}>

      {isModalOpen &&
        <Modal onClose={() => setIsModalOpen(false)} >
          <OrderDetail />

        </Modal>

      }
      <ul className={`mt-25 mr-4 ml-4 ${constructor.list}`}>


        <li className={`mb-4 pl-8  ${constructor.roster}`}>

          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </li>


        {data.map(ingr => {
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
        })}
        {/* <li className={`mb-4 ${constructor.roster}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
            />
          </li>

          <li className={`mb-4 ${constructor.roster}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
            />
          </li>

          <li className={`mb-4 ${constructor.roster}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
            />
          </li>

          <li className={`mb-4 ${constructor.roster}`}>

            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
            />
          </li>

          <li className={`mb-4 ${constructor.roster}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
            />
          </li> */}

        <li className={`mb-4 pl-8  ${constructor.roster}`}>

          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={20}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
      </ul>

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


export default BurgerConstructor;

