import api from "../api"

export async function buscaUsuario(nomeUsuario){
    try {
        const resultado = await api.get(`https://api.github.com/users/${nomeUsuario}`);
        return resultado.data;
    } catch (error) {
        console.log(error)
        return {}
    }
} 