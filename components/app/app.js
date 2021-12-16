import { styled } from "@mui/system";

import AppHeader from "../appHeader/AppHeader";
import AppMain from "../appMain/AppMain";

const Container = styled('div')({
    width: '1140px',
    margin: '0 auto',
    '@media (max-width: 1199px)': {
        width: '960px'
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