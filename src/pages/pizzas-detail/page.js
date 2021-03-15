import PizzaService from '../../services/pizza-service'
import PizzaDetail from './index';

PizzaDetail.route = '/pizzas/:id'

PizzaDetail.getData = async function (params,query) {
    return await PizzaService.get(params);
}

export default PizzaDetail; 

