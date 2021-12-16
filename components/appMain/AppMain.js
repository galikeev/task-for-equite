import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/system";

import AppButton from "../appButton/AppButton";

const OrderList = styled('ol')({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    listStyle: 'none'
})

const ListItem = styled('li')({
    width: '12px',
    height: '12px',
    border: '1px solid #C49BFF',
    boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
    transform: 'rotate(45deg)'
})

const AppMain = () => {
    return (
        <main>

            <Box sx={{
                width: '680px'
            }}>
                <Typography variant="h1" sx={{
                    fontSize: '50px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginTop: '70px',
                    textTransform: 'uppercase'
                }}>
                    Поделитесь своими результатами
                </Typography>

                <Typography variant="h2" sx={{
                    color: '#AE8DE5',
                    fontSize: '35px',
                    fontWeight: 300,
                    textTransform: 'uppercase',
                    marginTop: '30px',
                    marginBottom: '30px'
                }}>
                    И получите доверие большого количества инвесторов
                </Typography>

                <Box sx={{
                    display: 'flex',
                    gap: '29px'
                }}>
                    <AppButton text="НАЧАТЬ" big/>
                    <AppButton text="Я ТРЕЙДЕР" big/>
                </Box>
            </Box>

            <OrderList>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </OrderList>
        </main>
    )
}

export default AppMain;