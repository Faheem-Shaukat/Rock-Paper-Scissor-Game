let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choises");
const UScore = document.getElementById('user-score');
const CScore = document.getElementById('comp-score');
const massage = document.getElementById('msg');
const userHeading = document.getElementById('user');
const ComHeading = document.getElementById('com');


const comChoies = ()=>{
  const Option = ['Rock','Paper','Scissor']
  const randomIdx = Math.floor(Math.random()*3)
  return Option[randomIdx];
}

const drawGame = (userChoies, CompChoies)=>{
  massage.innerText = 'Game Draw / Play Again'
  massage.style.backgroundColor =' #081b31'
  userHeading.innerText = userChoies;
    ComHeading.innerText = CompChoies;

}

const ShowWiner  = (userWin,userChoies, CompChoies) => {
  if(userWin){
    userScore++
    massage.innerText = 'User Win this Game'
    UScore.innerText = userScore
    massage.style.backgroundColor = 'green';
    userHeading.innerText = userChoies;
    ComHeading.innerText = CompChoies;
console.log('You Win')
  }
  else{
    compScore++
    massage.innerText = 'Computer Win this Game'
    CScore.innerText = compScore
    massage.style.backgroundColor = 'red';
    userHeading.innerText = userChoies;
    ComHeading.innerText = CompChoies;
    console.log('You Lose')
  }
  
}


const PlayGame = (userChoies) => {
  console.log(`UserChoies = ${userChoies}`)
  const CompChoies = comChoies()
  console.log(`ComputerChoies = ${CompChoies}`)
    if(userChoies === CompChoies){
      drawGame(userChoies, CompChoies);
  }
  else{
    let userWin = true;
    if(userChoies === "Rock"){
      //Paper Scissor
      userWin = CompChoies === 'Paper' ? false : true;
    }
    else if (userChoies === "Paper"){
      userWin = CompChoies === 'Scissor' ? false : true;
    }
    else{
      userWin = CompChoies === 'Rock' ? false : true;
    }
    ShowWiner(userWin,userChoies, CompChoies)

  }
};


choises.forEach((choies) => {
  choies.addEventListener("click", () => {
    const userChoies = choies.getAttribute("id");
    PlayGame(userChoies);
  });
});



