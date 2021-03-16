// console.log("con");

$(document).ready(function(){
	// var notEmpty=document.getElementById("output").value;
	// var notEmpty=document.getElementById("output").value;
	$('#cell1').click(function(){
		var notEmpty=document.getElementById("output").value;
		var plusSign= '+';
		
		if(notEmpty==""){
		document.getElementById('output').innerHTML= plusSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + plusSign;
		}
	});
	$('#cell2').click(function(){
		var notEmpty=document.getElementById("output").value;
		var subtractSign= "-";
		if(notEmpty==""){
		document.getElementById('output').innerHTML= subtractSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + subtractSign;
		}
	});
	$('#cell3').click(function(){
		var notEmpty=document.getElementById("output").value;
		var multSign= '×';
		if(notEmpty==""){
		document.getElementById('output').innerHTML= multSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + multSign;
		}
	});
	$('#cell4').click(function(){
		var notEmpty=document.getElementById("output").value;
		var divSign= '÷';
		if(notEmpty==""){
		document.getElementById('output').innerHTML= divSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + divSign;
		}
	});
	$('#cell5').click(function(){
		var notEmpty=document.getElementById("output").value;
		var sevenSign= 7;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= sevenSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + sevenSign;
		}
	
	});
	$('#cell6').click(function(){
		var notEmpty=document.getElementById("output").value;
		var eightSign= 8;
		console.log(notEmpty);
		if(notEmpty==""){
		document.getElementById('output').innerHTML= eightSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + eightSign;
		}
	});
	$('#cell7').click(function(){
		var notEmpty=document.getElementById("output").value;
		var nineign= 9;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= nineign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + nineign;
		}
	});
	$('#cell8').click(function(){
		var notEmpty=document.getElementById("output").value;
		var equalSign= '=';
		if(notEmpty==""){
			document.getElementById('output').innerHTML= "Please Enter value first";
		}
		else{
			var digits = document.getElementById('output').value;
			
			
			var ary = Array.from(digits);

			var sign = ary[0];
			console.log(ary);
			// console.log(sign);
			if(sign=="s" || sign=="c" || sign=="t" || sign=="l" || sign=="q" ){
				
				var display1 = "";
				for(let i = 1 ; i < ary.length ; i ++){
				
				var display1 =display1+ary[i];
				// console.log([display1]);
				
			}
				
				digit1= parseFloat(display1);
				// console.log(digit1);
				if(sign=="s")
				{
					var result = Math.sin(digit1);
				}
				else if(sign=="c")
				{
					var result = Math.cos(digit1);
				}
				else if(sign=="t")
				{
					var result = Math.tan(digit1);
				}
				else if(sign=="l")
				{
					var result = Math.log2(digit1);
				}
				else if(sign=="q")
				{
					var result = digit1*digit1;
				}


			}

			else{

			var regexp = /[-,×,+,÷]/;
			var found = digits.match(regexp);
			var res	 = found.toString();
			var ind = digits.indexOf(res);
			var j = ind-1;
			var k = ind + 1;

			// console.log(digits);
			// console.log(regexp);
			// console.log(found);
			// console.log(res);
			// console.log(ind);
			// console.log(j);
			// console.log(k);

			var ary = Array.from(digits);	

			// console.log(ary);
			var display1 = "";
			
			for(let i = 0 ; i <= j ; i ++){

				var display1 =display1+ary[i];
			}
				digit1= parseFloat(display1);
				// console.log(digit1);

				var display2 = "";
			for(let i = k ; i < ary.length ; i ++){
				var display2 =display2+ary[i];
			}

			digit2= parseFloat(display2);
			if(res=="+"){
			var result = digit1+digit2;
		}
		else if(res=="×"){
			var result = digit1*digit2;
		}
		else if(res=="÷"){
			var result = digit1/digit2;
		}
		else if(res=="-"){
			var result = digit1-digit2;
		}
			}
		
			$('#output').empty();
			document.getElementById('output').innerHTML= result;
		}
		
	});
	$('#cell9').click(function(){
		var notEmpty=document.getElementById("output").value;
		var fourSign= 4;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= fourSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + fourSign;
		}
	});
	$('#cell10').click(function(){
		var notEmpty=document.getElementById("output").value;
		var fiveSign= 5;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= fiveSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + fiveSign;
		}
	});
	$('#cell11').click(function(){
		var notEmpty=document.getElementById("output").value;
		var sixSign= 6;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= sixSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + sixSign;
		}
	});
	$('#cell12').click(function(){
		var notEmpty=document.getElementById("output").value;
		var equalSign= '=';
		if(notEmpty==""){
			document.getElementById('output').innerHTML= "Please Enter value first";
		}
		else{
			var digits = document.getElementById('output').value;
			var regexp = /[-,×,+,÷]/;
			var found = digits.match(regexp);
			var res	 = found.toString();

			// if(res == "+"){
			// 	var result= eval(digits)

			// 	// console.log(eval(digits))
			// }
			// $('#output').empty();
			// document.getElementById('output').innerHTML= result;

			var ind = digits.indexOf(res);
			var j = ind-1;
			var k = ind + 1;

			// console.log(digits);
			// console.log(regexp);
			// console.log(found);
			// console.log(res);
			// console.log(ind);
			// console.log(j);
			// console.log(k);

			var ary = Array.from(digits);

			// console.log(ary);
			var display1 = "";
			
			for(let i = 0 ; i <= j ; i ++){

				var display1 =display1+ary[i];
			}
				digit1= parseFloat(display1);
				// console.log(digit1);

				var display2 = "";
			for(let i = k ; i < ary.length ; i ++){
				var display2 =display2+ary[i];
			}

			digit2= parseFloat(display2);
			if(res=="+"){
			var result = digit1+digit2;
		}
		else if(res=="×"){
			var result = digit1*digit2;
		}
		else if(res=="÷"){
			var result = digit1/digit2;
		}
		else if(res=="-"){
			var result = digit1-digit2;
		}
			$('#output').empty();
			document.getElementById('output').innerHTML= result;
		}
		
	});
	$('#cell13').click(function(){
		var notEmpty=document.getElementById("output").value;
		var oneSign= 1;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= oneSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + oneSign;
		}
	});
	$('#cell14').click(function(){
		var notEmpty=document.getElementById("output").value;
		var twoSign= 2;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= twoSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + twoSign;
		}
	});
	$('#cell15').click(function(){
		var threeSign= 3;
		var notEmpty=document.getElementById("output").value;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= threeSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + threeSign;
		}
	});
	$('#cell16').click(function(){
		var notEmpty=document.getElementById("output").value;
		var equalSign= '=';
		if(notEmpty==""){
			document.getElementById('output').innerHTML= "Please Enter value first";
		}
		else{
			var digits = document.getElementById('output').value;
			var regexp = /[-,×,+,÷]/;
			var found = digits.match(regexp);
			var res	 = found.toString();

			// if(res == "+"){
			// 	var result= eval(digits)

			// 	// console.log(eval(digits))
			// }
			// $('#output').empty();
			// document.getElementById('output').innerHTML= result;

			var ind = digits.indexOf(res);
			var j = ind-1;
			var k = ind + 1;

			// console.log(digits);
			// console.log(regexp);
			// console.log(found);
			// console.log(res);
			// console.log(ind);
			// console.log(j);
			// console.log(k);

			var ary = Array.from(digits);

			// console.log(ary);
			var display1 = "";
			
			for(let i = 0 ; i <= j ; i ++){

				var display1 =display1+ary[i];
			}
				digit1= parseFloat(display1);
				// console.log(digit1);

				var display2 = "";
			for(let i = k ; i < ary.length ; i ++){
				var display2 =display2+ary[i];
			}

			digit2= parseFloat(display2);
			if(res=="+"){
			var result = digit1+digit2;
		}
		else if(res=="×"){
			var result = digit1*digit2;
		}
		else if(res=="÷"){
			var result = digit1/digit2;
		}
		else if(res=="-"){
			var result = digit1-digit2;
		}
			$('#output').empty();
			document.getElementById('output').innerHTML= result;
		}
		
	});
	$('#cell17').click(function(){
		var notEmpty=document.getElementById("output").value;
		var zeroSign= 0;
		if(notEmpty==""){
		document.getElementById('output').innerHTML= zeroSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + zeroSign;
		}
	});
	$('#cell18').click(function(){
		var notEmpty=document.getElementById("output").value;
		var dotSign= ".";
		if(notEmpty==""){
		document.getElementById('output').innerHTML= dotSign;
	} else{
		document.getElementById('output').innerHTML= notEmpty + dotSign;
		}
	});
	$('#cell19').click(function(){
		$('#output').empty();
	});
	$('#cell20').click(function(){
		var x = document.getElementById("advance_cal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
	});
	$('#cell21').click(function(){
		var notEmpty=document.getElementById("output").value;
		var sinsign= "s";
		// if(notEmpty==""){
		document.getElementById('output').innerHTML= sinsign;
	// } else{
		// document.getElementById('output').innerHTML= notEmpty + sinsign;
		// }
	});
	$('#cell22').click(function(){
		var notEmpty=document.getElementById("output").value;
		var cosSign= "c";
		// if(notEmpty==""){
		document.getElementById('output').innerHTML= cosSign;
	// } else{
		// document.getElementById('output').innerHTML= notEmpty + cosSign;
		// }
	});
	$('#cell23').click(function(){
		var notEmpty=document.getElementById("output").value;
		var TanSign= "t";
		// if(notEmpty=!""){
		document.getElementById('output').innerHTML= TanSign;
	 // }
	 // else if(notEmpty=="tan("){
		// $('#output').empty();
		// document.getElementById('output').innerHTML= TanSign + notEmpty;
		// }
	});
	$('#cell24').click(function(){
		var notEmpty=document.getElementById("output").value;
		var logSign= "l";
		// if(notEmpty==""){
		document.getElementById('output').innerHTML= logSign;
	// } else{
		// document.getElementById('output').innerHTML= notEmpty + logSign;
		// }
	});
	$('#cell25').click(function(){
		var notEmpty=document.getElementById("output").value;
		var srqSign= "q";
		// if(notEmpty==""){
		document.getElementById('output').innerHTML= srqSign;
	// } else{
		// document.getElementById('output').innerHTML= notEmpty + logSign;
		// }
	});
});