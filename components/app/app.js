import { styled } from "@mui/system";

import AppHeader from "../appHeader/AppHeader";
import AppMain from "../appMain/AppMain";

const Container = styled('div')({
    width: '1140px',
    margin: '0 auto',
    '@media (max-width: 1199px)': {
        width: '960px'
    },
    '@media (max-width: 991px)': {
        width: '720px'
    },
    '@media (max-width: 767px)': {
        width: '540px'
    },
    '@media (max-width: 575px)': {
        width: '100%',
        padding: '0 10px'
    }
})

const App = () => {
    return (
        <Container>
            <AppHeader/>
            <AppMain/>
        </Container>
    )
}

export default App;