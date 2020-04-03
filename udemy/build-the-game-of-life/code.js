var cols = 24;
var rows = 24;

function initialize() {

    createTable();

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

window.onload = initialize;

