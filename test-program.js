et input = [
    '0',
    '10,20,30,40,50',
    '2 forward 1',
    '2 backwards 1', 
    '3 forward 2',
    '3 backwards 2',
    'exit'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let startingPosition = Number(gets());
let array = gets().split(',').map(Number);

let currentPosition = startingPosition;

while (true) {
    let command = gets();
    
    if (command === 'exit') {
        break;
    }
    
    let parts = command.split(' ');
    let steps = Number(parts[0]);
    let direction = parts[1];
    let positions = Number(parts[2]);
    
    for (let i = 0; i < steps; i++) {
        if (direction === 'forward') {
            currentPosition = currentPosition + 1;
            if (currentPosition >= array.length) {
                currentPosition = 0;
            }
        } else if (direction === 'backwards') {
            currentPosition = currentPosition - 1;
            if (currentPosition < 0) {
                currentPosition = array.length - 1;
            }
        }
    }
    
    for (let i = 0; i < positions; i++) {
        print(array[currentPosition]);
        currentPosition = currentPosition + 1;
        if (currentPosition >= array.length) {
            currentPosition = 0;
        }
    }
}