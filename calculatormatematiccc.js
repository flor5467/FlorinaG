
document.getElementById('calculeaza').onclick = function() {
	
	calcul();
	
};

function calcul() {
	
	var input_elements = document.getElementById('calculator').getElementsByClassName('ibox');
	
	var select_elements = document.getElementById('calculator').getElementsByTagName('select');
	
	var x_val = input_elements[0].value;
	var y_val = input_elements[1].value;
	var operatie_val = select_elements[0].value;
	
	if (operatie_val == 'factorial') {
		
		if (x_val != '' && !isNaN(x_val) && x_val > 0) {

			// functia de calcul factorial
			
			if (operatie_val == 'factorial') {
				
			document.getElementById('rezultate').innerHTML += factorial(x_val, y_val);}

		} else {
		
			alert('Nu se poate calcula factorialul! Valoarea introdusa trebuie sa fie numerica si > 0!');
			
		}
		
	} else {
		
		if (x_val != '' && y_val != '' && !isNaN(x_val) && !isNaN(y_val)) {
			
			if (operatie_val == 'adunare') {
				
				document.getElementById('rezultate').innerHTML += adunare(x_val, y_val);
				
			} else if (operatie_val == 'scadere') {
				
				document.getElementById('rezultate').innerHTML += scadere(x_val, y_val);
				
			} else if (operatie_val == 'inmultire') {
				
				document.getElementById('rezultate').innerHTML += inmultire(x_val, y_val);
				
			}
				else if (operatie_val == 'limita') {
				
				document.getElementById('rezultate').innerHTML += limita(x_val, y_val);
				
			//}
			
			
		} else {
		
			alert('Valorile introduse trebuie sa fie numerice!');
			
		}
		
	}
	
}

function adunare(a, b) {

	var rezultat = Number(a) + Number(b);
	
	var output = a + ' + ' + b + ' = ' + rezultat + '<br>';
	
	return output;
	
}

function scadere(a, b) {

	var rezultat = a - b;
	
	var output = a + ' - ' + b + ' = ' + rezultat + '<br>';
	
	return output;
	
}

function inmultire(a, b) {

	var rezultat = a * b;
	
	var output = a + ' * ' + b + ' = ' + rezultat + '<br>';
	
	return output;
	
}

function factorial(a = 1) {
	
		var rezultat = 1;
		var output = a + '! = ';
	
		for (let i = 1; i <= a; i++) {
		
			rezultat *= i;
			
			output += (i < a) ? (i + ' * ') : i;
		
		}
		
		output += ' = ' + rezultat + '<br>';
		
		return output;
	
	}
	
	
	function limita(a, b) {
    
	if (a > b) return 0;
    
	var sum = (b * ++b) / 2;
	
	var output a > 1 ? sum - limita(0, --a) : sum;
	
	return output;
	}
	
	
