import React from "react";
import PropTypes from 'prop-types';

import ingredientDetailsStyles from 'components/ingredient-details/ingredient-details.module.css'

import NutritionValue from "components/nutrition-value/nutrition-value";
import { ingredientType } from "utils/types";

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={`${ingredientDetailsStyles['ingredient-details']}`}>
      <img className={`${ingredientDetailsStyles['ingredient-details__image']} pb-4`} src={ingredient.image_large} alt={ingredient.name} />
      <h3 className={`${ingredientDetailsStyles['ingredient-details__title']} text text_type_main-large pb-8`}>{ingredient.name}</h3>
      <div className={`${ingredientDetailsStyles['ingredient-details__nutrition-values']} pb-15`}>
        <NutritionValue title={'Калории,ккал'} value={ingredient.calories} />
        <NutritionValue title={'Белки, г'} value={ingredient.proteins} />
        <NutritionValue title={'Жиры, г'} value={ingredient.fat} />
        <NutritionValue title={'Углеводы, г'} value={ingredient.carbohydrates} />
      </div>
    </div>
  );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape(ingredientType).isRequired,
  handleIngredientClick: PropTypes.func,
};