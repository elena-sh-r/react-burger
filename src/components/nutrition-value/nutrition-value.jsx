import React from "react";
import PropTypes from 'prop-types';

import nutritionValueStyles from 'components/nutrition-value/nutrition-value.module.css';

const NutritionValue = ({ title, value }) => {
  return (
    <div className={`${nutritionValueStyles['nutrition-value']}`}>
      <h4 className={`text text_type_main-default text_color_inactive`}>{title}</h4>
      <p className={`text text_type_digits-default text_color_inactive`}>{value}</p>
    </div>
  )
}

export default NutritionValue;

NutritionValue.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}