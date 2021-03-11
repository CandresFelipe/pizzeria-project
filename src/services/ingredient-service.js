import {urlApi, authorize, api, resolveUrl} from '../api';

export class IngredientService{

    static async getAll(query) {
        const url = resolveUrl('ingredients', urlApi, query);
        const ingredients = await api(url).get()
        return {
            ingredients
        }
    }
}