import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'services/hooks/hooks';

import ingredientDetailsStyles from 'components/ingredient-details/ingredient-details.module.css'

import NutritionValue from "components/nutrition-value/nutrition-value";
import { useHistory, useParams } from 'react-router-dom';
import { setIngredientDetails } from 'services/actions/ingredient-details';
import { getBurgerIngredientsThunk } from 'services/actions/burger-ingredients';

interface IParams {
  ingredientId: string;
}

const IngredientDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { ingredientId } = useParams<IParams>();

  const {burgerIngredients} = useSelector((state) => state.burgerIngredients);
  const {ingredientDetails} = useSelector((state) => state.ingredientDetails);

  useEffect(() => {
    if (!burgerIngredients || burgerIngredients?.length === 0){
        dispatch(getBurgerIngredientsThunk());
        return;
    }
    const item = burgerIngredients?.find( x => x._id === ingredientId );

    if (item)
    {
      dispatch(setIngredientDetails(item));
    }
    else
    {
      history.push('');
    }
    
  }, [burgerIngredients, ingredientId]);

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