# PRAYER - Módulo de peticiones

Repositorio del proyecto **PRAYER - Sistema de gestión y acompañamiento de peticiones de oración**.

## Módulo de la Unidad 3

**Registro y actualización de estado de peticiones**.

Este módulo permitirá registrar peticiones y actualizar su estado durante el seguimiento entre:

- Pendiente
- En seguimiento
- Respondida
- Cerrada

**Requerimientos vinculados:** RF-01 y RF-05.

**Stack seleccionado en el Avance 1:** JavaScript + Express.

## Integrante

- Ariel Ramiro Reinoso Haro

## Flujo de trabajo Git

Se utilizará un flujo simple tipo **GitHub Flow**:

1. La rama `main` se mantiene estable.
2. Cada cambio se desarrolla en una rama independiente con el prefijo `feature/`.
3. Los cambios se guardan mediante commits pequeños y con mensajes claros.
4. La rama de trabajo se sube al repositorio remoto.
5. Se abre un Pull Request para revisar e integrar los cambios a `main`.
6. GitHub Actions ejecuta el pipeline de integración continua en cada `push` y `pull_request`.

## Estructura

```text
prayer-peticiones/
|-- README.md
|-- .gitignore
|-- package.json
|-- src/
|   `-- index.js
`-- .github/
    `-- workflows/
        `-- ci.yml
```

## Integración continua

El repositorio incluye un flujo básico de CI con **GitHub Actions**.

En este avance se comprueba que el pipeline se ejecuta correctamente. Las pruebas automatizadas se incorporarán en los avances posteriores de la Unidad 3.

## Evidencia del flujo
Este cambio documenta el uso de GitHub Flow para el módulo de registro y actualización de peticiones.