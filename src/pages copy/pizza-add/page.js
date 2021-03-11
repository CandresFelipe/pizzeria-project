import PizzaAdd from './index'
import PizzaService from '../../services/pizza-service'

PizzaAdd.route = '/pizza/add';

PizzaAdd.getData = async function (params, destination) {
    const {pizzas} = query
    return await PizzaService.getAll(pizzas);
}
export default PizzaAdd;

//tambien ingredientsServices???????