import { deleteContactById } from "../services/contact_services";

export const DeleteContact = ({ id, setRFL }) => {
    const onClick = () => {
        deleteContactById(id)
            .then(ok => setRFL(ok));
    }
    return (<>
        <button onClick={onClick}> x </button>
    </>);
}