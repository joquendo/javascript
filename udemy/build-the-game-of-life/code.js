var cols = 24;
var rows = 24;

var playing = false;

var grid = new Array(rows);
var nextGrid = new Array(rows);

function initializeGrids() {

    for (var i = 0; i < rows; i++) {

        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);

    }

}

function resetGrids() {

    for (var i = 0; i < rows; i++) {

        for (var j = 0; j < cols; j++) {

            grid[i][j] = 0;
            nextGrid[i][j] = 0;

        }

    }

}

function initialize() {

    createTable();
    initializeGrids();
    resetGrids();
    setupControlButtons();

}

function createTable() {

    var gridContainer = document.getElementById('gridContainer');

    if (!gridContainer) {

        console.error('Problem: no div for the grid table');
    
    }
    
    var table = document.createElement('table');

    for (var r = 0; r < rows; r++) {

        var tr = document.createElement('tr');

        for (var c = 0; c < cols; c++) {

            var cell = document.createElement('td');
            cell.setAttribute('id', r + '_' + c);
            cell.setAttribute('class', 'dead');
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);

        }

        table.appendChild(tr);

    }

    gridContainer.appendChild(table);

}

function cellClickHandler() {

    var rowcol = this.id.split('_');
    var row = rowcol[0];
    var col = rowcol[1];
    var classes = this.getAttribute('class');

    if (classes.indexOf('live') > -1) {

        this.setAttribute('class', 'dead');
        grid[row][col] = 0;

    } else {

        this.setAttribute('class', 'live');
        grid[row][col] = 1;

    }

}

function setupControlButtons() {

    var startButton = document.getElementById('start');
    startButton.onclick = startButtonClickHandler;
    
    var clearButton = document.getElementById('clear');
    clearButton.onclick = clearButtonClickHandler;

}

function play() {

    console.log('play the game');

}

function startButtonClickHandler() {

    if (!playing) {

        console.log('continue the game');
        playing = true;
        this.innerHTML = 'pause';
        play();

    } else {

        console.log('pause the game');
        playing = false;
        this.innerHTML = 'continue';

    }

}

function clearButtonClickHandler() {

    console.log('clear the game: stop playing, clear the grid');
    playing = false;
    var startButton = document.getElementById('start');
    startButton.innerHTML = 'start';

}

window.onload = initialize;

