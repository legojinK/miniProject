import React from 'react';
import { useSelector } from "react-redux";

const List = () => {

    const contactList = useSelector((state)=>state.contactList|| [])
    const search = useSelector((state) => state.search|| '');
    const filteredContacts = contactList.filter(contact =>
        contact.name && contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div >
            <ul className="contactList">
                {filteredContacts.map((item,index)=>(
                <li className="contactItem" key={index}>
                    <img className="contactImage" alt='profile' src={item.photo}/>
                    <div className="contactName">{item.name}</div>
                    <div className="contactPhone">{item.phone}</div>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default List;