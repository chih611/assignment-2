import { useState } from "react";
import { createNewContact } from "../services/contact_services";

export const CreateNewContact = ({ setRFL }) => {
    const [addNew, setAddNew] = useState('');

    const onClick = () => {
        createNewContact(addNew)
            .then(ok => { setRFL(ok) })
            .then(() => { setAddNew('') });
    }
    const onChange = ({ target }) => {
        setAddNew(target.value);
    }
    return (<>
        <input type='text' placeholder="Add new contact here !" onChange={onChange} value={addNew} />
        <button onClick={onClick}> + </button>
    </>);
}