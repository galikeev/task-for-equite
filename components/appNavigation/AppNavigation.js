import Image from "next/image";

import { styled } from "@mui/system";
import { Box } from "@mui/system";
import { typography } from "@mui/system";

import { MainLogo } from "../../assets/images";

const NavWrapper = styled('nav')({
    display: "flex",
    alignItems: "center"
});

const NavMenu = styled('ul')({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
});

const NavLinks = styled('li')({
    marginRight: 15,
    listStyleType: 'none',
    fontFamily: 'Gotham Pro'
})

const AppNavigation = () => {
    return (
        <NavWrapper>
            <Box>
                <a href="#">
                    <Image src={MainLogo}/>
                </a>
            </Box>
            <NavMenu>
                <NavLinks>
                    <a href="#">Главная</a>
                </NavLinks>
                <NavLinks>
                    <a href="#about">Рейтинги</a>
                </NavLinks>
                <NavLinks>
                    <a href="#features">Блог</a>
                </NavLinks>
                <NavLinks>
                    <a href="#services">Pro</a>
                </NavLinks>
                <NavLinks>
                    <a href="#price">Инвестору</a>
                </NavLinks>
            </NavMenu>
        </NavWrapper>
    );
}

export default AppNavigation;