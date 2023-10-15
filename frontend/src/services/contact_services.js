const URL = `http://192.168.4.105/api/contacts/`;

export const getAllContacts = async () => {
    return fetch(URL)
        .then(data => data.json())
        .catch(message => console.log(message));
}

export const createNewContact = async (contactName) => {
    return fetch(URL,
        {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contact_name: contactName })
        })
        .then(data => data)
        .catch(message => console.log(message));
}

export const deleteContactById = async (id) => {
    return fetch(URL + id, {
        method: 'delete'
    })
        .then(data => data)
        .catch(message => console.log(message));
}

export const deleteAllContacts = async () => {
    return fetch(URL, {
        method: 'delete'
    })
        .then(data => data)
        .catch(message => console.log(message));
}

export const updateContactById = async ({ id, contact_name }) => {
    return fetch(URL + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contact_name: contact_name
        })
    })
        .then(data => data)
        .catch(message => console.log(message));
}