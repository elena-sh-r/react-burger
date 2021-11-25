import React from "react";
import PropTypes from 'prop-types';

import ingredientDetailsStyles from 'components/ingredient-details/ingredient-details.module.css'

import Modal from "components/modal/modal";
import NutritionValue from "components/nutrition-value/nutrition-value";

const IngredientDetails = ({ ingredient, onClose }) => {
  return (
    <Modal title={'Детали ингредиента'} onClose={onClose}>
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
    </Modal>
  );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
  handleIngredientClick: PropTypes.func,
};