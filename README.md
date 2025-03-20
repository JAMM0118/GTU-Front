# Sistema de Gestión de Rutas - Administrador

Este repositorio contiene el código fuente del frontend del sistema de gestión de rutas, enfocado en la administración. La aplicación permite a los administradores agregar, modificar, eliminar y asignar rutas, así como monitorearlas en tiempo real.

## Estructura de Ramas

El desarrollo del proyecto sigue un flujo de trabajo basado en ramas para garantizar estabilidad y control en la integración de cambios. Las ramas principales son:

- **master**: Contiene la versión estable y en producción del sistema. Solo se fusionan cambios probados y validados.
- **develop**: Es la rama de desarrollo principal donde se integran los cambios de las funcionalidades en curso antes de ser aprobados para una versión estable.
- **release**: Se utiliza para preparar nuevas versiones antes de su despliegue en producción. Aquí se realizan pruebas finales y correcciones antes de fusionar con `master`.

## Proceso de Contribución

Para garantizar la calidad del código, se debe seguir el siguiente flujo de trabajo:

1. Crear una nueva rama a partir de `develop` para trabajar en una funcionalidad o corrección de errores.
2. Realizar cambios y realizar commits descriptivos.
3. Abrir un **Pull Request** hacia la rama `develop`.
4. Todos los cambios deben ser revisados y aprobados por el equipo antes de ser fusionados.
5. Una vez aprobados, los cambios se integran en `develop`, y posteriormente en `release` cuando se prepare una nueva versión.

## Tecnologías Utilizadas

- **Angular**: Biblioteca principal para el desarrollo del frontend.
- **Styled Components / Tailwind CSS**: Para el diseño y estilos.


