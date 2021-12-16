import { styled } from "@mui/system";

const Button = styled('button')({
    cursor: 'pointer',
    width: '108px',
    height: '40px',
    background: '#101C2B',
    border: '1px solid #C49BFF',
    borderRadius: '5px',
    color: '#AE8DE5',
    fontSize: '14px',
    fontFamily: ["Gotham Pro"].join(","),
    textTransform: 'uppercase',
    '&:hover': {
        background: '#5040B2',
        boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
        color: '#FFFFFF',
    },
    '@media (max-width: 991px)': {
        width: '98px',
        height: '30px',
        fontSize: '12px'
    },
    '@media (max-width: 767px)': {
        display: 'none'
    }
})

const BigButton = styled('button')({
    cursor: 'pointer',
    width: '187px',
    height: '50px',
    background: '#101C2B',
    border: '1px solid #C49BFF',
    borderRadius: '5px',
    color: '#AE8DE5',
    fontSize: '14px',
    fontFamily: ["Gotham Pro"].join(","),
    textTransform: 'uppercase',
    '&:hover': {
        background: '#5040B2',
        boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
        color: '#FFFFFF',
    },
    '@media (max-width: 991px)': {
        width: '177px',
        height: '40px',
        fontSize: '12px'
    },
    '@media (max-width: 767px)': {
        width: '140px',
        height: '50px',
    }
})

const AppButton = (props) => {

    const big = props.big;

    return (
        big ? <BigButton>{props.text}</BigButton> : <Button>{props.text}</Button>
    )
}

export default AppButton;

