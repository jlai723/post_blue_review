import styled from 'styled-components';

const Footer = ({ display }) => {
    const StyledFooter = styled.h1`
    height: 80px;
    width: 100%;
    background-color: red;
    bottom: 0;
    position: absolute;
    padding: 0;
    margin: 0;
    `
    return (
        <StyledFooter>
        {display}
        </StyledFooter>
    )
}

export default Footer;