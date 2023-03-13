import React from 'react';
import ingredients from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {  data } from '../../utils/data'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';



function BurgerIngredients() {

    const [current, setCurrent] = useState('Булки');
    
    const [isModalIngrOpen, setIsModalIngrOpen] = useState(false);
    const [ingrDetails, setIngrDetails] = useState(null);


    const modalOpen = (ingr)=> {
        setIsModalIngrOpen(true);
        setIngrDetails(ingr);

    }

    return (

        <div className={ingredients.main}>

            {isModalIngrOpen &&
                <Modal onClose={() => setIsModalIngrOpen(false)} header="Детали ингредиента" >
                    <IngredientDetails data={ingrDetails} />
                </Modal>

            }
            <div className={`mt-10 mb-5 ${ingredients.title}`}>
                <h1 className={`text text_type_main-large ${ingredients.text}`}> Собери бургер </h1>
            </div>
            <div className={`mb-10 ${ingredients.tabs}`} >
                <Tab value="one" active={current === 'Булки'} onClick={setCurrent} className={ingredients.text}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`mt-10 ${ingredients.ingr}`}>
                <p className={`mb-6 text text_type_main-medium ${ingredients.text}`}> Булки </p>

                <div className={`pl-4 pr-4 mb-10 ${ingredients.container}`} >

                    {data.map(ingr => {
                        if (ingr.type === 'bun') {
                            return (
                                <div key={ingr._id} className={`${ingredients.column}`} onClick={() => modalOpen(ingr)} >
                                    <div className={ingredients.icon}>
                                        <Counter count={1} size="default" extraClass="m-1" />
                                    </div>
                                    <img className={`ml-4 ${ingredients.img}`} src={ingr.image} />
                                    <div className={`mt-1 mb-1 ${ingredients.price}`}>
                                        <h1 className={ingredients.ball}> {ingr.price = 20} </h1>
                                        <CurrencyIcon type="primary" className={ingr.priceIcon} />
                                    </div>

                                    <span className={`text text_type_main-default ${ingr.name} `}> {ingr.name} </span>

                                </div>)
                        }
                    }

                    )}
                </div>


                <p className={`mb-6 text text_type_main-medium ${ingredients.text}`}> Соусы </p>


                <div className={`pl-4 pr-4 mb-10 ${ingredients.container}`} >
                    {data.map(ingr => {
                        if (ingr.type === 'sauce') {
                            return (
                                <div key={ingr._id} className={`${ingredients.column}`} onClick={() => modalOpen(ingr)}>
                                    <div className={ingredients.icon}>
                                        <Counter count={1} size="default" extraClass="m-1" />
                                    </div>
                                    <img className={`ml-4 ${ingredients.img}`} src={ingr.image} />
                                    <div className={`mt-1 mb-1 ${ingredients.price}`}>
                                        <h1 className={ingredients.ball}> {ingr.price = 20} </h1>
                                        <CurrencyIcon type="primary" className={ingredients.priceIcon} />
                                    </div>

                                    <div className={`text text_type_main-default ${ingredients.name} `}> {ingr.name} </div>

                                </div>)
                        }
                    }

                    )}
                </div>


                <p className={`mb-6 text text_type_main-medium ${ingredients.text}`}> Начинки </p>


                <div className={`pl-4 pr-4 mb-10 ${ingredients.container}`} >
                    {data.map(ingr => {
                        if (ingr.type === 'main') {
                            return (
                                <div key={ingr._id} className={`${ingredients.column}`} onClick={() => modalOpen(ingr)}>
                                    <div className={ingredients.icon}>
                                        <Counter count={1} size="default" extraClass="m-1" />
                                    </div>
                                    <img className={`ml-4 ${ingredients.img}`} src={ingr.image} />
                                    <div className={`mt-1 mb-1 ${ingredients.price}`}>
                                        <h1 className={ingredients.ball}> {ingr.price = 20} </h1>
                                        <CurrencyIcon type="primary" className={ingredients.priceIcon} />
                                    </div>

                                    <div className={`text text_type_main-default ${ingredients.name} `}> {ingr.name} </div>

                                </div>)
                        }
                    }

                    )}
                </div>

            </div>


        </div>
    )
};



export default BurgerIngredients;