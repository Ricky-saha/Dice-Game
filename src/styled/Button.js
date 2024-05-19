import styled from "styled-components";


export const Button = styled.button`
/* BUTTON */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 18px;
gap: 10px;
font-size:16px;
min-width: 220px;
height: 44px;
color:white;
border:none;
background: #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
border: 1px solid black ;
cursor:pointer;
transition : 0.4s background ease-in;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
&:hover {
  background-color:white;
  color:black;
  border: 1px solid black ;
  transition : 0.3s background ease-in;
}
`;

export const   OutlineButton = styled(Button)`
background-color:white;
border: 1px solid black ;
color:black;
&:hover {
  background-color:black;
  color:white;
  border: 1px solid transparent ;
 
}
`;