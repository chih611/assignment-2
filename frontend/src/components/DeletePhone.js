import { deletePhoneById } from "../services/phone_services"

export const DeletePhone = ({ contactId, id, setRFPL }) => {
    const onClick = () => {
        deletePhoneById({ contactId: contactId, id: id })
            .then(ok => setRFPL(ok))
    }
    return (<>
        <button onClick={onClick}>x</button>
    </>)
}