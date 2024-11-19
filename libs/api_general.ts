const API = "https://zzzbuilds-server.lat/api/v1";

export const getAllCharacters = async () => {
  const info = await fetch(`${API}/zenless-zone-zero/characters`);
  const rawData = await info.json();
  const { data } = rawData;
  return data;
};

export const getCharacterById = async (id: number) => {
  const info = await fetch(`${API}/zenless-zone-zero/characters/${id}`);
  const rawData = await info.json();
  const { data } = rawData;
  return data;
};

export const registerUser = async (
  name: string,
  user: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  const response = await fetch(`${API}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, user, email, password, confirmPassword }),
  });

  if (!response.ok) {
    throw new Error("Error al registrar el usuario");
  }

  return await response.json();
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${API}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error al ingresar el usuario");
  }

  const data = await response.json();

  return data;
};

export const getUserProfile = async (token: string | null) => {
  const response = await fetch(`${API}/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("El tokennnn", token);

  console.log(response);
  if (!response.ok) {
    throw new Error("Error al obtener el profile");
  }

  return await response.json();
};
