export const EditContact = ({ id, setTE, setTEId }) => {
    const onClick = () => {
        setTE(true);
        setTEId(id);
    }
    return (<>
        <button onClick={onClick}> Edit </button>
    </>);
}