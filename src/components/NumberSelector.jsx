
import styled from "styled-components"

const NumberSelector = (
    {setError, error, selectedNumber, setSelectedNumber}
) => {

    const arrNumber = [1,2,3,4,5,6];

   
    const numberSelectorHandler =(value)=>{
        setSelectedNumber(value)
        setError("")
    }

  return (
    <NumberSelectorContainer>
        <p className ="error">{error}</p>
      <div className = "flex">
      {
            arrNumber.map((value, i) => (
                <Box
                isSelected={
                    value == selectedNumber
                }

                onClick={()=> numberSelectorHandler(value) }// we used call back because we wanted to pass value in the function 
                key={i}>{value}</Box>
            ))
        }
      </div>
      <p>SelectNumber</p>


    </NumberSelectorContainer>
  )
}

export default NumberSelector;


const NumberSelectorContainer = styled.div `
    display:flex;
    flex-direction:column;
    align-items:end;

    .error {
        color:red;
    }
    .flex{
        display:flex;
        gap:24px;
    }

    .p{
        font-size:24px;
        font-weight:700px;
    }
`
const Box = styled.div`
    height:72px;
    width:72px;
    border: 1px solid black;
    display:grid;
    place-items: center;
    font-size:24px;
    font-weight:24px;
    background-color:${(props) => ( props.isSelected ? "black" : "white")};
    color:${(props) => ( props.isSelected ? "white" : "black")};
    cursor:pointer;
`
