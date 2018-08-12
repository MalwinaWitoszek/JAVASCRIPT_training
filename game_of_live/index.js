// WIKIPEDIA:
// Gra toczy się na nieskończonej planszy (płaszczyźnie) podzielonej na kwadratowe komórki.
// Każda komórka ma ośmiu „sąsiadów” (tzw.sąsiedztwo Moore’a), czyli komórki przylegające do niej bokami i rogami.
// Każda komórka może znajdować się w jednym z dwóch stanów: może być albo „żywa” (włączona), albo „martwa” (wyłączona).
// Stany komórek zmieniają się w pewnych jednostkach czasu. Stan wszystkich komórek w pewnej jednostce czasu
// jest używany do obliczenia stanu wszystkich komórek w następnej jednostce. Po obliczeniu wszystkie komórki
// zmieniają swój stan dokładnie w tym samym momencie. Stan komórki zależy tylko od liczby jej żywych sąsiadów.
// W grze w życie nie ma graczy w dosłownym tego słowa znaczeniu. Udział człowieka sprowadza się jedynie do ustalenia
// stanu początkowego komórek.

class GameOfLife {
   constructor(cellsArray, sizeOfGrid) {
      this.cells = cellsArray;
      this.size = sizeOfGrid;
      this.grid = [];
      this.temporaryGrid = [];
      this.createGrid();
      this.setupAliveCells();
   }

   createGrid() { //create grid based on size, in each cell there is an object {alive: false}

      for (let row = 0; row < this.size; row++) {
         this.grid[row] = [];
         for (let column = 0; column < this.size; column++) {
            this.grid[row][column] = { alive: false }
         }
      }
   }

   setupAliveCells() { //setup initial cells from constructor to grid state

      this.cells.forEach(element => {
         let row = element[0];
         let column = element[1];

         return this.grid[row][column].alive = true;
      })
   }

   printGrid() { //print grid state

      const aliveCell = String.fromCharCode(9865);
      const deadCell = String.fromCharCode(10066);

      return this.grid.map(row => {
         return row.map(cell => {
            return cell.alive ? aliveCell : deadCell;
         }).join('')
      }).join('\n')
   }

   countAliveNeighbors(cell) {

      let y = cell[0];
      let x = cell[1];

      let neighborsCells = [[y - 1, x - 1], [y - 1, x], [y - 1, x + 1], [y, x - 1],
      [y, x + 1], [y + 1, x - 1], [y + 1, x], [y + 1, x + 1]]

      return neighborsCells
         .filter(cell => { //boundary condition for element in neighborsCells array
            let yCondition = cell[0] >= 0 && cell[0] < this.size;
            let xCondition = cell[1] >= 0 && cell[1] < this.size;
            return yCondition && xCondition;
         })
         .filter(cell => { //leaving only those neighbors who are alive
            return this.grid[cell[0]][cell[1]].alive
         })
         .length;    // counting filtered neighbors
   }

   nextEpoque() {   // change the state of cells in next unit of time
      this.temporaryGrid = JSON.parse(JSON.stringify(this.grid))   //create a new deep copy of this.grid without reference to this.grid.

      this.grid.forEach((row, rowIndex) => {  //changing cell state in next generation according rules of game
         row.forEach((cell, cellIndex) => {

            let amountOfLivingNeighbors = this.countAliveNeighbors([rowIndex, cellIndex])
            let conditionForAliveCellsStayAlive = cell.alive === true && (amountOfLivingNeighbors === 2 || amountOfLivingNeighbors === 3);
            let conditionForDeadCellsBecomeAlive = cell.alive === false && amountOfLivingNeighbors === 3;

            if (conditionForDeadCellsBecomeAlive || conditionForAliveCellsStayAlive) {
               this.temporaryGrid[rowIndex][cellIndex].alive = true;
            } else {
               this.temporaryGrid[rowIndex][cellIndex].alive = false;
            }
         })
      })
      this.grid = this.temporaryGrid;
   }
}


// giving the initial state of the cells(row on the board, column on the board) and the size of the board
let game = new GameOfLife([[1, 3], [0, 4], [0, 5], [2, 6], [3, 4], [3, 5], [6, 4], [7, 4], [8, 4]], 10);

setInterval(() => {
   console.clear();
   console.log(game.printGrid());
   game.nextEpoque();
}, 1500)

