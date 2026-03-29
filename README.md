# Plataforma de Libro de Clases Digital

Plataforma de gestión académica desarrollada para el ramo Fullstack III. La arquitectura está basada en microservicios con Spring Boot para el backend y un frontend desacoplado.

---

## 📚 Contenido

- [Stack Tecnológico](#-stack-tecnológico)
- [Características](#-características)
- [Requisitos Previos](#-requisitos-previos)
- [Guía de Instalación](#-guía-de-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Autores](#-autores)

---

## 🛠️ Stack Tecnológico

### Backend
- **Lenguaje**: Java 17
- **Framework**: Spring Boot 3
- **Base de Datos**: PostgreSQL
- **Gestión de Dependencias**: Maven
- **Seguridad**: Spring Security, JSON Web Tokens (JWT)
- **Arquitectura**: Microservicios

### Frontend
- **Framework**: React
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Build Tool**: Vite

### Herramientas
- **Control de Versiones**: Git & GitHub
- **Diagramas**: PlantUML

---

## ✨ Características

- [ ] **Gestión de Usuarios**: Registro, autenticación y gestión de roles (administrador, docente, apoderado, estudiante).
- [ ] **Gestión Académica**: Creación y manejo de años lectivos, cursos, asignaturas y matrículas.
- [ ] **Control de Asistencia**: Registro de asistencia por sesión de clase.
- [ ] **Sistema de Calificaciones**: Creación de evaluaciones y registro de notas.
- [ ] **Anotaciones**: Registro de anotaciones (positivas y negativas) a estudiantes.
- [ ] **Mensajería Interna**: Comunicación entre docentes y apoderados.

---

## 📋 Requisitos Previos

Asegúrate de tener instalado el siguiente software antes de comenzar:

- [JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) (Java Development Kit)
- [Apache Maven](https://maven.apache.org/download.cgi)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Node.js](https://nodejs.org/en/) (para el frontend)
- Un cliente Git como [Git for Windows](https://git-scm.com/download/win)

---

## 🚀 Guía de Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/cristianmonsalve14/libro-de-clases-digital.git
    cd libro-de-clases-digital
    ```

2.  **Configurar la Base de Datos:**
    - Asegúrate de que PostgreSQL esté corriendo.
    - Crea una nueva base de datos (ej: `libro_clases_db`).
    - Ejecuta el script `ddl/initial_schema.sql` en tu base de datos para crear todas las tablas.

3.  **Configurar el Backend:**
    - Navega a cada microservicio (empezando por `services/auth-service`).
    - Configura el archivo `src/main/resources/application.properties` con los datos de tu base de datos (URL, usuario, contraseña).
    - *(Instrucciones futuras para compilar y empaquetar con Maven)*

4.  **Configurar el Frontend:**
    - Navega a la carpeta `frontend/`.
    - *(Instrucciones futuras para instalar dependencias con `npm install`)*

---

## 🏗️ Estructura del Proyecto

```
.
├── ddl/                # Scripts para la base de datos (Data Definition Language)
├── diagrams/           # Diagramas de arquitectura y modelo de datos
├── docs/               # Documentación general del proyecto
├── frontend/           # Contiene la aplicación de frontend (UI)
└── services/           # Contiene todos los microservicios del backend
    ├── api-gateway/
    ├── auth-service/
    └── ...
```

---

## ✍️ Autores

- **Cristian Monsalve** (Backend) - `cristianmonsalve14`
- **Hector Olivares** (Frontend) - `(usuario de github)`
