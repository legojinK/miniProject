import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {
    Button,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import {SearchIcon, HamburgerIcon} from "@chakra-ui/icons";
import {useNavigate} from "react-router";


const Navbar = ({setAuth, auth}) => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ];
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }
    const goToMain = () => {
        navigate("/");
    }
    const logoImg = (`/assets/logo.png`);
    const search = (e) => {
        if (e.key === "Enter") {
            const keywords = e.target.value;
            navigate(`/?q=${keywords}`);
        }
    }
    const logout = () => {
        setAuth(false);
        navigate("/");
    }

    return (
        <div>
            {auth ?
                <div className="login-button" onClick={logout}>
                    <FontAwesomeIcon icon={faUser} className="login-icon"/>
                    <div> 로그아웃 </div>
                </div>
                :
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} className="login-icon"/>
                    <div> 로그인 </div>
                </div>
            }
            <div className="nav-logo">
                <img src={logoImg} alt='logo' width={100} onClick={goToMain}/>
            </div>
            <div className="desktop-menu">
                <div className="nav-menu">
                    <div className="nav-menu-list">
                        {menuList.map((menu, index) => (
                            <ul key={index}>
                                <li>{menu}</li>
                            </ul>
                        ))}
                    </div>
                    <div className="nav-search">
                        <InputGroup>
                            <Input
                                width='auto'
                                type="text"
                                variant='outline'
                                placeholder="검색"
                                focusBorderColor='gray.200'
                                onKeyDown={(e) => search(e)}
                            />
                            <InputRightElement>
                                <IconButton
                                    aria-label='Search database'
                                    icon={<SearchIcon color='#a8a29e'/>}
                                    color='#f5f5f4'
                                />
                            </InputRightElement>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-button">
                <IconButton
                    icon={<HamburgerIcon />}
                    aria-label="Open Menu"
                    onClick={onOpen}
                    variant="outline"
                />
            </div>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <div className="nav-menu-list">
                                {menuList.map((menu, index) => (
                                    <ul key={index}>
                                        <li>{menu}</li>
                                    </ul>
                                ))}
                            </div>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="outline" onClick={onClose}>Close</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </div>
    );
};

export default Navbar;
