import { styled } from "@mui/system";
import { Box } from "@mui/system";

import AppButton from "../appButton/AppButton";

const ButtonsWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
});


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
                fontSize: '14px'
            }}>
                RU
            </Box>
            <AppButton size='big' text="Войти"/>
            <AppButton text="Начать"/>
        </ButtonsWrapper>
    );
}

export default HeaderButtons;