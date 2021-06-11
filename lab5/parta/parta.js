// JS for Lab 5 Part A



// Writes the appropriate units to the document depending on the measurement selected
function displayUnits(measurement) {
    let imperialElement = document.getElementById("imperial_unit");
    let metricElement = document.getElementById("metric_unit");
    if (measurement === 'length') {
        imperialElement.textContent = 'feet';
        metricElement.textContent = 'metres';
    } else if (measurement === 'volume') {
        imperialElement.textContent = 'gallons';
        metricElement.textContent = 'litres';
    } else if (measurement === 'area') {
        imperialElement.textContent = 'square feet';
        metricElement.textContent = 'square metres';
    } else if (measurement === 'distance') {
        imperialElement.textContent = 'miles';
        metricElement.textContent = 'kilometres';
    }
}


// Takes the imperial input from the user, converts it, and writes it to the metric input box
function convertImperial() {
    let imperialElement = document.getElementById("imperial");
    let metricElement = document.getElementById("metric");
    let measurement = document.getElementById("measurements").value;
    let result;
    imperialValue = parseFloat(imperialElement.value);
    if (measurement === 'length') {
        result = imperialValue * 0.3048;
    } else if (measurement === 'volume') {
        result = imperialValue * 4.54609;
    } else if (measurement === 'area') {
        result = imperialValue * 0.09290304;
    } else if (measurement === 'distance') {
        result = imperialValue * 1.609344;
    }
    metricElement.value = result.toFixed(2);
}

// Takes the metric input from the user, converts it, and writes it to the imperial input box
function convertMetric() {
    let imperialElement = document.getElementById("imperial");
    let metricElement = document.getElementById("metric");
    let measurement = document.getElementById("measurements").value;
    let result;
    metricValue = parseFloat(metricElement.value);
    if (measurement === 'length') {
        result = metricValue * 3.28084;
    } else if (measurement === 'volume') {
        result = metricValue * 0.2199692;
    } else if (measurement === 'area') {
        result = metricValue * 10.76391;
    } else if (measurement === 'distance') {
        result = metricValue * 0.6213712;
    }
    imperialElement.value = result.toFixed(2);
}