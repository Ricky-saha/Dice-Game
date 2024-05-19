
import styled from "styled-components"

const RollDice = ({currentDice, rollDice}) => {

   


   
    

  return (
    <DiceContainer>
      <div className= "dice"
      onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top :40px;
    display :flex;
    flex-direction:column;
    align-items:center;

    p{
        font-size:24px;
    }
`
