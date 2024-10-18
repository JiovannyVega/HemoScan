# HemoScan

HemoScan es una aplicación web innovadora que utiliza inteligencia artificial para analizar fotos médicas, como exámenes de hemoglobina, y proporcionar información sobre si los niveles están dentro del rango normal. También ofrece recomendaciones de salud basadas en los resultados. La aplicación está desarrollada con React y utiliza Tailwind CSS para el diseño.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Cómo Usar](#cómo-usar)
- [Pantallas](#pantallas)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Descripción del Proyecto

HemoScan tiene como objetivo ayudar a los usuarios a analizar sus niveles de hemoglobina mediante una simple carga de fotos. Usando algoritmos avanzados de inteligencia artificial, el sistema evalúa la imagen y devuelve los resultados indicando si los niveles de hemoglobina son normales, altos o bajos, además de ofrecer recomendaciones de salud personalizadas.

## Características

- **Autenticación de Usuarios:** Funcionalidad de inicio de sesión y registro con gestión de cuentas.
- **Análisis de Hemoglobina basado en IA:** Carga y análisis de fotos de exámenes de hemoglobina con retroalimentación en tiempo real.
- **Recomendaciones de Salud:** Consejos personalizados según los resultados del análisis.
- **Diseño Responsivo:** Optimizado para dispositivos móviles y de escritorio.
- **Sección de Ayuda/FAQ:** Centro de ayuda para que los usuarios obtengan más información y soluciones a problemas.
- **Soporte para Modo Oscuro y Claro:** Posibilidad de cambiar entre temas oscuro y claro.

## Tecnologías Utilizadas

- **Frontend:**
  - React.js
  - React Router para la navegación
  - Tailwind CSS para el diseño
- **Backend (Opcional, dependiendo del alcance del proyecto):**
  - Node.js/Express.js (Si aplica)
  - MongoDB o Firebase para la gestión de datos de usuarios
- **Integración de IA:** 
  - Modelo de IA para análisis de hemoglobina
- **APIs:**
  - Google API para identificación de usuarios (planificado)

## Instalación y Configuración

### Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (v14 o superior)
- **npm** o **yarn**

### Pasos de Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/JiovannyVega/HemoScan.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd HemoScan
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

5. Abre la aplicación en tu navegador:

    ```bash
    http://localhost:3000
    ```

## Cómo Usar

1. **Regístrate** para crear una nueva cuenta o **inicia sesión** si ya tienes una cuenta.
2. Una vez autenticado, sube una foto de tu examen de hemoglobina para su análisis.
3. La IA analizará la imagen y mostrará los resultados, indicando si tus niveles de hemoglobina son normales, altos o bajos.
4. Revisa las recomendaciones de salud personalizadas basadas en tus resultados.
5. Utiliza la página de **Ayuda/FAQ** para resolver dudas o problemas.

## Pantallas

- **NewHomePage:** Página principal visible para todos los usuarios, tanto autenticados como no autenticados.
- **LoginPage:** Página para que los usuarios inicien sesión en su cuenta.
- **SignupPage:** Página para que nuevos usuarios se registren.
- **Dashboard:** Área principal donde se muestran los resultados y las recomendaciones.
- **ProfilePage:** Permite a los usuarios actualizar sus datos de perfil.
- **Help/FAQ Page:** Proporciona respuestas a preguntas comunes e información de soporte.
- **AboutPage:** Información sobre el proyecto HemoScan.
- **ErrorPage:** Página de error personalizada para rutas incorrectas o excepciones no controladas.

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica o corrección de errores:
    ```bash
    git checkout -b feature/nueva-caracteristica
    ```
3. Haz commit de tus cambios:
    ```bash
    git commit -m 'Agregar una nueva característica'
    ```
4. Sube los cambios a la rama:
    ```bash
    git push origin feature/nueva-caracteristica
    ```
5. Abre un Pull Request y describe tus cambios.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
