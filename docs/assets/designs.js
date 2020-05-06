var colorInput = document.getElementById('colorPicker').value; //This assigns the default color to the colorInput
var heightInput = null;  // initialize Height by null
var widthInput = null;   // initialize width by null

var canvas = document.getElementById('pixelCanvas');     // returns the element that has id pixelcanvas
var submitButton = document.getElementById('submitButton');  // returns the element that has id submitButton
var grid = document.createElement('div');                      // creates the div element    
var colorPicker = document.getElementById('colorPicker'); // returns the element that has id colorPicker

// This function is used to get the input from the html form 
function getInput(){
	heightInput = document.getElementById('inputHeight').value; 
	widthInput = document.getElementById('inputWidth').value;
}

// This function creates a grid but inserting html tags to create rows and columns for the table in html file
function makeGrid(event){
	event.preventDefault(); // This prevents the default action
	var tagOpen = '<table border="1">\n';   // Opening tag for the table
    var grid = '';
    for( var i=0; i<heightInput; i++)
    {
        grid += '<tr>';  // opening tag for the row
        for( var j=0; j<widthInput; j++)
        {
            grid += '<td></td>'; // Creating a cell in the grid
        }
        grid += '</tr>\n';  // Closing tag for the row
    }
    var tagClose = '</table>'; // Closing tag of the table
    canvas.innerHTML = tagOpen + grid + tagClose;   // This adds the html code into table with id pixelcanvas of the html file
}

// This function when called changes the color of the cell in the grid to the selected color
function colorOnClick(evt) {
		if (evt.target.nodeName.toLowerCase() === 'td') {
		evt.target.style.backgroundColor = colorInput; // This references to the cell clicked and assigns it the selected color
	}
}

// This function is used to assign new color to colorInput variable whenever user changes the color from the picker
function colorChange() {
	colorInput = document.getElementById('colorPicker').value;
}

submitButton.addEventListener('click',getInput); // Event Listener for submitButton, trigerred when button clicked
submitButton.addEventListener('click',makeGrid);  // Event Listener for submitButton, trigerred when button clicked
colorPicker.addEventListener('change',colorChange); // Event Listener for colorPicker, trigerred when color in picker is changed
canvas.addEventListener('click', colorOnClick); // Event Listener for grid, triggered when any cell is clicked.