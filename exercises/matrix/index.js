// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


function matrix(n) {
  let x = 0,
    y = 0;
  let xMax = n - 1,
    yMax = n - 1;
  let xMin = 0,
    yMin = 0;
  let direction = "right";
  let spiral = [];
  for (let i = 0; i < n; i++) {
    spiral.push([]);
  }
  for (let k = 1; k <= n * n; k++) {
    spiral[y][x] = k;
    switch (direction) {
      case "right":
        x++;
        if (x === xMax) {
          direction = "down";
          yMin = y + 1;
        }
        break;
      case "down":
        y++;
        if (y === yMax) {
          direction = "left";
          xMax = x - 1;
        }
        break;
      case "left":
        x--;
        if (x === xMin) {
          direction = "up";
          yMax = y - 1;
        }
        break;
      case "up":
        y--;
        if (y === yMin) {
          direction = "right";
          xMin = x + 1;
        }
        break;
    }
  }
  return spiral;
}
module.exports = matrix;
