import { deleteAllContacts } from "../services/contact_services";

export const DeleteAllContacts = ({ setRFL }) => {
    const onClick = () => {
        deleteAllContacts()
            .then(ok => setRFL(ok))
    }
    return (<>
        <button onClick={onClick}> Clear All Contacts </button>
    </>);
}