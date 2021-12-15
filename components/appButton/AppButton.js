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
    '&:hover': {
        background: '#5040B2',
        boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
        color: '#FFFFFF',
    }
})

const AppButton = (props) => {
    return (
        <Button>{props.text}</Button>
    )
}

export default AppButton;

