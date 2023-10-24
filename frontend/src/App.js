import './App.css';
import { ContactList } from './components/ContactList';

function App() {

    return (
        <>
            <div className='flex'>
                <h1>Contactor</h1>
                <ContactList />
            </div>
        </>
    );
}

export default App;