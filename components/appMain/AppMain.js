import Image from "next/image";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

import AppButton from "../appButton/AppButton";

import { Binance } from "../../assets/images";
import { Bybit } from "../../assets/images";
import { Okex } from "../../assets/images";
import { Ftx } from "../../assets/images";
import { Bitmex } from "../../assets/images";
import { Hitbtc } from "../../assets/images";
import { BinanceLeft } from "../../assets/images";
import { BinanceRight } from "../../assets/images";

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
    transform: 'rotate(45deg)',
    cursor: 'pointer'
})

const AppMain = () => {
    return (
        <main>

            <Box sx={{
                maxWidth: '650px'
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

            <Grid columnSpacing={6} container alignItems="center" justifyContent="center" sx={{
                marginTop: '50px'
            }}>
                <Grid rowSpacing={2} container item xs={2} justifyContent="center">
                    <Image src={Binance}/>
                    <Grid item xs={6}>
                        <Image src={BinanceLeft}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Image src={BinanceRight}/>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Image src={Bybit}/>
                </Grid>
                <Grid item xs={2}>
                    <Image src={Okex}/>
                </Grid>
                <Grid item xs={2}>
                    <Image src={Ftx}/>
                </Grid>
                <Grid item xs={2}>
                    <Image src={Bitmex}/>
                </Grid>
                <Grid item xs={2}>
                    <Image src={Hitbtc}/>
                </Grid>
            </Grid>
        </main>
    )
}

export default AppMain;