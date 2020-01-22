/*add rows to table1*/

function addRow(){
    var table = document.getElementsByTagName('table')[0];
    var fname = document.getElementById('name').value;
    var lname = document.getElementById('last-name').value;


    if(fname == '' || lname == ''){
        alert('input fields are empty');



    }else{
        var lastRow = table.rows.length;
        var row = table.insertRow(lastRow);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = lastRow - 1;
        cell2.innerHTML = fname;
        cell3.innerHTML = lname;
    }        
}

var button1 = document.getElementsByTagName('button')[0];
button1.onclick = function() {addRow()};



/*add rows to table1*/

/*delete rows from table1*/


function deleteRow(){
    var table = document.getElementsByTagName('table')[0];
    var lastRow = table.rows.length;
    
    for(var i = lastRow - 1; i >= 1; i--){
        table.deleteRow(i);
    }
}

var button2 = document.getElementsByTagName('button')[1];

button2.onclick = function() {deleteRow()};



/*delete rows from table1*/



/*table 2*/
function textTransform(){
    var text = document.getElementById('txtInput').value;
    /*text UPPERCASE*/
    var row1 = document.getElementById('txtUC');
    row1.innerHTML = text.toUpperCase();
    /*text UPPERCASE*/
    
    /*text lowercase*/
    var row2 = document.getElementById('txtLC');
    row2.innerHTML = text.toLowerCase();
    /*text lowercase*/
    
    /*text textRed*/
    var row3 = document.getElementById('txtRed');
    row3.innerHTML = text;
    row3.style.color = 'red';
    /*text textRed*/
    
    /*text cursive*/
    var row4 = document.getElementById('txtCursive');
    row4.innerHTML = text;
    row4.style.fontFamily = 'Brush Script MT, Brush Script Std, cursive';
    /*text cursive*/
}

var text = document.getElementById('txtInput').value;

console.log(text);

var table2 = document.getElementsByTagName('table2');

var row1 = document.getElementById('txtUC');
var txt = document.getElementById('txtInput');
txt.oninput = function() {textTransform()};

/*table 2*/