import styled from 'styled-components';

const Footer = ({ display }) => {
    const StyledFooter = styled.div`
    position: absolute;
    height: 80px;
    width: 100%;
    padding: 0;
    background-color: red;
    bottom: 0;
    `
    return (
        <StyledFooter>
            {display}
        </StyledFooter>
    )
}

export default Footer;