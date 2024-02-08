export function useFetchData(pageId: number) {
	return fetch(`https://swapi.dev/api/people/?page=${pageId}`)
		.then((response) => {
			if (!response.ok) {
				return { error: `${response.status}: ${response.statusText}` }
			}

			return response.json()
		})
		.then((data) => {
			return data
		})
		.catch((error) => {
			return { error: error }
		})
}
