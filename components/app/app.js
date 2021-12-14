import { styled } from "@mui/system";

import AppNavigation from "../appNavigation/AppNavigation";

const Container = styled('div')({
    width: 1278
})

const App = () => {
    return (
        <Container>
            <AppNavigation/>
        </Container>
    )
}

export default App;