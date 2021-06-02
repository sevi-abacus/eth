window.onload = function() {
console.log("Loaded!");
let histogram = {
    very_low: [document.getElementsByClassName("very_low").length, "<1000"],
    low: [document.getElementsByClassName("low").length, "1000-2500"],
    medium: [document.getElementsByClassName("medium").length, "2500-10000"],
    high: [document.getElementsByClassName("high").length, "10000-25000"],
    very_high: [document.getElementsByClassName("very_high").length, ">25000"],
    no_data: [document.getElementsByClassName("no_data").length, "no data"]
    };
  console.log(histogram);


  for (let className in histogram) {
    let classCount = histogram[className][0];
    let label = histogram[className][1];
    let myDiv = document.createElement("div"); // neues Div-Element
    myDiv.style.width = classCount*6+"px"; // setzt die Weite fest
    myDiv.style.width = 10; // setzt die Weite fest
    myDiv.class = "balken_" + className;
    myDiv.innerHTML = label + ": " + classCount;
    console.log("balken_" + className);
    container = document.getElementById("balken_items");
    container.appendChild(myDiv);
    myDiv.style.backgroundColor = "#004000";
    }
}

console.log("It works!");