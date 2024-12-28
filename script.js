function calculate() {
    // Get the input values
    const length = document.getElementById('length').value;
    const breadth = document.getElementById('breadth').value;

    // Calculate area and perimeter
    const area = length * breadth;
    const perimeter = 2 * (parseFloat(length) + parseFloat(breadth));

    // Display the results
    document.getElementById('area').innerText = `Area: ${area}`;
    document.getElementById('perimeter').innerText = `Perimeter: ${perimeter}`;
}
