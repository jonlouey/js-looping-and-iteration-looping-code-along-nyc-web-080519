function writeCards(array, event_name) {
    let new_array = []
    for (let i = 0; i < array.length; i++) {
      new_array.push(`Thank you, ${array[i]}, for the wonderful ${event_name} gift!`);
    }
    return new_array
  }

function countdown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--; 
    }
}
