# Portafolio de Jorge Ibarra

Portafolio personal construido con [Astro](https://astro.build/) para mostrar mi experiencia, proyectos, habilidades y certificaciones como desarrollador full-stack.

## Vista general

Este sitio presenta una landing principal con acceso rapido a:

- Experiencia profesional
- Proyectos destacados
- Habilidades tecnicas
- Certificaciones
- Informacion personal y enlaces de contacto

La interfaz esta pensada para ser rapida, responsiva y facil de navegar tanto en escritorio como en movil.

## Tecnologias

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/) para despliegue
- `@fontsource-variable/onest` para tipografia

## Requisitos

- Node.js 18 o superior
- pnpm recomendado

## Instalacion

```bash
pnpm install
```

## Scripts disponibles

```bash
pnpm dev      # Inicia el servidor de desarrollo
pnpm start    # Alias de dev
pnpm build    # Valida tipos y genera el build de produccion
pnpm preview  # Previsualiza el build generado
```

## Estructura del proyecto

```text
src/
	components/   # Secciones y componentes reutilizables del portafolio
	layouts/      # Layout principal del sitio
	pages/        # Paginas de Astro
public/         # Recursos estaticos, como la foto de perfil
```

## Secciones principales

- Hero con presentacion y enlaces de contacto
- Experiencia laboral
- Proyectos
- Habilidades tecnicas
- Certificaciones
- Sobre mi

## Habilidades destacadas

El portafolio incluye habilidades como:

- Java
- Spring
- NestJS
- Angular
- React
- MySQL
- Git
- Postman

## Desarrollo local

1. Clona el repositorio.
2. Instala dependencias con `pnpm install`.
3. Ejecuta `pnpm dev`.
4. Abre la URL que aparece en consola, normalmente `http://localhost:4321`.

## Despliegue

El proyecto esta preparado para desplegarse en Netlify. Antes de publicar, ejecuta:

```bash
pnpm build
```

## Contacto

- LinkedIn: https://www.linkedin.com/in/jorgedibarra/
- GitHub: https://github.com/jorgedibarra
- Correo: ibarrapaezj@gmail.com


