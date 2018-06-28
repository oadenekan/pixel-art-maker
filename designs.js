// Select color input
// Select size input
let height, width, color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(evt){
	evt.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);

})

function makeGrid(heightValue, width) {
	$('#pixelCanvas tr').remove();

	// Your code goes here!
	for (let row=1; row<=heightValue; row++){
		$('#pixelCanvas').append('<tr id=table-row' + row +'></tr>');
		for (let col=1; col<=width; col++){
			$('#table-row' + row).append('<td></td>');
		}
	}

	$('td').on('click', function(){
		color = $('#colorPicker').val();

		if($(this).attr('style')){
			$(this).removeAttr('style');
		}
		else{
			$(this).attr('style', 'background-color:' + color);
		}
	})

}
