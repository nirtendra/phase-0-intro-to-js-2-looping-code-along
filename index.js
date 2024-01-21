function writeCards(names, occasion) {
  let thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}


function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}