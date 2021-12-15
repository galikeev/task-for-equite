import { styled } from "@mui/system";

import AppHeader from "../appHeader/AppHeader";

const Container = styled('div')({
    width: '1278px',
    margin: '0 auto'
})

const App = () => {
    return (
        <Container>
            <AppHeader/>
        </Container>
    )
}

export default App;