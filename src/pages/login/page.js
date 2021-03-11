import Login from './index'

Login.route='/login';

Login.getData = async function (params, query) {
    const res = await fetch('http://localhost:3000/login');
    return await res.json()
}

export default Login;

//hay que actualizar la apifetch
