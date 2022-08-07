import styled from 'styled-components';

export const NavbarContainer = styled.div`
width:100%;
height:60px;
background-color: #66ffff;
display:flex;
justify-content: space-between;
align-items: center;
`;

export const Logo = styled.div`
width:300px;
height:50px;
display:flex;
justify-content:center;
align-items:center;


`;

export const LogoImg = styled.div`
object-fit: contain;
object-position: center;
z-index:2;

`;

export const Menu = styled.div`
color:black;
margin-right:30px;


ul {
    display:flex;
    list-style: none;
    gap:20px;
    
}

`;
