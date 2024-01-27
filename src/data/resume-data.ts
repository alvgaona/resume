import mobile from '@/assets/device-phone-mobile.svg';
import github from '@/assets/github.svg';
import pin from '@/assets/map-pin.svg';

import envelope from '@/assets/envelope.svg';
import globe from '@/assets/globe-alt.svg';
import linkedin from '@/assets/linkedin.svg';
import scholar from '@/assets/scholar.svg';

import asapp from '@/assets/asappinc-logo.jpeg';
import aws from '@/assets/aws-logo.jpeg';
import damaso from '@/assets/damaso.png';
import dlai from '@/assets/dlai-logo.jpeg';
import pytorch from '@/assets/pytorch-logo.jpeg';
import roche from '@/assets/roche-logo.jpeg';
import smn from '@/assets/smn-logo.jpeg';
import telecom from '@/assets/telecom-argentina-logo.jpeg';
import udacity from '@/assets/udacity-logo.jpeg';
import udesa from '@/assets/udesa-logo.jpeg';

export const data = {
  name: 'Alvaro Joaquín Gaona',
  location: {
    value: 'Buenos Aires, Argentina',
    icon: pin,
  },
  contact: {
    email: {
      address: 'alvgaona@gmail.com',
      icon: envelope,
    },
    tel: {
      address: '+54 (911) 6797-1081',
      icon: mobile,
    },
    social: [
      {
        name: 'GitHub',
        username: 'alvgaona',
        url: 'https://github.com/alvgaona',
        icon: github,
      },
      {
        name: 'LinkedIn',
        username: 'alvaro-gaona',
        url: 'https://linkedin.com/in/alvaro-gaona',
        icon: linkedin,
      },
      {
        name: 'Website',
        username: 'alvgaona.com',
        url: 'https://alvgaona.com',
        icon: globe,
      },
      {
        name: 'Google Scholar',
        username: 'alvgaona',
        url: 'https://scholar.google.com/citations?user=unBAfxAAAAAJ&hl=en',
        icon: scholar,
      },
    ],
  },
  education: [
    {
      title: 'University of Buenos Aires',
      description: 'Graduate in Electrical Engineering',
      location: 'Buenos Aires, Argentina',
      span: 'Sep. 2013 - Sep. 2019',
      bullets: [
        '”Deep Recurrent Learning for Heart Sounds Segmentation based on Instantaneous Frequency Features”, Graduate Thesis, 2019. University of Buenos Aires. Grade 100/100.',
        'GPA: 3.5/4.0',
      ],
    },
    {
      title: 'University of Buenos Aires',
      description: 'Industrial Engineering (Incomplete)',
      location: 'Buenos Aires, Argentina',
      span: 'Mar. 2010 - Sep. 2013',
    },
    {
      title: 'Instituto Social Militar Dr. Dámaso Centeno',
      description:
        'Secondary Education with Option in Mathematics and Natural Sciences',
      location: 'Buenos Aires, Argentina',
      span: 'Mar. 2003 - Dec. 2009',
    },
  ],
  experience: [
    {
      position: 'Lead Machine Learning Engineer',
      company: {
        name: 'ASAPP',
        logo: asapp,
      },
      location: 'Buenos Aires, Argentina',
      date: 'Aug. 2022 - Present',
      responsibilities: [
        'Oversee the development and upkeep of several machine learning services, particularly those related to natural language processing (NLP) tasks like speech‐to‐text, redaction, and summarization.',
        'Accountable for ensuring the optimal health and performance of all our services, ensuring a superior user experience.',
        'I play a pivotal role in our cost‐reduction initiatives, including the automation of GPU workload scaling for both training and inference.',
        'I maintain regular communication with other departments and stakeholders throughout the organization.',
      ],
    },
    {
      type: 'multi',
      company: {
        name: "Universidad de 'San Andrés'",
        logo: udesa,
      },
      positions: [
        {
          position: 'Teaching Assitant',
          location: 'Buenos Aires, Argentina',
          date: 'Mar. 2022 - Jul. 2022',
          responsibilities: [
            'Lecture undergraduate students in AI engineering on the principles of ”Computational Thinking,” with a focus on practical application using Python.',
            'Offer comprehensive support to first‐year students throughout their studies, helping them navigate the faculty and achieve their academic goals.',
          ],
        },
        {
          position: 'Research Engineer',
          location: 'Buenos Aires, Argentina',
          date: 'Aug. 2021 - Jul. 2022',
          responsibilities: [
            'Conducted research on perception algorithms for self‐driving cars, investigating various techniques and algorithms to improve their effectiveness and reliability.',
            'Led a team in developing UAV landing algorithms that utilized computer vision technology to enable landing on moving platforms.',
            'Led a successful project utilizing computer vision and deep learning techniques to identify various skin diseases, resulting in the creation of a functional and accurate skin disease identification tool.',
          ],
        },
      ],
    },
    {
      position: 'Senior Software Engineer',
      company: {
        name: 'Roche',
        logo: roche,
      },
      location: 'Buenos Aires, Argentina',
      date: 'Feb. 2019 - Jul. 2022',
      responsibilities: [
        'Successfully migrated a core 500 GB database from Oracle to PostgreSQL, ensuring minimal disruption to business operations.',
        'Designed and implemented high-end, robust, and fault-tolerant software responsible for designing NGS panels and conducting cancer analyses on the cloud using frameworks such as Spring Boot.',
        'Redesigned the pricing calculator service, which could now recommend the most suitable materials to be used with NGS panels, resulting in more accurate and efficient cost estimation.',
        'Led the initiative to develop a tool capable of testing bioinformatic pipeline integration on the cloud, significantly reducing the risk of erroneous cancer analyses and improving overall data quality.',
        'Optimized testing suites run-time from days to minutes, allowing for faster and more efficient testing of software components.',
        'Provisioned cloud infrastructure on various AWS services such as EC2, S3, Batch, VPC, ECR, Route53, ECR, and ECS, utilizing tools such as Ansible, Packer, and Terraform for configuration management and infrastructure as code.',
        'Built fully automated CI/CD pipelines on Jenkins for both instance-base and containerized applications, enabling efficient deployment of software updates.',
        'Participated in the technical hiring process of the team, contributing to the recruitment and selection of highly skilled professionals.',
      ],
    },
    {
      position: 'Software Engineer',
      company: {
        name: 'Telecom Argentina',
        logo: telecom,
      },
      location: 'Buenos Aires, Argentina',
      date: 'Dec. 2015 - Feb. 2019',
      responsibilities: [
        'Played a key role in developing an SDN controller responsible for provisioning various services (Internet, L3VPN, L2VPN, VPLS) in the backbone for over 1000 customers.',
        'Designed and developed a custom IPAM(IP Address Manager) application for internal use, enabling the engineering team to effectively allocate both public and private IPv4/ IPv6 addresses for customers.',
        "Led the design and implementation of the SDN controller's front end using JavaScript ES6, React, and Redux, resulting in a user-friendly and efficient interface for managing network services.",
        'Designed cloud- native applications using a microservices architecture, both on-premises and in the cloud, enabling efficient and scalable deployment of applications.',
        'Managed the configuration and environment for workloads across public and private clouds, including AWS and VMware vSphere / NSX - V, ensuring high availability and optimal performance.',
      ],
    },
    {
      position: 'Electronics Technician',
      company: {
        name: 'Servicio Meteorológico Nacional Argentino',
        logo: smn,
      },
      location: 'Buenos Aires, Argentina',
      date: 'Feb. 2015 - Dec. 2015',
      responsibilities: [
        'Designed circuit boards used in a range of meteorological measurement devices, contributing to the accurate and reliable collection of weather data.',
        'Successfully installed over 20 meteorological weather stations across the entire country, ensuring comprehensive coverage of weather patterns and phenomena.',
      ],
    },
    {
      position: 'Teaching Assistant',
      company: {
        name: 'Instituto Social Militar Dr. Dámaso Centeno',
        logo: damaso,
      },
      location: 'Buenos Aires, Argentina',
      date: 'Mar. 2009 - Dec. 2009',
      responsibilities: [
        'Served as a teaching assistant for high school students, providing support in mathematics and physics subjects.',
      ],
    },
  ],
  volunteering: [
    {
      position: 'Contributor',
      organization: {
        name: 'PyTorch',
        logo: pytorch,
      },
      date: 'Jul. 2020 - Present',
      industry: 'Science and Technology',
    },
  ],
  skills: [
    {
      category: 'Autonomous Systems',
      badges: [
        'Mobile Robotics',
        'Kinematics',
        'Vehicle Dynamics',
        'Sensor Fusion',
        'SLAM',
        'Navigation',
        'ROS/ROS2',
        'NVIDIA Isaac Sim',
        'Unity',
        'PX4',
        'Mavlink',
      ],
    },
    {
      category: 'Artificial Intelligence',
      badges: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Reinforcement Learning',
      ],
    },
    {
      category: 'Mathematics',
      badges: [
        'Linear Algebra',
        'Calculus',
        'Linear Systems',
        'Nonlinear Systems',
        'Classic Control',
        'Modern Control',
        'Optimal Control',
      ],
    },
    {
      category: 'Programming Languages',
      badges: [
        'C/C++',
        'C#',
        'Python',
        'Java',
        'TypeScript',
        'Go',
        'MATLAB/Simulink',
      ],
    },
    {
      category: 'Libraries & Frameworks',
      badges: [
        'OpenCV',
        'PCL',
        'Eigen',
        'PyTorch',
        'Tensorflow',
        'Gstreamer',
        'React',
        'NextJS',
        'Astro',
      ],
    },
    {
      category: 'Software Engineering',
      badges: [
        'AWS',
        'Google Cloud Platform',
        'Azure',
        'Kubernetes',
        'Agile',
        'OOP',
        'Design Patterns',
        'Estimation',
        'Planning',
      ],
    },
    {
      category: 'Other Skills',
      badges: [
        'Teamwork',
        'Ownership',
        'Communication',
        'Leadership',
        'Self-motivated',
        'Public Speaking',
      ],
    },
  ],
  projects: [
    {
      title: 'Deep Learning Workshop',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Aug. 2021 - Aug. 2022',
      description:
        'Deep learning workshop for secondary school students at covering fundamental concepts and practical applications using PyTorch and Jupyter Notebooks.',
      tags: [
        'PyTorch',
        'Jupyter',
        'Python',
        'Computer Vision',
        'Hyperparameters',
      ],
      details: [
        'Designed and delivered a comprehensive deep‑learning workshop tailored for secondary school students. The workshop encompassed foundational concepts such as the Rosenblatt Perceptron, linear neural networks, multi‑layer linear neural networks utilizing the MNIST dataset, and Convolutional Neural Networks applied to the Kaggle Dataset named Flowers. The entire workshop was built upon Jupyter Notebooks, utilizing PyTorch as the preferred framework for deep learning.',
        'Students successfully learned the concepts and built their own deep‑learning models to classify images of flowers.',
        'Workshop was a great success and students were very enthusiastic about learning more about deep learning.',
      ],
    },
    {
      title: 'Self-driving Car',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Aug. 2021 - Aug. 2022',
      description:
        'Integration, calibration and testing of sensors, implementing advanced algorithms for essential aspects, and improving autonomous driving capabilities in a 2017 Ford Fusion.',
      tags: [
        'C++',
        'Python',
        'ROS/ROS2',
        'Sensor Fusion',
        'LiDAR',
        'Radar',
        'Cameras',
      ],
      details: [
        'Engaged in the integration of a 2017 Ford Fusion, with responsibilities spanning calibration and testing of a diverse range of sensors.',
        'Executed advanced algorithms dedicated to crucial aspects including localization, perception, control, and planning.',
        'Focused efforts on a 2017 Ford Fusion Hybrid featuring a computer‐controlled drive‐by‐wire system, allowing remote oversight of all vehicular operations.',
        "Orchestrated the incorporation of cutting‐edge sensors, encompassing LiDAR, cameras, radar, GPS, and a computer, profoundly augmenting the vehicle's autonomous driving proficiency.",
        'All of the code was written in C++ with a few modules in Python, and the car was compatible with ROS/ROS2.',
        "Played a pivotal part in elevating the vehicle's autonomy through meticulous environmental perception and comprehensive analysis capabilities.",
      ],
    },
    {
      title: 'Fault-tolerant Landing',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Aug. 2021 - Aug. 2022',
      description:
        'Algorithm for precise multirotor aircraft landings, addressing challenges like engine failure.',
      tags: ['C++', 'PX4', 'NVIDIA® Jetson', 'QGroundControl', 'Mavlink'],
      details: [
        'Led the conceptualization and creation of a sophisticated algorithm tailored for the precise landing of a multirotoraircraft, demonstrating an exceptional aptitude for problem‐solving and technical innovation.',
        'Designed and developed the algorithm to operate seamlessly even in scenarios involving engine failure, showcasing a keen understanding of critical flight dynamics and safety protocols.',
        'Constructed aerial vehicles from the ground up, employing a specially crafted controller board equipped with an onboard computer. Frequently, a Raspberry Pi was utilized for high‐level functions. Alternatively, the Pixhawk 4 controller board, integrated with the PX4 autopilot flight control software, was employed in certain instances.',
        "Employed iterative refinement and rigorous testing methodologies to ensure the algorithm's robustness and reliability, resulting in a resilient solution capable of navigating complex landing procedures with utmost precision.",
        'Collaborated closely with a multidisciplinary team, effectively communicating insights to ensure seamless integration of the algorithm into the broader project framework.',
        'Enhanced the overall safety and operational capabilities of the multirotor system.',
      ],
    },
    {
      title: 'Air Hockey',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Aug. 2021 - Aug. 2022',
      description:
        'Reinforcement Learning (RL) and heuristic algorithms achieving human-level gameplay skills in Air Hockey matches.',
      tags: [
        'Segmentation',
        'C/C++',
        'Python',
        'State Estimation',
        'Q-Learning',
      ],
      details: [
        'Contributed to a pioneering project at the University of San Andres involving the application of Reinforcement Learning (RL) algorithms to enhance performance in the game of Air Hockey.',
        'Developed and implemented a heuristic algorithm as a baseline for paddle control, which estimated puck position and velocity to inform real‐time gameplay decisions.',
        'Designed and constructed a comprehensive simulator to facilitate the training and evaluation of RL agents, enabling efficient testing of different strategies in a controlled environment.',
        'Investigated cutting‐edge neural network techniques, including the U‐Net architecture, for accurate segmentation of the puck from camera images positioned above the air hockey table.',
        'Explored and researched potential solutions to tackle challenges arising from variable lighting conditions and automatic white balance interference. Implemented neural network‐based vision systems to enhance puck tracking and state estimation, contributing to more resilient performance in the context of Air Hockey gameplay.',
        'Evaluated and benchmarked the performance of RL agents and neural network‐based segmentation against the heuristic algorithm baseline, utilizing metrics such as win rates and game scores for comprehensive analysis.',
      ],
    },
    {
      title: 'Balancio',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Aug. 2021 - Aug. 2022',
      description:
        'Educational project for an ultra‐low‐cost self‐balancing robot, capable of running a neural network to maintain balance.',
      tags: [
        'Arduino',
        'PyTorch',
        'Python',
        'Electronics',
        'MPC',
        'PID',
        'Deep Learning',
      ],
      details: [
        'Educational project for an ultra-low-cost self-balancing robot, capable of running a neural network to maintain balance and being controlled wirelessly. Developed for educational purposes to teach concepts of RL, ML, AI and control.',
        'Created using Arduino and PyBullet as the simulation environment to bridge the gap between simulation and reality (Sim2Real).',
      ],
    },
    {
      title: 'Monocular Visual SLAM',
      company: "Universidad de 'San Andrés'",
      location: 'Buenos Aires, Argentina',
      span: 'Feb. 2018 - Dec. 2018',
      description:
        'Visual navigation system for simultaneous mobile robot localization and mapping using EKF and 1‐Point RANSAC',
      tags: [
        'Kalman',
        'Pinhole Model',
        'C++17',
        'Feature Extraction',
        'RANSAC',
      ],
      details: [
        'Implemented a visual navigation system for simultaneous mobile robot localization and mapping using EKF and 1-Point RANSAC in C++17.',
      ],
    },
  ],
  languages: [
    {
      name: 'Spanish',
      proficiency: 'Native',
    },
    {
      name: 'English',
      proficiency: 'Full Professional Proficiency',
    },
  ],
  publications: [
    {
      type: 'Journal',
      title:
        'A. J. Gaona, P. D. Arini. ”Deep Recurrent Learning for Heart Sounds Segmentation based on Instantaneous Frequency Features”. Revista Elektron, Vol. 4, No. 2, pp 52‐57 (2020).',
    },
    {
      type: 'Conference',
      title:
        'A. J. Gaona, C. D. P, J. I. Giribet, R. Bunge. ”Prototyping of a multirotor UAV for precision landing under rotor failures”. Jornadas Argentinas de Robótica (JAR) XI (2022).',
    },
    {
      type: 'Conference',
      title:
        'J. I. Giribet, C. D. Pose, A. J. Gaona, R. Bunge, J. I. González Etchemaite. ”Fault Tolerant Solutions for Multirotor Unmanned Aerial Vehicles in NVIDIA® Jetson™ TX2”. NVIDIA GPU Technology Conference (2022).',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning Specialization',
      company: 'DeepLearning.AI',
      logo: dlai,
      issued: 'Dec. 2022',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/ML-Specialization.pdf',
    },
    {
      name: 'Deep Reinforcement Learning',
      company: 'Udacity',
      logo: udacity,
      issued: 'Jan. 2022',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/DRLN-Certificate.pdf',
    },
    {
      name: 'AWS Solutions Architect Associate',
      company: 'Amazon Web Services (AWS)',
      logo: aws,
      issued: 'Jul. 2020',
      url: 'https://www.youracclaim.com/badges/f436421c-4003-4414-ab0c-fb048eb6b76d?source=linked_in_profile',
    },
    {
      name: 'Robotics Software Engineer Nanodegree',
      company: 'Udacity',
      logo: udacity,
      issued: 'Jun. 2020',
      url: 'https://graduation.udacity.com/confirm/TJ7WMENN',
    },
    {
      name: 'Deep Learning Nanodegree',
      company: 'Udacity',
      logo: udacity,
      issued: 'May. 2020',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/DLND-Certificate.pdf',
    },
    {
      name: 'Sensor Fusion Nanodegree',
      company: 'Udacity',
      logo: udacity,
      issued: 'Feb. 2020',
      url: 'https://graduation.udacity.com/confirm/FRQGRNDP',
    },
    {
      name: 'C++ Nanodegree',
      company: 'Udacity',
      logo: udacity,
      issued: 'Jan. 2020',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/CppND-Certificate.pdf',
    },
  ],
};
