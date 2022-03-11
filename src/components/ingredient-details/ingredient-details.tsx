import React from 'react';

import { useSelector } from 'services/hooks/hooks';

import ingredientDetailsStyles from 'components/ingredient-details/ingredient-details.module.css'

import NutritionValue from "components/nutrition-value/nutrition-value";

const IngredientDetails = () => {
  const {ingredientDetails} = useSelector((state) => state.ingredientDetails);

  return (
    <div className={`${ingredientDetailsStyles['ingredient-details']}`}>
      <img className={`${ingredientDetailsStyles['ingredient-details__image']} pb-4`} src={ingredientDetails?.image_large} alt={ingredientDetails?.name} />
      <h3 className={`${ingredientDetailsStyles['ingredient-details__title']} text text_type_main-large pb-8`}>{ingredientDetails?.name}</h3>
      <div className={`${ingredientDetailsStyles['ingredient-details__nutrition-values']} pb-15`}>
        <NutritionValue title={'Калории,ккал'} value={ingredientDetails?.calories} />
        <NutritionValue title={'Белки, г'} value={ingredientDetails?.proteins} />
        <NutritionValue title={'Жиры, г'} value={ingredientDetails?.fat} />
        <NutritionValue title={'Углеводы, г'} value={ingredientDetails?.carbohydrates} />
      </div>
    </div>
  );
}

export default IngredientDetails;