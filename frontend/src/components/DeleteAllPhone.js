import { deleteAllPhones } from "../services/phone_services";

export const DeleteAllPhone = ({ contactId, setRFPL }) => {
    const onClick = () => {
        deleteAllPhones({ contactId: contactId })
            .then(ok => setRFPL(ok))
    }
    return (<>
        <button onClick={onClick}>Clear All Phones</button>
    </>);
}