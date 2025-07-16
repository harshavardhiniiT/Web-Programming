const bmi = 23; // ← your BMI value
const pointer = document.getElementById('pointer');
const bmiResult = document.getElementById('bmiResult');
const extraInfo = document.getElementById('extraInfo');

// Convert BMI (10 to 40) into 180° (-90 to +90)
const angle = ((bmi - 10) / 30) * 180 - 90;
pointer.setAttribute("transform", `rotate(${angle},150,150)`);

// Category
let category = "";
if (bmi < 16) category = "Severely Underweight";
else if (bmi < 18.5) category = "Underweight";
else if (bmi < 25) category = "Normal";
else if (bmi < 30) category = "Overweight";
else category = "Obesity";

bmiResult.textContent = `BMI = ${bmi} kg/m² (${category})`;

// Healthy info
const height = 1.7;
const minWeight = (18.5 * height * height).toFixed(1);
const maxWeight = (24.9 * height * height).toFixed(1);
const bmiPrime = (bmi / 25).toFixed(2);

extraInfo.innerHTML = `
  <p>Healthy BMI Range: 18.5 - 24.9</p>
  <p>Healthy Weight Range: ${minWeight} - ${maxWeight} kg</p>
  <p>BMI Prime: ${bmiPrime}</p>
`;

// Tick Marks at 16, 17, 18.5, 25, 30, 35
const ticks = [16, 17, 18.5, 25, 30, 35];
const tickGroup = document.getElementById("tick-group");

ticks.forEach(val => {
  const tickAngle = ((val - 10) / 30) * 180 - 90;
  const rad = tickAngle * (Math.PI / 180);
  const x1 = 150 + Math.cos(rad) * 130;
  const y1 = 150 + Math.sin(rad) * -130;
  const x2 = 150 + Math.cos(rad) * 140;
  const y2 = 150 + Math.sin(rad) * -140;

  const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
  tick.setAttribute("x1", x1);
  tick.setAttribute("y1", y1);
  tick.setAttribute("x2", x2);
  tick.setAttribute("y2", y2);
  tick.setAttribute("stroke", "#000");
  tick.setAttribute("stroke-width", "1");

  tickGroup.appendChild(tick);
});
