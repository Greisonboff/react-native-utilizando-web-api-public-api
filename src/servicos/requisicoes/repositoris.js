import api from "../api";

export async function pegarRepositorios(nome) {
    try {
        const resultado = await api.get(`https://api.github.com/users/${nome}/repos`);
        return resultado.data;
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function salvarRepositorios(postId, nome, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        });
        return 'sucesso';
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function criarRepositorios(postId, nome, data) {
    try {
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId
        });
        return 'sucesso';
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function deletarRepositorio(id) {
    try {
        await api.delete(`/repos/${id}`);
        return 'sucesso';
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}