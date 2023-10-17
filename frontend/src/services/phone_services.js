import { IP_ADDRESS } from "./common";

const URL = `http://${IP_ADDRESS}/api/contacts/`;
const PHONE_PATH = '/phones/'


export const getAllPhones = async ({ contactId }) => {
    return fetch(URL + contactId + PHONE_PATH)
        .then(data => data.json())
        .catch(message => console.log(message));
}

export const createNewPhone = async ({ contactId, name, number }) => {
    return fetch(URL + contactId + PHONE_PATH, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, number: number })

    })
        .then(data => data)
        .catch(message => console.log(message));
}

export const deletePhoneById = async ({ contactId, id }) => {
    return fetch(URL + contactId + PHONE_PATH + id, {
        method: 'delete'

    })
        .then(data => data)
        .catch(message => console.log(message));
}

export const deleteAllPhones = async ({ contactId }) => {
    return fetch(URL + contactId + PHONE_PATH, {
        method: 'delete'

    })
        .then(data => data)
        .catch(message => console.log(message));
}

export const editPhoneById = async ({ contactId, id, name, number }) => {
    return fetch(URL + contactId + PHONE_PATH + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            number: number
        })

    })
        .then(data => data)
        .catch(message => console.log(message));
}

export const getPhonebyId = async ({ id, contactId }) => {
    return fetch(URL + contactId + PHONE_PATH + id)
        .then(data => data.json())
        .catch(message => console.log(message));
}