
export const EditPhone = ({ id, setTEId, setTE }) => {

    const onClick = () => {
        setTEId(id);
        setTE(true);
    }
    return (<>
        <button onClick={onClick}>Edit</button>
    </>);
}