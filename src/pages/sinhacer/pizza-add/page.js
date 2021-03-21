import PizzaAdd from './index'
import {IngredientService} from '../../services/ingredient-service'

PizzaAdd.route = '/pizzaadd';

PizzaAdd.getData = async function (params, query) {
    return IngredientService.getAll();
}
export default PizzaAdd; 

