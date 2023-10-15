import { useEffect, useState } from "react";
import { AddNewPhone } from "./AddNewPhone";
import { getAllPhones } from "../services/phone_services";
import { DeletePhone } from "./DeletePhone";
import { DeleteAllPhone } from "./DeleteAllPhone";
import { EditPhone } from "./EditPhone";
import { EditPhoneDetail } from "./EditPhoneDetail";

export const PhoneList = ({ contactId }) => {
    const [list, setList] = useState([]);
    const [refeshPhoneList, setRFPL] = useState(true);
    const [toggleEdit, setTE] = useState(true);
    const [toggleEditId, setTEId] = useState(false);

    useEffect(() => {
        if (refeshPhoneList) {
            getAllPhones({ contactId: contactId })
                .then(rs => setList(rs))
                .then(() => setRFPL(false))
        }
    }, [refeshPhoneList]);
    return (<>
        <ul>
            <AddNewPhone contactId={contactId} setRFPL={setRFPL} />
            <DeleteAllPhone contactId={contactId} setRFPL={setRFPL} />
            {list.map(({ phone_name, phone_no, id }) =>
                toggleEdit && toggleEditId === id ?
                    <li key={id}>
                        <EditPhoneDetail
                            contactId={contactId}
                            id={id}
                            setRFPL={setRFPL}
                            setTE={setTE} />
                    </li>
                    :
                    <li key={id}>
                        {phone_name} | {phone_no}
                        <DeletePhone contactId={contactId} id={id} setRFPL={setRFPL} />
                        <EditPhone id={id} setTEId={setTEId} setTE={setTE} />
                    </li>
            )}
        </ul>
    </>);
}