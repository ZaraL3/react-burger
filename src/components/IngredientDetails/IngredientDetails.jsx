import React from "react";
import PropTypes from 'prop-types'
import compound from '../IngredientDetails/IngredientDetails.module.css'
import { ingredientType } from "../../utils/types";
import Content from "./Content";


function IngredientDetails(props) {
    const { data } = props;
    

    return (

        <div className={`pl-10 pt-10 pr-10 ${compound.container}`}>

            <img src={data.image_large} className={"mb-4"} alt={data.name}/>
            <h1 className={` mb-8 text text_type_main-medium ${compound.subtitle}`}> {data.name} </h1>
            <ul className={compound.details}>
                <li className={`mr-5 ${compound.li}`}>
                    <Content content="Калории,ккал"> {data.calories}</Content>
                </li>
                <li className={`mr-5 ${compound.li}`}>
                    <Content content="Белки"> {data.proteins}</Content>
                </li>
                <li className={`mr-5 ${compound.li}`}>
                    <Content content="Жиры"> {data.fat}</Content>
                </li>
                <li className={`mr-5 ${compound.li}`}>
                    <Content content="Углеводы"> {data.carbohydrates}</Content>
                </li>
            </ul>

        </div>

    )

}

IngredientDetails.propTypes = {
    data: PropTypes.shape(ingredientType).isRequired 
};

export default IngredientDetails;