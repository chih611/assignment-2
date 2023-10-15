import { useState } from "react";
import { createNewPhone } from "../services/phone_services";

export const AddNewPhone = ({ contactId, setRFPL }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onClick = () => {
        createNewPhone({ contactId: contactId, name: name, number: phone })
            .then(() => setRFPL(true))
            .then(() => setName(''))
            .then(() => setPhone(''))

    }

    const onNameChange = ({ target }) => {
        setName(target.value)
    }

    const onPhoneChange = ({ target }) => {
        setPhone(target.value)
    }
    return (<>
        <input type='text' placeholder="Name" value={name} onChange={onNameChange} />
        <input type='text' placeholder="Phone" value={phone} onChange={onPhoneChange} />
        <button onClick={onClick}>+</button>
    </>);
}