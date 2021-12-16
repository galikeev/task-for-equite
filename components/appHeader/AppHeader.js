import AppNavigation from "../appNavigation/AppNavigation";
import HeaderButtons from "../headerButtons/HeaderButtons";

import { styled } from "@mui/system";

const Header = styled('header')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 767px)': {
        paddingTop: '10px'
    }
})

const AppHeader = () => {
    return (
        <Header>
            <AppNavigation/>
            <HeaderButtons/>
        </Header>
    )
}

export default AppHeader;