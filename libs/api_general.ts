const API = 'http://localhost:300/api/v1'

export const getAllCharacters = async () => {
    const info = await fetch(`${API}/zenless-zone-zero/characters`)
    const rawData = await info.json()
    const { data } = rawData
    return data
}