// Aridane's way

function consult(v) {
    showResult(xhttp.responseXML, v);
}


var xhttp = new XMLHttpRequest();
xhttp.open("GET", "cars.xml", true);
xhttp.send();

function showResult(xml, value) {
    let txt = "";
    let array = [
        "/catalog/car/brand[text()='nissan']/../brand | /catalog/car/brand[text()='nissan']/../model",
        "/catalog/car/brand[text()='bmw']/../brand | /catalog/car/brand[text()='bmw']/../model",
        "/catalog/car/traction[text()='4ws']/../brand | /catalog/car/traction[text()='4ws']/../model",
        "/catalog/car/traction[text()='rear wheel drive']/../brand | /catalog/car/traction[text()='rear wheel drive']/../model",
        "/catalog/car[horsepower<= 250]/brand | /catalog/car[horsepower<= 250]/model | /catalog/car[horsepower<= 250]/horsepower",
        "/catalog/car[horsepower>= 250]/brand | /catalog/car[horsepower>= 250]/model | /catalog/car[horsepower>= 250]/horsepower",
        "/catalog/car[seats < 4]/brand | /catalog/car[seats < 4]/model | /catalog/car[seats < 4]/seats",
        "/catalog/car/features/locking_differential[text()='yes']/../../brand | /catalog/car/features/locking_differential[text()='yes']/../../model",
        "/catalog/car[price <= 30000]/brand | /catalog/car[price <= 30000]/model | /catalog/car[price <= 30000]/price",
        "/catalog/car[release_date <= 2005]/brand | /catalog/car[release_date <= 2005]/model | /catalog/car[release_date <= 2005]/release_date"
    ];
    path = array[value];
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }
}