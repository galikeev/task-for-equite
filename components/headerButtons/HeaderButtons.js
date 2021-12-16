import { styled } from "@mui/system";
import { Box } from "@mui/system";

import AppButton from "../appButton/AppButton";

const ButtonsWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    '@media (max-width: 991px)': {
        gap: '10px'
    },
});

const Burger = styled('div')({
    // display: 'none',
    width:'40px',
    height: '40px',
    cursor: 'pointer',
    zIndex: 51,
    border: '1px solid #C49BFF',
    borderRadius: '5px',
    padding: '10px',
})

const Span = styled('span')({
    display: 'block',
    height: '2px',
    width: '100%',
    backgroundColor: '#C49BFF',
    marginTop: '3px',
})

const HeaderButtons = () => {
    return (
        <ButtonsWrapper>
            <Box sx={{
                cursor: 'pointer',
                paddingTop: '11px',
                width: '42px',
                height: '40px',
                textAlign: 'center',
                background: '#101C2B',
                borderRadius: '5px',
                color: '#AE8DE5',
                fontSize: '14px',
                '@media (max-width: 991px)': {
                    height: '30px',
                    width: '30px',
                    fontSize: '12px',
                    paddingTop: '9px',
                },
                '@media (max-width: 767px)': {
                    height: '40px',
                    width: '40px',
                    fontSize: '14px',
                    paddingTop: '12px',
                }
            }}>
                RU
            </Box>
            <AppButton size='big' text="Войти"/>
            <AppButton text="Начать"/>
            <Burger>
                <Span/>
                <Span/>
                <Span/>
            </Burger>
        </ButtonsWrapper>
    );
}

export default HeaderButtons;