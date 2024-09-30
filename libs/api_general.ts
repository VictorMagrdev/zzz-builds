const API = 'http://localhost:3001/api/v1'

export const getAllCharacters = async () => {
    const info = await fetch(`${API}/zenless-zone-zero/characters`)
    const rawData = await info.json()
    const { data } = rawData
    return data
}

export const getCharacter = async (id: number) => {
    const info = await fetch(`${API}/zenless-zone-zero/characters/${id}`)
    const rawData = await info.json()
    const { data } = rawData
    return data
}