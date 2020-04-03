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
            tr.appendChild(cell);

        }

        table.appendChild(tr);

    }

    gridContainer.appendChild(table);

}

window.onload = initialize;



// append grid to the grid container
