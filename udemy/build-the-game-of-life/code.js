var cols = 24;
var rows = 24;

var playing = false;

function initialize() {

    createTable();
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

    var classes = this.getAttribute('class');

    if (classes.indexOf('live') > -1) {

        this.setAttribute('class', 'dead');

    } else {

        this.setAttribute('class', 'live');

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

