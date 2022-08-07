import Popup from "reactjs-popup";
import styled from "styled-components";

export const ProductPage = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
justify-content: center;
background-color:  #f2f2f2;
padding-bottom:50px;
padding-top:50px;

`;

export const Container = styled.div`
width:310px;
height: fit-content;
background-color:rgb(214, 253, 244);
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
margin-left:25px;
margin-top:25px;

display:flex;
justify-content:top;
align-items:center;
flex-direction: column;
text-align:center;
border-radius:10px;

transition:.5s;
:hover{
    transform:scale(1.03);
}

h3 {
    background-color: white;
    color:lightgreen;
    width:100%;
    padding-top:5px;
    padding-bottom:5px;
    margin-top:0px;
}

p {
    color:black;
    padding-top:13px;

}
`;

export const StyledPopup = styled(Popup)`


&-content {
    background-color:white;
    width:312px !important;
    height:462px;
}
`;

export const ProductImg = styled.img`
width: 310px;
height: 200px;
object-fit:cover;
object-position: center;
z-index:2;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;

export const PopupContainer = styled.div`
width: 300px;
height: 450px;
background-color:rgb(214, 253, 244);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;

h3{
    color: black;
}
`;


export const PopupImg = styled.img`
width: 200px;
height: 200px;
object-fit:contain;
object-position: center;
z-index:5;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;

export const ParaScroll = styled.div`
width:300px;
height:200px;
overflow-y: scroll;
white-space: wrap;
color: #1a1a1a;
padding:12px;
`;