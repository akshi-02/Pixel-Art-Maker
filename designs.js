var colorInput = document.getElementById('colorPicker').value;
var heightInput = null;
var widthInput = null;

var canvas = document.getElementById('pixelCanvas');
var submitButton = document.getElementById('submitButton');
var grid = document.createElement('div');
var colorPicker = document.getElementById('colorPicker');

function getInput(){
	heightInput = document.getElementById('inputHeight').value;
	widthInput = document.getElementById('inputWidth').value;
}

function makeGrid(event){
	event.preventDefault();
	var tagOpen = '<table border="1">\n';
    var grid = '';
    for( var i=0; i<heightInput; i++)
    {
        grid += '<tr>';
        for( var j=0; j<widthInput; j++)
        {
            grid += '<td></td>';
        }
        grid += '</tr>\n';
    }
    var tagClose = '</table>';
    canvas.innerHTML = tagOpen + grid + tagClose;
}

function colorOnClick(evt) {
		if (evt.target.nodeName.toLowerCase() === 'td') {
		evt.target.style.backgroundColor = colorInput;
	}
}

function colorChange() {
	colorInput = document.getElementById('colorPicker').value;
}

submitButton.addEventListener('click',getInput);
submitButton.addEventListener('click',makeGrid);
colorPicker.addEventListener('change',colorChange);
canvas.addEventListener('click', colorOnClick);