

// Array of messages
const messages = ["Lucky number: ", "Lots of improvements in both private and professional life.", "Trust your abilities to develop a positive attitude.", "Keep your focus and motivation to excel in whatever you do today.",
  "Be open to new opportunities!", "Avoid taking unnecessary risks today.", "The chances of travelling will increase.", "You may face difficulties in resuming unfinished or pending tasks.", "There are signs of great success.", 
  "A financial reward is on its way!", "Pay extra attention to your health.", "You must reduce stress at work.", "Focus on enhacing your savings!", "Keep emotions under control!", "Keep up the hard work!", "Luck will prevail.", 
  "Happiness will increase!", "Income will be good!", "Work with patience and discipline.", "Don't show haste!", "Listen to elderly people advice.", "Give importance to relationships.", "Don't ignore health signs.", 
  "You will be successful in fulfilling your plans.", "Administration matters will be in favor.", "Proposals will get support.", "Take care of your loved ones.", "Business will be better.", "Health will be good.", "Morale will increase.", 
  "Try to get the necessary work done.", "You'll earn financial achievements.", "Wealth will increase.", "Feel free to keep moving forward.", "Seize opportunities!", "Focus on work.", "Avoid procastination!", "Efforts will bear fruit.", 
  "Desired results will be achieved.", "There will be a boom in career.", "Business will prosper.", "Be health-conscious.", "Be careful in judicial matters.", "Increase control over the budget.", "Be patient in personal matters.", 
  "Avoid rumors.", "Do not fall into greed and temptation.", "Relationships will be strengthened.", "You should get regular health checkups.", "Use your wisdom and intelligence to solve problems.", "Work with dignity."];

//Linking the button in the DOM to trigger the showMessage function.
const buttonFunction = () => {
  
  const button = document.getElementById('discoverBtn');
  return button.addEventListener('click',showMessage);

}

// Main function: Returns final random fortune to user
const randomMessage = arr => {
  const randomMessageIdx = Math.floor(Math.random() * arr.length);
  const randomLuckyNumber = Math.floor(Math.random() * 15);
  if (randomMessageIdx === 0) {
    return arr[randomMessageIdx] + randomLuckyNumber;
  } else {
    return arr[randomMessageIdx];
    
  }
};
randomMessage(messages);

const showMessage = (fnc) => {
  return document.getElementById('quote').innerHTML = randomMessage(messages);
}

showMessage(randomMessage);
buttonFunction();


