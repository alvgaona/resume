export const data = {
  name: 'Alvaro Joaquín Gaona',
  location: {
    value: 'Buenos Aires, Argentina',
  },
  contact: {
    email: {
      address: 'alvgaona@gmail.com',
    },
    tel: {
      address: '+54 (911) 6797-1081',
    },
    social: [
      {
        name: 'X',
        username: 'alvgaona',
        url: 'https://x.com/alvgaona',
      },
      {
        name: 'GitHub',
        username: 'alvgaona',
        url: 'https://github.com/alvgaona',
      },
      {
        name: 'LinkedIn',
        username: 'alvaro-gaona',
        url: 'https://linkedin.com/in/alvaro-gaona',
      },
      {
        name: 'Google Scholar',
        username: 'alvgaona',
        url: 'https://scholar.google.com/citations?user=unBAfxAAAAAJ&hl=en',
      },
      {
        name: 'Sitio Web',
        username: 'alvgaona.com',
        url: 'https://alvgaona.com',
      },
    ],
  },
  education: [
    {
      break: false,
      title: 'Universidad de Buenos Aires',
      description:
        'Graduado en Ingeniería Electrónica (equivalente a Grado + Maestría)',
      location: 'Buenos Aires, Argentina',
      span: 'Sep. 2010 - Sep. 2019',
      bullets: [
        '"Deep Recurrent Learning for Heart Sounds Segmentation based on Instantaneous Frequency Features", Tesis de Grado (Maestría), 2019. Universidad de Buenos Aires. Calificación 10/10.',
        'Promedio: 3.5/4.0',
      ],
    },
  ],
  experience: [
    {
      break: false,
      position: 'Lead Software Engineer',
      company: {
        name: 'ASAPP',
      },
      location: 'Buenos Aires, Argentina',
      date: 'Ago. 2022 - Presente',
      responsibilities: [
        'Lideré un servicio crítico de ofuscamiento de datos PCI/PII para toda la empresa, desarrollado en Python/Go.',
        'Diseñé y mantuve un servicio de Automatic Speech Recognition (ASR) en tiempo real en C++14.',
        'Integré Large Language Models (LLMs) en el servicio de ofuscamiento de datos, mejorando la precisión mientras cumplía con los SLAs.',
        'Implementé el servidor de inferencia Triton de NVIDIA a través de cuentas AWS y clústeres Kubernetes para inferencia ML optimizada.',
        'Compilé y sirví modelos usando Torch Compiler con backends TensorRT y ONNX vía Triton.',
        'Diseñé e implementé sistemas de monitoreo para servicios de ML para asegurar confiabilidad y resolución rápida de problemas.',
      ],
    },
    {
      break: false,
      position: 'Ayudante de Cátedra',
      company: {
        name: "Universidad de 'San Andrés'",
      },
      location: 'Buenos Aires, Argentina',
      date: 'Mar. 2022 - Jul. 2022',
      responsibilities: [
        'Dicté clases a estudiantes de grado en ingeniería de IA sobre los principios de "Pensamiento Computacional," con enfoque en aplicación práctica usando Python.',
        'Ofrecí apoyo integral a estudiantes de primer año durante sus estudios, ayudándoles a navegar la facultad y alcanzar sus metas académicas.',
      ],
    },
    {
      break: false,
      position: 'Ingeniero de Investigación',
      company: {
        name: "Universidad de 'San Andrés'",
      },
      location: 'Buenos Aires, Argentina',
      date: 'Ago. 2021 - Jul. 2022',
      responsibilities: [
        'Lideré el proyecto de aterrizaje UAV y desarrolló algoritmos que permitieron aterrizaje seguro y preciso en plataformas mediante técnicas de visión por computadora. Implementó seguimiento de objetos, estimación de movimiento y algoritmos de control para aterrizaje autónomo usando C++, ROS, Gazebo y OpenCV',
        'Estuve involucrado en un proyecto de vehículo autónomo con el objetivo de lograr conducción autónoma en Argentina.',
      ],
    },
    {
      break: true,
      position: 'Senior Software Engineer',
      company: {
        name: 'Roche',
      },
      location: 'Buenos Aires, Argentina',
      date: 'Feb. 2019 - Jul. 2022',
      responsibilities: [
        'Lideré la migración de base de datos principal de Oracle a PostgreSQL con mínima interrupción del negocio',
        'Desarrollé software tolerante a fallos para diseño de paneles Next Generation Sequencing (NGS) y análisis de cáncer usando framework Spring',
        'Rediseñé el servicio de precios para optimizar recomendaciones de materiales para paneles NGS',
        'Creé una herramienta basada en la nube para probar integración de pipelines bioinformáticos, mejorando precisión de análisis de cáncer',
        'Reduje el tiempo de ejecución de una suite de pruebas de días a minutos, mejorando eficiencia de desarrollo de software',
        'Implementé pipelines automatizados de CI/CD en Jenkins para varios tipos de aplicaciones',
        'Contribuí al proceso de contratación técnica, fortaleciendo el equipo con profesionales calificados',
      ],
    },
    {
      break: false,
      position: 'Software Engineer',
      company: {
        name: 'Telecom Argentina',
      },
      location: 'Buenos Aires, Argentina',
      date: 'Dic. 2015 - Feb. 2019',
      responsibilities: [
        'Jugué un rol clave en el desarrollo de un controlador SDN responsable de aprovisionar varios servicios (Internet, L3VPN, L2VPN, VPLS) en el backbone para más de 1000 clientes.',
        'Diseñé y desarrollé una aplicación personalizada para la gestión de direcciones IP para uso interno, permitiendo al equipo de ingeniería asignar efectivamente direcciones IPv4/IPv6 públicas y privadas para clientes.',
        'Lideré el diseño e implementación del frontend del controlador SDN usando JavaScript ES6, React y Redux, resultando en una interfaz amigable y eficiente para gestionar servicios de red.',
        'Gestioné la configuración y ambiente para cargas de trabajo a través de nubes públicas y privadas, incluyendo AWS y VMware vSphere / NSX-V, asegurando alta disponibilidad y rendimiento óptimo.',
      ],
    },
    {
      break: false,
      position: 'Técnico Electrónico',
      company: {
        name: 'Servicio Meteorológico Nacional Argentino',
      },
      location: 'Buenos Aires, Argentina',
      date: 'Feb. 2015 - Dic. 2015',
      responsibilities: [
        'Diseñé placas de circuito usadas en una variedad de dispositivos de medición meteorológica, contribuyendo a la recolección precisa y confiable de datos meteorológicos.',
        'Instalé exitosamente más de 20 estaciones meteorológicas en todo el país, asegurando cobertura integral de patrones y fenómenos meteorológicos.',
      ],
    },
    {
      break: false,
      position: 'Ayudante de Cátedra',
      company: {
        name: 'Instituto Social Militar Dr. Dámaso Centeno',
      },
      location: 'Buenos Aires, Argentina',
      date: 'Mar. 2009 - Dic. 2009',
      responsibilities: [
        'Serví como ayudante de cátedra para estudiantes de secundaria, brindando apoyo en materias de matemáticas y física.',
      ],
    },
  ],
  volunteering: [
    {
      position: 'Contribuidor',
      organization: {
        name: 'PyTorch',
      },
      date: 'Jul. 2020 - Presente',
      industry: 'Ciencia y Tecnología',
    },
  ],
  skills: [
    {
      category: 'Lenguajes de Programación',
      badges: [
        'C/C++',
        'Rust',
        'Python',
        'TypeScript',
        'Java',
        'Kotlin',
        'Go',
        'Julia',
        'MATLAB/Simulink',
      ],
    },
    {
      category: 'Ingeniería de Software',
      badges: [
        'Linux',
        'Git',
        'Docker',
        'Kafka',
        'DynamoDB',
        'MongoDB',
        'PostgreSQL',
        'Websockets',
        'HTTP/HTTPS',
        'Data Dog',
        'Grafana',
        'Amazon Web Services',
        'Google Cloud Platform',
        'Azure',
        'Kubernetes',
        'POO',
        'Patrones de Diseño',
        'Ágil',
        'Estimación',
        'Planificación',
      ],
    },
    {
      break: true,
      category: 'Bibliotecas y Herramientas',
      badges: [
        'OpenCV',
        'PCL',
        'Boost',
        'STL',
        'Eigen',
        'CMake',
        'Bazel',
        'PyTorch',
        'Tensorflow',
        'Gstreamer',
        'Terraform',
        'Packer',
        'React',
        'NextJS',
        'Astro',
      ],
    },
    {
      category: 'Inteligencia Artificial',
      badges: [
        'Aprendizaje Supervisado',
        'Aprendizaje No Supervisado',
        'Aprendizaje por Refuerzo',
        'PLN',
        'Visión por Computadora',
        'Ajuste Fino',
        'Destilación de Conocimiento',
        'Evaluación de Modelos',
      ],
    },
    {
      category: 'Sistemas Autónomos',
      badges: [
        'Robótica Móvil',
        'Cinemática',
        'Dinámica Vehicular',
        'Fusión de Sensores',
        'SLAM',
        'Navegación',
        'ROS/ROS2',
        'NVIDIA Isaac Sim',
        'Unity',
        'PX4',
        'Mavlink',
      ],
    },
    {
      category: 'Matemáticas',
      badges: [
        'Álgebra Lineal',
        'Cálculo',
        'Sistemas Lineales',
        'Sistemas No Lineales',
        'Optimización Convexa',
        'Métodos Numéricos',
        'Procesamiento de Señales',
        'Control Clásico',
        'Control Moderno',
        'Control Óptimo',
      ],
    },
    {
      break: false,
      category: 'Otros',
      badges: [
        'Trabajo en Equipo',
        'Responsabilidad',
        'Comunicación',
        'Liderazgo',
        'Automotivación',
        'Hablar en Público',
      ],
    },
  ],
  projects: [
    {
      title: 'Taller de Aprendizaje Profundo',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Ago. 2021 - Ago. 2022',
      description:
        'Taller de aprendizaje profundo para estudiantes de secundaria cubriendo conceptos fundamentales y aplicaciones prácticas usando PyTorch y Jupyter Notebooks.',
      tags: [
        'PyTorch',
        'Jupyter',
        'Python',
        'Visión por Computadora',
        'Hiperparámetros',
      ],
      details: [
        'Diseñé y dicté un taller integral de aprendizaje profundo adaptado para estudiantes de secundaria. El taller abarcó conceptos fundamentales como el Perceptrón de Rosenblatt, redes neuronales lineales, redes neuronales lineales multicapa utilizando el conjunto de datos MNIST, y Redes Neuronales Convolucionales aplicadas al conjunto de datos Flowers de Kaggle. Todo el taller fue construido sobre Jupyter Notebooks, utilizando PyTorch como el framework preferido para aprendizaje profundo.',
        'Los estudiantes aprendieron exitosamente los conceptos y construyeron sus propios modelos de aprendizaje profundo para clasificar imágenes de flores.',
        'El taller fue un gran éxito y los estudiantes estuvieron muy entusiasmados por aprender más sobre aprendizaje profundo.',
      ],
    },
    {
      title: 'Vehículo Autónomo',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Ago. 2021 - Ago. 2022',
      description:
        'Integración, calibración y prueba de sensores, implementando algoritmos avanzados para aspectos esenciales, y mejorando capacidades de conducción autónoma en un Ford Fusion 2017.',
      tags: [
        'C++',
        'Python',
        'ROS/ROS2',
        'Fusión de Sensores',
        'LiDAR',
        'Radar',
        'Cámaras',
      ],
      details: [
        'Participé en la integración de un Ford Fusion 2017, con responsabilidades abarcando calibración y prueba de una diversa gama de sensores.',
        'Ejecuté algoritmos avanzados dedicados a aspectos cruciales incluyendo localización, percepción, control y planificación.',
        'Enfoqué esfuerzos en un Ford Fusion Hybrid 2017 con sistema drive-by-wire controlado por computadora, permitiendo supervisión remota de todas las operaciones vehiculares.',
        'Orquesté la incorporación de sensores de vanguardia, abarcando LiDAR, cámaras, radar, GPS y computadora, aumentando profundamente la competencia de conducción autónoma del vehículo.',
        'Todo el código fue escrito en C++ con algunos módulos en Python, y el auto era compatible con ROS/ROS2.',
        'Jugué un papel importante en elevar la autonomía del vehículo a través de percepción ambiental meticulosa y capacidades de análisis integral.',
      ],
    },
    {
      title: 'Aterrizaje Tolerante a Fallas',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Ago. 2021 - Ago. 2022',
      description:
        'Algoritmo para aterrizajes precisos de aeronaves multirotor, abordando desafíos como falla de motor.',
      tags: [
        'C++',
        'PX4',
        'NVIDIA® Jetson',
        'QGroundControl',
        'Mavlink',
        'ROS',
        'Gazebo',
      ],
      details: [
        'Lideré la conceptualización y creación de un algoritmo sofisticado adaptado para el aterrizaje preciso de una aeronave multirotor, demostrando una aptitud excepcional para resolución de problemas e innovación técnica.',
        'Diseñé y desarrollé el algoritmo para operar sin problemas incluso en escenarios que involucran falla de motor, mostrando una comprensión aguda de dinámica de vuelo crítica y protocolos de seguridad.',
        'Construí vehículos aéreos desde cero, empleando una placa controladora especialmente diseñada equipada con computadora a bordo. Frecuentemente, se utilizó una Raspberry Pi para funciones de alto nivel. Alternativamente, la placa controladora Pixhawk 4, integrada con el software de control de vuelo autopiloto PX4, se empleó en ciertos casos.',
        'Empleé refinamiento iterativo y metodologías de prueba rigurosas para asegurar la robustez y confiabilidad del algoritmo, resultando en una solución resiliente capaz de navegar procedimientos de aterrizaje complejos con máxima precisión.',
        'Colaboré estrechamente con un equipo multidisciplinario, comunicando efectivamente ideas para asegurar integración sin problemas del algoritmo en el marco más amplio del proyecto.',
        'Mejoré la seguridad general y capacidades operativas del sistema multirotor.',
      ],
    },
    {
      title: 'Air Hockey',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Ago. 2021 - Ago. 2022',
      description:
        'Algoritmos de Aprendizaje por Refuerzo (RL) y heurísticos logrando habilidades de juego a nivel humano en partidas de Air Hockey.',
      tags: [
        'Segmentación',
        'C/C++',
        'Python',
        'Estimación de Estado',
        'Q-Learning',
      ],
      details: [
        'Contribuí a un proyecto pionero en la Universidad de San Andrés involucrando la aplicación de algoritmos de Aprendizaje por Refuerzo (RL) para mejorar el rendimiento en el juego de Air Hockey.',
        'Desarrollé e implementé un algoritmo heurístico como base para control de paleta, que estimaba posición y velocidad del disco para informar decisiones de juego en tiempo real.',
        'Diseñé y construí un simulador integral para facilitar el entrenamiento y evaluación de agentes RL, permitiendo pruebas eficientes de diferentes estrategias en un ambiente controlado.',
        'Investigué técnicas de redes neuronales de vanguardia, incluyendo la arquitectura U-Net, para segmentación precisa del disco desde imágenes de cámara posicionadas sobre la mesa de air hockey.',
        'Exploré e investigué soluciones potenciales para abordar desafíos que surgen de condiciones variables de iluminación e interferencia de balance de blancos automático. Implementó sistemas de visión basados en redes neuronales para mejorar seguimiento de disco y estimación de estado, contribuyendo a un rendimiento más resiliente en el contexto de juego de Air Hockey.',
        'Evalué y comparé el rendimiento de agentes RL y segmentación basada en redes neuronales contra la línea base del algoritmo heurístico, utilizando métricas como tasas de victoria y puntajes de juego para análisis integral.',
      ],
    },
    {
      break: false,
      title: 'Balancio',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Ago. 2021 - Ago. 2022',
      description:
        'Proyecto educativo para un robot auto-balanceante de ultra bajo costo, capaz de ejecutar una red neuronal para mantener balance.',
      tags: [
        'Arduino',
        'PyTorch',
        'Python',
        'Electrónica',
        'PID',
        'Aprendizaje Profundo',
      ],
      details: [
        'Proyecto educativo para un robot auto-balanceante de ultra bajo costo, capaz de ejecutar una red neuronal para mantener balance y ser controlado inalámbricamente. Desarrollado con fines educativos para enseñar conceptos de RL, ML, IA y control.',
        'Creado usando Arduino y PyBullet como entorno de simulación para cerrar la brecha entre simulación y realidad (Sim2Real).',
      ],
    },
    {
      break: false,
      title: 'Monocular SLAM',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Feb. 2018 - Dic. 2018',
      description:
        'Sistema de navegación visual para localización y mapeo simultáneo de robot móvil usando EKF y RANSAC de 1 Punto',
      tags: [
        'Kalman',
        'Modelo Pinhole',
        'C++17',
        'Extracción de Características',
        'RANSAC',
      ],
      details: [
        'Implementé un sistema de navegación visual para localización y mapeo simultáneo de robot móvil usando EKF y RANSAC de 1 Punto en C++17.',
      ],
    },
  ],
  languages: [
    {
      name: 'Español',
      proficiency: 'Nativo',
    },
    {
      name: 'Inglés',
      proficiency: 'Competencia Profesional Completa (Nivel C2)',
    },
  ],
  publications: [
    {
      type: 'Revista',
      title:
        'A. J. Gaona, P. D. Arini. "Deep Recurrent Learning for Heart Sounds Segmentation based on Instantaneous Frequency Features". Revista Elektron, Vol. 4, No. 2, pp 52‐57 (2020).',
    },
    {
      type: 'Conferencia',
      title:
        'A. J. Gaona, C. D. P, J. I. Giribet, R. Bunge. "Prototyping of a multirotor UAV for precision landing under rotor failures". Jornadas Argentinas de Robótica (JAR) XI (2022).',
    },
    {
      type: 'Conferencia',
      title:
        'J. I. Giribet, C. D. Pose, A. J. Gaona, R. Bunge, J. I. González Etchemaite. "Fault Tolerant Solutions for Multirotor Unmanned Aerial Vehicles in NVIDIA® Jetson™ TX2". NVIDIA GPU Technology Conference (2022).',
    },
  ],
  certifications: [
    {
      name: 'Autonomous Mobile Robots',
      company: 'ETHx',
      issued: 'Abr. 2024',
      url: 'https://courses.edx.org/certificates/78efdad8566d44f19247b6b4d9a9ca87',
    },
    {
      name: 'Machine Learning Specialization',
      company: 'DeepLearning.AI',
      issued: 'Dic. 2022',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/ML-Specialization.pdf',
    },
    {
      name: 'Deep Reinforcement Learning',
      company: 'Udacity',
      issued: 'Ene. 2022',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/DRLN-Certificate.pdf',
    },
    {
      name: 'AWS Solutions Architect Associate',
      company: 'Amazon Web Services (AWS)',
      issued: 'Jul. 2020',
      url: 'https://www.youracclaim.com/badges/f436421c-4003-4414-ab0c-fb048eb6b76d?source=linked_in_profile',
    },
    {
      name: 'Robotics Software Engineer Nanodegree',
      company: 'Udacity',
      issued: 'Jun. 2020',
      url: 'https://graduation.udacity.com/confirm/TJ7WMENN',
    },
    {
      name: 'Deep Learning Nanodegree',
      company: 'Udacity',
      issued: 'May. 2020',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/DLND-Certificate.pdf',
    },
    {
      name: 'Sensor Fusion Nanodegree',
      company: 'Udacity',
      issued: 'Feb. 2020',
      url: 'https://graduation.udacity.com/confirm/FRQGRNDP',
    },
    {
      name: 'C++ Nanodegree',
      company: 'Udacity',
      issued: 'Ene. 2020',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/CppND-Certificate.pdf',
    },
  ],
};
