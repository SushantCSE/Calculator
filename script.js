// Append value to the display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character from the display
function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
