import PizzaService from '../../services/pizza-service';
import Pizzas from './index';

Pizzas.route = '/';
Pizzas.getData = async function (parms, query) {
    const {pizzas} = query
    return await PizzaService.getAll(pizzas);
}

export default Pizzas; 