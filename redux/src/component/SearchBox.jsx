import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const SearchBox = () => {
    const contactList = useSelector((state)=>state.contactList)
    const dispatch = useDispatch();
    const search = (e) => {
        if (e.key === "Enter") {
            const keywords = e.target.value;
            dispatch({ type: 'search', payload: search });
        }
    }
    return (
        <div>
            <div className="searchInput">
                <input type="text" placeholder="검색" className="inputField" onKeyDown={(e) => search(e)}/>
            </div>
        </div>
    );
};

export default SearchBox;