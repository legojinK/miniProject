import React, {useState} from 'react';
import {FiPlus, FiX} from "react-icons/fi";
import {motion,AnimatePresence} from "framer-motion";
import {useDispatch} from "react-redux";

const AddModal = () => {
    const [isPopupOpen,setIsPopupOpen] =useState(false)
    const [newContact,setNewContact] = useState({name:'',phone:'',photo:null})
    const dispatch =useDispatch()
    const defaultPhoto = "https://i.pinimg.com/236x/2f/55/97/2f559707c3b04a1964b37856f00ad608.jpg";
    const handleOpenPopup = () => {
        setIsPopupOpen(true)
    }
    const handleClosePopup=()=>{
        setIsPopupOpen(false);
        setNewContact({ name: '', phone: '', photo: null });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:"add_contact", payload:{name:newContact.name, phone:newContact.phone, photo:newContact.photo|| defaultPhoto}})
        setIsPopupOpen(false)
        setNewContact({ name: '', phone: '', photo: null });

    }
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewContact({ ...newContact, photo: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange=(e)=>{
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <div>
                <button className="addButton" onClick={handleOpenPopup}>
                    <FiPlus size={24} />
                </button>
            </div>
            <div>
                <AnimatePresence>
                    {isPopupOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="modalOverlay"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="modalContent"
                            >
                                <div className="modalHeader">
                                    <h2 className="modalTitle">Add New Contact</h2>
                                    <button onClick={handleClosePopup} className="modalCloseButton">
                                        <FiX size={24} />
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="formGroup">
                                        <label htmlFor="photo" className="label">
                                            Profile Photo
                                        </label>
                                        <div
                                            className="photoUpload"
                                            onClick={() => document.getElementById('photo').click()}
                                        >
                                            {newContact.photo ? (
                                                <img src={newContact.photo} alt="Profile" />
                                            ) : (
                                                <span>Click to upload</span>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            id="photo"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handlePhotoUpload}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={newContact.name}
                                            onChange={handleInputChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="label">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={newContact.phone}
                                            onChange={handleInputChange}
                                            className="input"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="submitButton"
                                    >
                                        Add Contact
                                    </button>
                                </form>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AddModal;