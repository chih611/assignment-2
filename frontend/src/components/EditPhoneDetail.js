import { useEffect, useState } from "react";
import { editPhoneById, getPhonebyId } from "../services/phone_services";

export const EditPhoneDetail = ({
    contactId,
    id,
    setRFPL,
    setTE
}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        getPhonebyId({ contactId: contactId, id: id })
            .then(({ phone_name, phone_no }) => {
                setName(phone_name);
                setPhone(phone_no);
            })
    }, []);

    const onCancelClick = () => {
        setTE(false);
    }

    const onOKClick = () => {
        editPhoneById({ contactId: contactId, id: id, name: name, number: phone })
            .then(ok => { setRFPL(ok) })
            .then(() => { setTE(false) })
    }

    const onNameChange = ({ target }) => {
        setName(target.value);
    }

    const onPhoneChange = ({ target }) => {
        setPhone(target.value);
    }

    return (<>
        <input type='text' value={name} onChange={onNameChange} />
        <input type='text' value={phone} onChange={onPhoneChange} />
        <button onClick={onCancelClick}>Cancel</button>
        <button onClick={onOKClick}>OK</button>
    </>)
}