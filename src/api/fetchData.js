export const fetchData = async url => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export const dataAPI = 'https://swapi.dev/api/'
