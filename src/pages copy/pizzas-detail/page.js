import PizzaDetail from './index';
import PizzaService from '../../services/pizza-service'

PizzaDetail.route = '/pizzas/:id'

PizzaDetail.getData = async function (params) {
    const { id } = params;
    return await PizzaService.getAll(pizzas);
}

export default PizzaDetail; 

