// src/pages/Slides.js
import Slide from '../components/Slide';


const slideContents = [
  { title: "Presentación de Next.js", content: "Next.js es un framework de React que ofrece capacidades avanzadas como SSR y SSG." },
  { title: "Historia y evolución", content: "Desarrollado por Vercel, Next.js ha evolucionado rápidamente desde su lanzamiento en 2016." },
  { title: "¿Por qué Next.js?", content: "Ofrece una experiencia de desarrollo mejorada, optimización de rendimiento y facilidad de despliegue." },
  { title: "SSR (Renderizado del lado del servidor)", content: "Permite generar páginas dinámicamente en el servidor en tiempo real." },
  { title: "SSG (Generación de sitios estáticos)", content: "Genera páginas en tiempo de compilación, mejorando el rendimiento y la SEO." },
  { title: "Rutas basadas en archivos", content: "La estructura de archivos determina las rutas. Por ejemplo, `pages/about.js` se convierte en `/about`." },
  { title: "API Routes", content: "Crea funciones API sin configuración adicional en la carpeta `pages/api`." },
  { title: "Optimización de imágenes", content: "Con el componente Image, Next.js optimiza automáticamente las imágenes." },
  { title: "CSS y SCSS incorporados", content: "Soporte integrado para CSS y SCSS, con aislamiento de estilos por componente." },
  { title: "Módulos TypeScript incorporados", content: "Soporte nativo para TypeScript sin configuración adicional." },
  { title: "Fast Refresh", content: "Refresco instantáneo del navegador durante el desarrollo sin perder el estado." },
  { title: "Despliegue fácil en Vercel", content: "Con Vercel, puedes desplegar aplicaciones Next.js con un solo comando: `vercel`." },
  { title: "Ventajas de usar Next.js", content: "Rendimiento, SEO, desarrollo eficiente y facilidad de despliegue son algunas de las ventajas." },
  { title: "Casos de éxito", content: "Empresas como Twitch, Hulu y TikTok utilizan Next.js en sus plataformas." },
  { title: "¡Comienza con Next.js ahora!", content: "Con una comunidad activa y una amplia documentación, ahora es el momento perfecto para empezar." },
];

export default function Slides({ currentSlide }) {  
 return (
    <div>
      <Slide title={slideContents[currentSlide].title} content={slideContents[currentSlide].content} />
    </div>
  );
}