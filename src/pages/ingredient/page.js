import {IngredientService} from '../../services/ingredient-service';
import Ingredients from './index';

Ingredients.route = '/ingredients'

Ingredients.getData = async function (parms, query) {
    const ingredients = await IngredientService.getAll(query);
    return ingredients;
}
export default Ingredients;