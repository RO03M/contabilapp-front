import { API_URL } from "variables";

export const Get = async (path) => {
    const headers = {
        "Accept": "application/json"
    }

    let response = await fetch(API_URL + path, {
        method: "GET",
        headers: headers
    })
    .then(async (res) => await res.json())
    .catch(err => console.log("Error to get: " + err.message));

    return response;
}

export const Post = async (path, body) => {
    const headers = {
        "Accept": "application/json",
        "Content-type": "application/json"
    }

    let response = await fetch(API_URL + path, {
        method: "POST",
        headers: headers,
        body: body
    })
    .then(async (res) => await res.json())
    .catch(err => console.log("Error to post: " + err.message));

    return response;
}

export const Put = async (path, body) => {
    const headers = {
        "Accept": "application/json"
    }

    let response = await fetch(API_URL + path, {
        method: "PUT",
        headers: headers,
        body: body
    })
    .then(async (res) => await res.json())
    .catch(err => console.log("Error to put: " + err.message));

    return response;
}

export const Patch = async (path, body) => {
    const headers = {
        "Accept": "application/json"
    }

    let response = await fetch(API_URL + path, {
        method: "PATCH",
        headers: headers,
        body: body
    })
    .then(async (res) => await res.json())
    .catch(err => console.log("Error to patch: " + err.message));

    return response;
}

export const Delete = async (path, body) => {
    const headers = {
        "Accept": "application/json"
    }

    let response = await fetch(API_URL + path, {
        method: "DELETE",
        headers: headers,
        body: body
    })
    .then(async (res) => await res.json())
    .catch(err => console.log("Error to delete: " + err.message));

    return response;
}