import OrderIngredient from 'components/order-ingredient/order-ingredient';
import orderIngredientsStyles from './order-ingredients.module.css';

interface IProps {
  orderId: string,
  ingredientIds: ReadonlyArray<string | null>,
}

const OrderIngredients = ({orderId, ingredientIds} : IProps) => {
  return (
    <div className={`${orderIngredientsStyles['order-ingredients']}`}>
      {ingredientIds.slice(0,6).map((id, index, array) => <OrderIngredient key={orderId+id+index} ingredientId={id} text={(ingredientIds?.length > 6 && index === 0) ? `+${ingredientIds?.length - array.length + 1}` : null }/>)}
    </div>
  );
}

export default OrderIngredients;