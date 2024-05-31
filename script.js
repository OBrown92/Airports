const airports = require('./airports.json');
    const fs = require('fs');

    const outputFull = {};
    const outputMin = {};

    for (const key of Object.keys(airports)) {
        const iata = airports[key].iata;
        if (!iata) continue;
        outputFull[iata] = airports[key];
        outputMin[iata] = { name: airports[key].name, city: airports[key].city };
    }

    fs.writeFileSync('./airports_gen_full.json', JSON.stringify(outputFull));
    fs.writeFileSync('./airports_gen_min.json', JSON.stringify(outputMin));