import PizzaService from '../../services/pizza-service';
import Pizzas from './index';

Pizzas.route = '/';
Pizzas.getData = async function (parms, query) {
    return await PizzaService.getAll(query);
}

export default Pizzas; 