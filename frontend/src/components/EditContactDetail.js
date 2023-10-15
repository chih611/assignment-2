import { useEffect, useState } from "react";
import { updateContactById } from "../services/contact_services";

export const EditContactDetail = ({ id, contact_name, setRFL, setTE }) => {
    const [contactName, setCN] = useState('');

    useEffect(() => {
        setCN(contact_name);
    }, []);

    const onChange = ({ target }) => {
        setCN(target.value);
    }

    const onCancelClick = () => {
        setTE(false);
    }

    const onOKClick = () => {
        updateContactById({ id: id, contact_name: contactName })
            .then(ok => {
                setRFL(ok);
                setTE(false)
            })
    }
    return (<>
        <input type='text' onChange={onChange} value={contactName} />
        <button onClick={onCancelClick}> Cancel </button>
        <button onClick={onOKClick}> OK </button>
    </>);
}