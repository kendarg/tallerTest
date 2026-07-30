# 🧪 Pruebas Unitarias con Jest

## 📌 Descripción

Este proyecto contiene un ejemplo básico de **pruebas unitarias con Jest** en JavaScript. Se implementan dos funciones:

* **calcularTotoal()**: Suma todos los valores de un arreglo de precios.
* **descuento()**: Calcula el precio final después de aplicar un porcentaje de descuento.

Las pruebas verifican que ambas funciones funcionen correctamente en diferentes escenarios.

---

## 📂 Estructura del proyecto

```
📁 proyecto
│── cart.js          # Funciones del carrito
│── cart.test.js     # Pruebas unitarias
│── package.json
└── README.md
```

---

## 🚀 Tecnologías utilizadas

* JavaScript
* Node.js
* Jest

---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. Entra en la carpeta del proyecto:

```bash
cd tu-repositorio
```

3. Instala las dependencias:

```bash
npm install
```

4. Instala Jest (si aún no está instalado):

```bash
npm install --save-dev jest
```

---

## ▶️ Ejecutar las pruebas

```bash
npm test
```

---

## 📋 Funciones

### `calcularTotoal(precio)`

Recibe un arreglo de números y devuelve la suma total.

**Ejemplo:**

```javascript
calcularTotoal([10, 20, 30]);
// Resultado: 60
```

---

### `descuento(precio, porcentaje)`

Recibe un precio y un porcentaje de descuento, devolviendo el precio final.

**Ejemplo:**

```javascript
descuento(100, 10);
// Resultado: 90
```

---

## ✅ Casos de prueba

Se validan los siguientes escenarios:

* Suma de varios valores.
* Suma de dos valores.
* Suma de un solo valor.
* Suma de un arreglo vacío.
* Descuento del 10%.
* Descuento del 50%.

---

## 👨‍💻 Autor

**Kendarg Esteban Real López**
