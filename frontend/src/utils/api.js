
const baseUrl = "http://localhost:3001/";

export const postRequest = async (url = '', data = {}) => {
    console.log(baseUrl + url)
    const response = await fetch(baseUrl + url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    return {
        data: await response.json(),
        response: response
    }
}