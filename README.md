# Aplicación Web con CI/CD usando GitHub Actions

Este proyecto consiste en una calculadora web que permite realizar operaciones básicas entre dos números (suma, resta, multiplicación, división). El flujo de integración y entrega continua (CI/CD) ha sido implementado con **GitHub Actions**, y el sitio es desplegado automáticamente en **GitHub Pages**.

## 📦 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Jest (para pruebas)
- GitHub Actions
- GitHub Pages

---

## ⚙️ Estructura del Proyecto

├── src/ │ 
├── index.html # Interfaz web │ 
├── style.css # Estilos │
 └── script.js # Lógica de cálculo

├── tests/ │ 
  └── calculator.test.js # Pruebas con Jest 
  
├── .github/ │ └── workflows/ │ 
└── ci-cd.yml # Workflow CI/CD 

├── package.json # Configuración de dependencias 

└── README.md # Documentación general


---

## 🔁 Flujo CI/CD

### 📌 1. CI (Integración Continua)
- Se ejecuta automáticamente cuando se hace push o pull request en la rama `main`.
- Se instalan las dependencias con `npm install`.
- Se ejecutan las pruebas unitarias con `npm test`.

### 🚀 2. CD (Entrega Continua)
- Si las pruebas pasan correctamente, se publica el contenido de la carpeta `src/` en la rama `gh-pages`.
- GitHub Pages queda actualizado automáticamente.

---

## ✅ Pruebas Unitarias

El archivo `script.js` expone funciones matemáticas que son validadas mediante `Jest`.

```js
// script.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : "Error"
};
