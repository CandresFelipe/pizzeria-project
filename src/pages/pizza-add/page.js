import PizzaAdd from './index'

PizzaAdd.route = '/pizza/add';

PizzaAdd.getData = async function (params, destination) {
    const res = await fetch('http://localhost:3000/')
    return {
        ingredients: await res.json(),
    }
}
 
export default PizzaAdd; 

//cambiar apifetch