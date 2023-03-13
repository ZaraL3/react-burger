import React from "react";
import PropTypes from 'prop-types'
import compound from '../IngredientDetails/IngredientDetails.module.css'




const Content = (props) => {
    const { content, children } = props;
    return (
        <div>
            <p className={`text text_type_main-small text_color_inactive `}>{content}</p>
            <span className="mt-2 text text_type_digits-default text_color_inactive">{children}</span>

        </div>
    )
};

function IngredientDetails(props) {
    const { data } = props;

    return (

        <div className={`pl-10 pt-10 pr-10 ${compound.container}`}>

            <img src={data.image_large} className={"mb-4"} />
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
    data: PropTypes.shape(
        {
           _id: PropTypes.string.isRequired,
           name: PropTypes.string.isRequired,
           type: PropTypes.string.isRequired,
           proteins: PropTypes.number.isRequired,
           fat: PropTypes.number.isRequired,
           carbohydrates: PropTypes.number.isRequired,
           calories: PropTypes.number.isRequired,
           image_large: PropTypes.string.isRequired,      
        }
      
      )
};

export default IngredientDetails;