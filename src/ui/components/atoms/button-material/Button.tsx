import { ButtonStyled } from './Button.styles';
export function Button({children}: {children?: React.ReactNode}) {
    return (
        <ButtonStyled variant="contained" color="primary">
            {children}
        </ButtonStyled>
    );
}
