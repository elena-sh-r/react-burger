import React from "react";

import nutritionValueStyles from 'components/nutrition-value/nutrition-value.module.css';

interface IProps {
  title: string,
  value: number,
}

const NutritionValue = ({ title, value }: IProps) => {
  return (
    <div className={`${nutritionValueStyles['nutrition-value']}`}>
      <h4 className={`text text_type_main-default text_color_inactive`}>{title}</h4>
      <p className={`text text_type_digits-default text_color_inactive`}>{value}</p>
    </div>
  )
}

export default NutritionValue;
