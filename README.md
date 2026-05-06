# ✈️ Sistema de Aeroplano - Programación Orientada a Objetos (TypeScript)

## 📚 Descripción

Este proyecto modela un **aeroplano** utilizando **Programación Orientada a Objetos (POO)** en TypeScript.
Se implementan distintos tipos de relaciones entre clases para representar correctamente la estructura y comportamiento del sistema.

---

🎓 Información Académica
📖 Materia: Programación Orientada a Objetos
👨‍🏫 Profesor: Narciso Perez
💼 Carrera: Programación Full Stack
🏫 Año: Segundo Año - 2026
👩‍💻 Estudiante: Tiziana Ochoa

---

## 🎯 Objetivos del trabajo práctico

* Aplicar conceptos de POO
* Identificar relaciones entre clases
* Implementar distintos tipos de asociaciones
* Ejecutar el sistema en entorno local
* Publicar el desarrollo en GitHub

---

## 🧠 1. Implementación en local

### Requisitos

* Node.js
* TypeScript

### Instalación y ejecución

```bash
npm init -y
npm install typescript -D
npx tsc --init
npx tsc
node Aeroplano.js
```

---

## 🧩 2. Relaciones de jerarquía

En el sistema desarrollado **no se implementan relaciones de herencia (IS-A)** entre clases.

En su lugar, se utiliza principalmente el concepto de **composición (HAS-A)**:

Un **Aeroplano** está compuesto por:

  * Helice
  * Alas
  * Tren de Aterrizaje
  * Cubierta

Esto significa que estas clases forman parte estructural del objeto principal.

👉 Conclusión:

> No existe jerarquía basada en herencia, sino una estructura basada en composición, favoreciendo la modularidad y organización del sistema.

---

## 🔗 3. Tipos de asociaciones implementadas

### ✔️ Composición

Relación fuerte donde los objetos dependen del objeto principal.

📌 Ejemplo:

* Aeroplano → Alas, Helice, Tren de Aterrizaje, Cubierta

---

### ✔️ Agregación

Relación débil donde los objetos pueden existir de forma independiente.

📌 Ejemplo:

* Aeroplano → Piloto

El piloto puede existir sin estar asociado a un aeroplano.

---

### ✔️ Asociación

Relación donde dos clases interactúan sin dependencia estructural.

📌 Ejemplo:

* TorreControl → Aeroplano

La torre interactúa autorizando el despegue.

---

### ✔️ Dependencia

Relación temporal donde una clase utiliza otra sin almacenarla.

📌 Ejemplo:

* Mecanico → Aeroplano

El mecánico usa el objeto solo para realizar una acción puntual.

---

## 🏗️ Estructura del sistema

Clases implementadas:

* Aeroplano
* Helice
* Turbina
* Alas
* TrenDeAterrizaje
* Cubierta
* Piloto
* TorreControl
* Mecanico

---

## 🚀 4. Repositorio en GitHub

El proyecto fue versionado utilizando Git y publicado en GitHub.

### Pasos realizados:

```bash
git clone https://github.com/TizianaOchoa/POO_14-04.git
git add .
git commit -m "Actividad practica de Aeroplano en TS"
git push
```

---

## ⚙️ 5. Diferencia entre Composición y Agregación en tiempo de ejecución

Desde el punto de vista del **tiempo de ejecución**, no existe una diferencia significativa entre composición y agregación, ya que ambas relaciones se implementan de forma similar en memoria.

Sin embargo, presentan diferencias conceptuales importantes:

### 🔹 Composición

* Relación fuerte
* Los objetos dependen del objeto principal
* Se crean y destruyen junto con él
* Mayor acoplamiento

### 🔹 Agregación

* Relación débil
* Los objetos pueden existir independientemente
* Permite reutilización
* Menor acoplamiento

### 🧠 Conclusión

> La diferencia principal no está en el rendimiento, sino en el diseño del sistema, la reutilización de objetos y el nivel de acoplamiento entre las clases.

---

## 👨‍💻 Autor

Tiziana Ochoa

---
