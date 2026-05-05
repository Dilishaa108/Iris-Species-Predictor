document.getElementById("irisForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const sepalLength = parseFloat(document.getElementById("sepalLength").value);
    const sepalWidth = parseFloat(document.getElementById("sepalWidth").value);
    const petalLength = parseFloat(document.getElementById("petalLength").value);
    const petalWidth = parseFloat(document.getElementById("petalWidth").value);

    let predictedClass = "";

    // Simple demo rules (replace with ML model if you have one)
    if (petalLength < 2.5) {
        predictedClass = "Setosa";
    } else if (petalWidth < 1.8) {
        predictedClass = "Versicolor";
    } else {
        predictedClass = "Virginica";
    }

    showPrediction(predictedClass);
});

function showPrediction(predictedClass) {
    document.getElementById("result").innerText = "Predicted Species: " + predictedClass;

    let imgPath = "";
    if (predictedClass === "Setosa") {
        imgPath = "images/setosa.jpg";
    } else if (predictedClass === "Versicolor") {
        imgPath = "images/versicolor.jpg";
    } else if (predictedClass === "Virginica") {
        imgPath = "images/virginica.jpg";
    }

    document.getElementById("speciesImage").src = imgPath;
}
