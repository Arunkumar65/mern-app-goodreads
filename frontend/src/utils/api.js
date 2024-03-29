
const baseUrl = "http://localhost:3001/";

export const postRequest = async (url = '', data = {}) => {
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

export const getRequest = async (url = '', params = {}) => {

    //The parameters are appended to the URL using the URLSearchParams object.
    const urlWithParams = new URL(baseUrl + url);
    urlWithParams.search = new URLSearchParams(params).toString();

    const response = await fetch(urlWithParams);
    
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    return {
        data: await response.json(),
        response: response
    }
}