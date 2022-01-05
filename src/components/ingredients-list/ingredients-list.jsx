import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import ingredientsListStyles from './ingredients-list.module.css';
import Ingredient from 'components/ingredient/ingredient';

import { ingredientType } from 'utils/types';

const IngredientsList = forwardRef(({ data, title, type }, ref) => {

  return (
    <div className={`${ingredientsListStyles.ingredients}`} ref={ref}>
      <h3 className={`text text_type_main-medium pb-6`}>{title}</h3>
      <div className={`${ingredientsListStyles['ingredients__items']} pl-4 pb-10`}>
        {data.filter(item => item.type === type).map((item, i) => (
          <Ingredient key={i} item={item} />
        ))}
      </div>
    </div>
  );
});

export default IngredientsList;

IngredientsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};