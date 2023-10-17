import { useState, useEffect } from 'react';
import { getAllContacts } from '../services/contact_services';
import { CreateNewContact } from './CreateNewContact';
import { DeleteContact } from './DeleteContact';
import { DeleteAllContacts } from './DeleteAllContacts';
import { EditContact } from './EditContact';
import { EditContactDetail } from './EditContactDetail';
import { PhoneList } from './PhoneList';

export const ContactList = () => {
    const [list, setList] = useState([]);
    const [refeshList, setRFL] = useState(true);
    const [toggleEdit, setTE] = useState(false);
    const [toggleEditId, setTEId] = useState(0);

    useEffect(() => {
        if (refeshList) getAllContacts().then(rs => setList(rs)); setRFL(false);
    }, [refeshList]);

    return (<>
        <ul>
            <CreateNewContact setRFL={setRFL} />
            <DeleteAllContacts setRFL={setRFL} />
            <hr />
            {list ? list.map(({ id, contact_name }) =>
                toggleEdit && toggleEditId === id ?
                    <li key={id}>
                        <EditContactDetail
                            id={id}
                            contact_name={contact_name}
                            setRFL={setRFL}
                            setTE={setTE} />
                    </li>
                    :
                    <li key={id}>
                        {contact_name}
                        <DeleteContact id={id} setRFL={setRFL} />
                        <EditContact id={id} setTE={setTE} setTEId={setTEId} />
                        <PhoneList contactId={id} />
                        <hr />
                    </li>
            ) : 'API Connection failed!!!'}
        </ul>
    </>);
}