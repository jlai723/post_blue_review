import styled from 'styled-components';

const HeaderBox = styled.section`
height: 80px;
width: 100%;
background-color: blue;
`
const HeaderTitle = styled.h1`
color: white;
margin-top: 0px;
padding: 20px;
text-align: center;
`

const Header = ({ display }) => {
    return (
        <HeaderBox>
            <HeaderTitle>
                {display}
            </HeaderTitle>
        </HeaderBox>
    )
}

export default Header;