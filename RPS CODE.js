document.getElementById('gameForm').addEventListener('submit',playGame);
function playGame(event)
{
    event.preventDefault();
    let output;
    let choices = ["ROCK", "PAPER", "SCISSOR"];
  let mychoice=choices[Math.floor(Math.random()*choices.length)];
  let urchoice=document.getElementById("input").value.toUpperCase();
  if(urchoice==="ROCK" && mychoice==="PAPER")
    {
        output="I WIN"
        
    }
    else if(urchoice==="ROCK" && mychoice==="SCISSOR")
    {
        output="YOU WIN"
        
    }
    else if(urchoice==="PAPER" && mychoice==="ROCK")
    {
        output="YOU WIN"
        
    }
    else if(urchoice==="PAPER" && mychoice==="SCISSOR")
    {
        output="I WIN"
        
    }
    else if(urchoice==="SCISSOR" && mychoice==="ROCK")
    {
        output="I WIN"
        
    }
    else if(urchoice==="SCISSOR" && mychoice==="PAPER")
    {
        output="YOU WIN"
       
    }
    else if(urchoice===mychoice)
    {
        output="TRY AGAIN"
        
    }
    else
    {
        output="VILAYADA THERINJA VILAYADUNGA"
    }
    showPopup("My choice is: " + mychoice + ". " + output);
  }
function showPopup(message)
{
    document.getElementById('popup-message').textContent=message;
    document.getElementById('popup').style.display='block';
    document.getElementById('input').value='';
}
