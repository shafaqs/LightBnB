/*const raisinAlarm = function (cookie) {
  for(let i = 0; i< cookie.length; i++){
    for (let j = 0; j < cookie[i].length; j++) {
      if (cookie[i][j] === '🍇') {
        return "Raisin alert!"
      }
    }

    
    if(cookie[i] === '🍇') {
      return "Raisin alert!";
      break;
    }
  }
  return "All good!";

  };*/

/*console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
*/

const raisinAlarmArray = function (cookies) {
  const expectedOutput = []
  for(let i = 0; i< cookies.length; i++){
    expectedOutput[i] = 'All good!';
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === '🍇') {
        expectedOutput[i] = 'Rasin alert!';
        break;
      }
      };
      
    }
    return expectedOutput;
  }
  


  

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);