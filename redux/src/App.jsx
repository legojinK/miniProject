import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from "./component/SearchBox.jsx";
import List from "./component/List.jsx";
import AddModal from "./component/AddModal.jsx";

function App() {

    const dispatch = useDispatch();

    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="header">
                        <h1 className="headerTitle">My Contact</h1>
                    </div>
                    <SearchBox/>
                    <List/>
                    <AddModal/>
                </div>
            </div>
        </>
    );
}

export default App;
