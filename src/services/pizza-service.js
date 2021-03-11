import {urlApi, authorize, api, resolveUrl} from '../api';

export class PizzaService{

    static async getAll(query){
        const url = resolveUrl('pizzas', urlApi, query);
        const pizzas = await (await api(url)).get()
        return {
            pizzas
        }
    }
    
    static async edit(id){
        const url = resolveUrl(`pizzas/${id}`, urlApi, query);
        const pizza = await api(url,authorize).get()
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

