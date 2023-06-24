// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  // Function to convert choice to word
  function convertToWord(choice) {
    if (choice === 'rock') return 'Rock';
    if (choice === 'paper') return 'Paper';
    return 'Scissors';
  }
  
  // Function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
  
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    }
  
    return 'Computer wins!';
  }
  
  // Function to handle user's choice
  function handleClick(userChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById('result');
  
    const userChoiceWord = convertToWord(userChoice);
    const computerChoiceWord = convertToWord(computerChoice);
    const result = determineWinner(userChoice, computerChoice);
  
    resultDiv.innerHTML = `
      You chose ${userChoiceWord}. <br>
      The computer chose ${computerChoiceWord}. <br>
      ${result}
    `;
  }
  
  // Add event listeners to buttons
  const rockBtn = document.getElementById('rock');
  rockBtn.addEventListener('click', () => handleClick('rock'));
  
  const paperBtn = document.getElementById('paper');
  paperBtn.addEventListener('click', () => handleClick('paper'));
  
  const scissorsBtn = document.getElementById('scissors');
  scissorsBtn.addEventListener('click', () => handleClick('scissors'));
  