import Image from "next/image";

import { styled } from "@mui/system";
import { Box } from "@mui/system";

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
    marginRight: '30px',
    listStyleType: 'none',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '13px',
    color: '#EEE4FF',
    textTransform: 'uppercase',
    '&:last-child': {
        lineHeight: '40px',
        width: '190px',
        background: '#101C2B',
        border: '1px solid #EEE4FF',
        borderRadius: '5px',
        textAlign: 'center'
    }
})

const AppNavigation = () => {
    return (
        <NavWrapper>
            <Box sx={{
                marginRight: '60px'
            }}>
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