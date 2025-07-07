let acceleration = [2, -1];
let velocity0 = [4, 2];
let startingPosition = [0, 0];
let time = [1, 2, 3, 4, 5];

let position = time.map(t => 
    startingPosition.map((x0, i) => 
        x0 + velocity0[i] * t + 0.5 * acceleration[i] * (t ** 2)
    )
);

console.log(position);
