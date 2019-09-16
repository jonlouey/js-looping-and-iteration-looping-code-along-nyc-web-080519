function writeCards(array, event_name) {
    let new_array = []
    for (let i = 0; i < array.length; i++) {
      new_array.push(`Thank you, ${array[i]}, for the wonderful ${event_name} gift!`);
    }
    return new_array
  }

function countdown() {
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}
