function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result = "";
  
    if (isNaN(num1) || isNaN(num2)) {
      result = "Por favor, ingresa ambos números.";
    } else {
      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          result = num2 !== 0 ? num1 / num2 : "Error: División por cero";
          break;
      }
    }
  
    document.getElementById("result").textContent = `Resultado: ${result}`;
  }
  
  // Exportar para pruebas
  module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Error"
  };
  