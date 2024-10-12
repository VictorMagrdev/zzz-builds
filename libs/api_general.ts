

const API = 'http://localhost:301/api/v1';

export const getAllCharacters = async () => {
    const info = await fetch(`${API}/zenless-zone-zero/characters`);
    const rawData = await info.json();
    const { data } = rawData;
    return data;
};

export const getCharacterById = async (id:number) => {
    const info = await fetch(`${API}/zenless-zone-zero/characters/${id}`);
    const rawData = await info.json();
    const { data } = rawData;
    return data;
};

export const registerUser = async (name:string, user:string, email:string, password:string, confirmPassword:string) => {
    const response = await fetch(`${API}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, user, email, password, confirmPassword }),
    });

    if (!response.ok) {
        throw new Error('Error al registrar el usuario');
    }

    return await response.json();
};

export const loginUser = async (email: string, password: string) => {
    const users = [{
        "name":"victor",
        "user":"cesar",
        "email":"test@test.com",
        "password":"janedoe",
        "confirmPassword":"janedoe",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmljdG9ybTMiLCJ1c2VyIjoiY2VzYXJkbzRlIiwiZW1haWwiOiJ0ZXN0MjEzMUB0ZXN0MncyNi5jb20iLCJwYXNzd29yZCI6ImphbmVkb2UiLCJjb25maXJtUGFzc3dvcmQiOiJqYW5lZG9lIn0.b7ejYXgg3Xduxv86zhWLnUE_a_YMXsn43BirZrj-3kE"
    }];

    const userFound = users.find(user => user.email === email && user.password === password);

    const response = () => {
        if (userFound) {
            return { ok: true, data: userFound };
        } else {
            return { ok: false };
        }
    };

    const res = response();

    if (!res.ok) {
        throw new Error('Error al iniciar sesión');
    }

    return res.data;
};

