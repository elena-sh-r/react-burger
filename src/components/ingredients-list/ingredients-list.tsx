import React, { forwardRef } from 'react';

import ingredientsListStyles from './ingredients-list.module.css';
import Ingredient from 'components/ingredient/ingredient';

import { TIngredientType } from 'services/types/data';

interface IProps {
  data: ReadonlyArray<TIngredientType>,
  title: string,
  type: string,
}

const IngredientsList = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const { data, title, type } = props as IProps;
  return (
    <div className={`${ingredientsListStyles.ingredients}`} ref={ref}>
      <h3 className={`text text_type_main-medium pb-6`}>{title}</h3>
      <div className={`${ingredientsListStyles['ingredients__items']} pl-4 pb-10`}>
        {data.filter(item => item.type === type).map((item) => (
          <Ingredient key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
});

export default IngredientsList;