export const fetchData = async () => {
    const endpoint = 'https://webapi.no/api/v1/hash/sha256?value=carlo'
    const response = await fetch(endpoint);
    console.log(response);
    const result = await response.json();
    console.log(result.data.hash)
}
