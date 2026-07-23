const skills = [
  {
    category: {
      es: "Arquitectura de Software",
      en: "Software Architecture",
    },
    items: [
      {
        name: "Microservices",
        description: {
          es: "Diseño y desarrollo de arquitecturas distribuidas con microservicios para alta escalabilidad y desacoplamiento.",
          en: "Design and development of distributed architectures with microservices for high scalability and decoupling.",
        },
      },
      {
        name: "Microfrontends",
        description: {
          es: "Arquitectura frontend modular para aplicaciones escalables e independientes.",
          en: "Modular frontend architecture for scalable and independent applications.",
        },
      },
      {
        name: "Clean Architecture",
        description: {
          es: "Arquitectura limpia, DDD, principios SOLID y patrones de diseño.",
          en: "Clean architecture, DDD, SOLID principles and design patterns.",
        },
      },
      {
        name: "REST APIs",
        description: {
          es: "Diseño e integración de APIs RESTful y SOAP con autenticación JWT/OAuth.",
          en: "Design and integration of RESTful and SOAP APIs with JWT/OAuth authentication.",
        },
      },
    ],
  },
  {
    category: {
      es: "Desarrollo Backend",
      en: "Backend Development",
    },
    items: [
      {
        name: "Java",
        description: {
          es: "Spring Boot, APIs empresariales, arquitectura orientada a objetos.",
          en: "Spring Boot, enterprise APIs, object-oriented architecture.",
        },
      },
      {
        name: "Node.js",
        description: {
          es: "Express, creación de APIs REST, arquitectura serverless.",
          en: "Express, REST API creation, serverless architecture.",
        },
      },
      {
        name: "Python",
        description: {
          es: "Django, automatización, análisis de datos, Pandas, NumPy.",
          en: "Django, automation, data analysis, Pandas, NumPy.",
        },
      },
      {
        name: "PHP",
        description: {
          es: "Laravel, desarrollo web backend.",
          en: "Laravel, backend web development.",
        },
      },
      {
        name: "C#",
        description: {
          es: "Desarrollo backend y aplicaciones de escritorio.",
          en: "Backend development and desktop applications.",
        },
      },
      {
        name: "C++",
        description: {
          es: "Programación de bajo nivel y rendimiento.",
          en: "Low-level programming and performance.",
        },
      },
    ],
  },
  {
    category: {
      es: "Desarrollo Frontend & Móvil",
      en: "Frontend & Mobile Development",
    },
    items: [
      {
        name: "React",
        description: {
          es: "Interfaces SPA, componentes reutilizables, manejo eficiente de estado.",
          en: "SPA interfaces, reusable components, efficient state management.",
        },
      },
      {
        name: "React Native",
        description: {
          es: "Desarrollo móvil multiplataforma con JavaScript.",
          en: "Cross-platform mobile development with JavaScript.",
        },
      },
      {
        name: "Flutter",
        description: {
          es: "Desarrollo móvil multiplataforma con Dart, UI nativa.",
          en: "Cross-platform mobile development with Dart, native UI.",
        },
      },
      {
        name: "Angular",
        description: {
          es: "Framework frontend enterprise con TypeScript.",
          en: "Enterprise frontend framework with TypeScript.",
        },
      },
      {
        name: "Vue.js",
        description: {
          es: "Framework frontend progresivo y versátil.",
          en: "Progressive and versatile frontend framework.",
        },
      },
      {
        name: "TypeScript",
        description: {
          es: "JavaScript tipado para código mantenible y escalable.",
          en: "Typed JavaScript for maintainable and scalable code.",
        },
      },
      {
        name: "HTML5",
        description: {
          es: "Estructura semántica de páginas web y accesibilidad.",
          en: "Semantic web page structure and accessibility.",
        },
      },
      {
        name: "CSS3",
        description: {
          es: "Diseño visual, layouts responsivos y estilos modernos.",
          en: "Visual design, responsive layouts and modern styles.",
        },
      },
      {
        name: "Tailwind CSS",
        description: {
          es: "Framework utility-first para diseño rápido y escalable.",
          en: "Utility-first framework for fast and scalable design.",
        },
      },
      {
        name: "Bootstrap",
        description: {
          es: "Framework CSS para prototipado rápido.",
          en: "CSS framework for rapid prototyping.",
        },
      },
    ],
  },
  {
    category: {
      es: "Bases de Datos",
      en: "Databases",
    },
    items: [
      {
        name: "MySQL",
        description: {
          es: "Bases de datos relacionales, optimización de consultas.",
          en: "Relational databases, query optimization.",
        },
      },
      {
        name: "PostgreSQL",
        description: {
          es: "Base de datos relacional avanzada y robusta.",
          en: "Advanced and robust relational database.",
        },
      },
      {
        name: "Oracle Database",
        description: {
          es: "Sistema de gestión de bases de datos empresarial.",
          en: "Enterprise database management system.",
        },
      },
      {
        name: "SQL Server",
        description: {
          es: "Base de datos relacional de Microsoft.",
          en: "Microsoft relational database.",
        },
      },
      {
        name: "MongoDB",
        description: {
          es: "Base de datos NoSQL flexible y escalable.",
          en: "Flexible and scalable NoSQL database.",
        },
      },
      {
        name: "Firebase",
        description: {
          es: "Backend como servicio, base de datos en tiempo real.",
          en: "Backend as a service, real-time database.",
        },
      },
      {
        name: "SQLite",
        description: {
          es: "Base de datos ligera embebida.",
          en: "Lightweight embedded database.",
        },
      },
    ],
  },
  {
    category: {
      es: "Cloud, DevOps & Infraestructura",
      en: "Cloud, DevOps & Infrastructure",
    },
    items: [
      {
        name: "AWS",
        description: {
          es: "DynamoDB, EC2, Lambda, servicios en la nube para despliegue y escalabilidad.",
          en: "DynamoDB, EC2, Lambda, cloud services for deployment and scalability.",
        },
      },
      {
        name: "Vercel",
        description: {
          es: "Deploy frontend rápido y hosting.",
          en: "Fast frontend deployment and hosting.",
        },
      },
      {
        name: "Railway",
        description: {
          es: "Plataforma de deploy en la nube.",
          en: "Cloud deployment platform.",
        },
      },
      {
        name: "Cloudflare",
        description: {
          es: "CDN, seguridad y optimización web.",
          en: "CDN, security and web optimization.",
        },
      },
      {
        name: "Git",
        description: {
          es: "Control de versiones, Git Flow.",
          en: "Version control, Git Flow.",
        },
      },
      {
        name: "Linux",
        description: {
          es: "Ubuntu, administración de sistemas y terminales.",
          en: "Ubuntu, system and terminal administration.",
        },
      },
      {
        name: "Cisco Networking",
        description: {
          es: "Redes, TCP/IP, configuración de infraestructura de red.",
          en: "Networking, TCP/IP, network infrastructure configuration.",
        },
      },
    ],
  },
  {
    category: {
      es: "Análisis de Datos & BI",
      en: "Data Analysis & BI",
    },
    items: [
      {
        name: "Power BI",
        description: {
          es: "Dashboards interactivos, KPIs y reportes empresariales.",
          en: "Interactive dashboards, KPIs and enterprise reports.",
        },
      },
      {
        name: "Tableau",
        description: {
          es: "Visualización de datos y análisis exploratorio.",
          en: "Data visualization and exploratory analysis.",
        },
      },
      {
        name: "Python (Pandas/NumPy)",
        description: {
          es: "Minería de datos, análisis estadístico y ETL.",
          en: "Data mining, statistical analysis and ETL.",
        },
      },
      {
        name: "SQL Analytics",
        description: {
          es: "Consultas avanzadas para análisis de datos.",
          en: "Advanced queries for data analysis.",
        },
      },
    ],
  },
  {
    category: {
      es: "Gestión de Proyectos & Soft Skills",
      en: "Project Management & Soft Skills",
    },
    items: [
      {
        name: "Scrum / Kanban",
        description: {
          es: "Metodologías ágiles para gestión de proyectos.",
          en: "Agile methodologies for project management.",
        },
      },
      {
        name: "Liderazgo",
        description: {
          es: "Liderazgo de equipos de ingeniería de hasta 5 integrantes.",
          en: "Leadership of engineering teams of up to 5 members.",
        },
      },
      {
        name: "Oratoria",
        description: {
          es: "Presentaciones técnicas ante auditorios de más de 2,000 asistentes.",
          en: "Technical presentations before audiences of over 2,000 attendees.",
        },
      },
      {
        name: "Pensamiento Analítico",
        description: {
          es: "Resolución de problemas complejos con enfoque estructurado.",
          en: "Complex problem solving with a structured approach.",
        },
      },
    ],
  },
];

export default skills;
