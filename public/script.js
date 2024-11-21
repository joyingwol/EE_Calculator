document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const temperatureC = parseFloat(document.getElementById('temperature').value);
    const temperatureK = temperatureC + 273.15; // Convert °C to K
    const R = 1.9858775; // Gas constant in cal/(mol·K)

    let deltaDeltaG = parseFloat(document.getElementById('deltaDeltaG').value) * 1000; // Convert kJ/mol to J/mol
    const deltaGR = parseFloat(document.getElementById('deltaGR').value) * 1000; // Convert kJ/mol to J/mol
    const deltaGS = parseFloat(document.getElementById('deltaGS').value) * 1000; // Convert kJ/mol to J/mol

    if (isNaN(deltaDeltaG) && (isNaN(deltaGR) || isNaN(deltaGS))) {
        document.getElementById('prompt').style.display = 'block';
        return;
    } else {
        document.getElementById('prompt').style.display = 'none';
    }

    if (isNaN(deltaDeltaG) && !isNaN(deltaGR) && !isNaN(deltaGS)) {
        deltaDeltaG = deltaGR - deltaGS;
    }

    const ee = (Math.exp(deltaDeltaG / (R * temperatureK)) - 1) / (Math.exp(deltaDeltaG / (R * temperatureK)) + 1);
    document.getElementById('ee-value').textContent = ee.toFixed(4); // Display ee value to 4 decimal places
});