import {urlApi, authorize, api, resolveUrl} from '../api';

export default class PizzaService{

    static async getAll(query){
        const url = resolveUrl('pizzas', urlApi, query);
        const pizzas = await api(url).get()
        return {
            pizzas
        }
    }
    
    static async get(id){
        const url = resolveUrl(`pizzas/${id}`, urlApi);
        const pizza = await api(url).get()
        return {
            pizza
        }
    }

    static async post(){
        const url = resolveUrl('pizza/add', urlApi, query);
        const pizza = await api(url,authorize).post(body)
        return {
            pizza
        }
    }
}

