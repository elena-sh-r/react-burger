import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import ingredientsListStyles from './ingredients-list.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { ingredientType } from 'utils/types';

const IngredientsList = forwardRef(({ data, title, type, handleIngredientClick }, ref) => {

  return (
    <div className={`${ingredientsListStyles.ingredients}`} ref={ref}>
      <h3 className={`text text_type_main-medium pb-6`}>{title}</h3>
      <div className={`${ingredientsListStyles['ingredients__items']} pl-4 pb-10`}>
        {data.filter(item => item.type === type).map((item, i) => (
          <div key={i} className={`${ingredientsListStyles['ingredients__item']}`} onClick={() => handleIngredientClick(item)} >
            <img className={`pb-1`} src={item.image} alt={item.name} />
            <div className={`${ingredientsListStyles['ingredients__container']} pb-1`}>
              <p className={`${ingredientsListStyles['ingredients__price']} text text_type_digits-default pr-2`}>{item.price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${ingredientsListStyles['ingredients__name']} text text_type_main-default`}>{item.name}</p>
          </div>
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
  handleIngredientClick: PropTypes.func,
};