const API = 'http://localhost:300/api/v1'

export const getAllCharacters = async () => {
    const info = await fetch(`${API}/zenless-zone-zero/characters`)
    const rawData = await info.json()
    const { data } = rawData
    return data
}

export const getCharacterById = async (id:number) => {
    const info = await fetch(`${API}/zenless-zone-zero/characters/${id}`)
    const rawData = await info.json()
    const { data } = rawData
    return data
}