import mobile from '@/assets/device-phone-mobile.svg';
import pin from '@/assets/map-pin.svg';

import envelope from '@/assets/envelope.svg?raw';

import asapp from '@/assets/asappinc-logo.jpeg';
import damaso from '@/assets/damaso.png';
import pytorch from '@/assets/pytorch-logo.jpeg';
import roche from '@/assets/roche-logo.jpeg';
import smn from '@/assets/smn-logo.jpeg';
import telecom from '@/assets/telecom-argentina-logo.jpeg';
import udesa from '@/assets/udesa-logo.jpeg';

export const data = {
  name: 'Alvaro Joaquín Gaona',
  location: {
    value: '부에노스 아이레스, 아르헨티나',
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
        name: '웹사이트',
        username: 'alvgaona.com',
        url: 'https://alvgaona.com',
      },
    ],
  },
  education: [
    {
      break: false,
      title: '부에노스 아이레스 대학교',
      description:
        '전자공학 졸업 (학사 + 석사 과정 동등)',
      location: '부에노스 아이레스, 아르헨티나',
      span: '2010년 9월 - 2019년 9월',
      bullets: [
        '"Deep Recurrent Learning for Heart Sounds Segmentation based on Instantaneous Frequency Features", 석사 학위 논문, 2019. 부에노스 아이레스 대학교. 점수 10/10.',
        '평균: 3.5/4.0',
      ],
    },
  ],
  experience: [
    {
      break: false,
      position: 'Lead Software Engineer',
      company: {
        name: 'ASAPP',
        logo: asapp,
      },
      location: '부에노스 아이레스, 아르헨티나',
      date: '2022년 8월 - 현재',
      responsibilities: [
        'Python/Go로 개발된 전사적 PCI/PII 데이터 난독화 중요 서비스를 주도했습니다.',
        'C++14로 실시간 Automatic Speech Recognition (ASR) 서비스를 설계하고 유지보수했습니다.',
        'SLA를 준수하면서 정확도를 향상시키기 위해 데이터 난독화 서비스에 Large Language Models (LLMs)를 통합했습니다.',
        '최적화된 ML 추론을 위해 AWS 계정과 Kubernetes 클러스터를 통해 NVIDIA Triton 추론 서버를 구현했습니다.',
        'Triton을 통해 TensorRT와 ONNX 백엔드로 Torch Compiler를 사용하여 모델을 컴파일하고 제공했습니다.',
        '신뢰성과 신속한 문제 해결을 보장하기 위해 ML 서비스용 모니터링 시스템을 설계하고 구현했습니다.',
      ],
    },
    {
      break: false,
      position: '조교',
      company: {
        name: "산안드레스 대학교",
        logo: udesa,
      },
      location: '부에노스 아이레스, 아르헨티나',
      date: '2022년 3월 - 2022년 7월',
      responsibilities: [
        'AI 엔지니어링 학부생들에게 Python을 사용한 실제 응용에 중점을 둔 "컴퓨팅 사고" 원리를 가르쳤습니다.',
        '1학년 학생들이 대학 생활을 잘 해나가고 학업 목표를 달성할 수 있도록 종합적인 지원을 제공했습니다.',
      ],
    },
    {
      break: false,
      position: '연구 엔지니어',
      company: {
        name: "산안드레스 대학교",
        logo: udesa,
      },
      location: '부에노스 아이레스, 아르헨티나',
      date: '2021년 8월 - 2022년 7월',
      responsibilities: [
        'UAV 착륙 프로젝트를 주도하고 컴퓨터 비전 기술을 통해 플랫폼에 안전하고 정확한 착륙을 가능하게 하는 알고리즘을 개발했습니다. C++, ROS, Gazebo 및 OpenCV를 사용하여 객체 추적, 움직임 추정 및 자율 착륙을 위한 제어 알고리즘을 구현했습니다.',
        '아르헨티나에서 자율 주행을 달성하는 것을 목표로 한 자율 차량 프로젝트에 참여했습니다.',
      ],
    },
    {
      break: true,
      position: 'Senior Software Engineer',
      company: {
        name: 'Roche',
        logo: roche,
      },
      location: '부에노스 아이레스, 아르헨티나',
      date: '2019년 2월 - 2022년 7월',
      responsibilities: [
        '최소한의 비즈니스 중단으로 Oracle에서 PostgreSQL로 주 데이터베이스 마이그레이션을 주도했습니다.',
        'Spring 프레임워크를 사용하여 Next Generation Sequencing (NGS) 패널 설계 및 암 분석을 위한 장애 허용 소프트웨어를 개발했습니다.',
        'NGS 패널용 자재 추천을 최적화하기 위해 가격 서비스를 재설계했습니다.',
        '클라우드 기반 도구를 만들어 생물정보학 파이프라인 통합을 테스트하고 암 분석의 정확도를 향상시켰습니다.',
        '테스트 스위트 실행 시간을 며칠에서 몇 분으로 단축하여 소프트웨어 개발 효율성을 향상시켰습니다.',
        '다양한 유형의 애플리케이션을 위한 Jenkins의 자동화된 CI/CD 파이프라인을 구현했습니다.',
        '기술 채용 프로세스에 기여하여 자격을 갖춘 전문가들로 팀을 강화했습니다.',
      ],
    },
    {
      break: false,
      position: 'Software Engineer',
      company: {
        name: 'Telecom Argentina',
        logo: telecom,
      },
      location: '부에노스 아이레스, 아르헨티나',
      date: '2015년 12월 - 2019년 2월',
      responsibilities: [
        '1000개 이상의 고객을 위한 백본에서 여러 서비스(인터넷, L3VPN, L2VPN, VPLS)를 프로비저닝하는 SDN 컨트롤러 개발에 핵심적인 역할을 했습니다.',
        '엔지니어링 팀이 고객을 위한 공용 및 사설 IPv4/IPv6 주소를 효과적으로 할당할 수 있도록 하는 내부용 맞춤형 IP 주소 관리 애플리케이션을 설계하고 개발했습니다.',
        'JavaScript ES6, React 및 Redux를 사용하여 네트워크 서비스를 관리하기 위한 사용자 친화적이고 효율적인 인터페이스를 제공하는 SDN 컨트롤러의 프론트엔드 설계 및 구현을 주도했습니다.',
        'AWS 및 VMware vSphere / NSX-V를 포함한 공용 및 사설 클라우드에서 워크로드 구성 및 환경을 관리하여 고가용성과 최적의 성능을 보장했습니다.',
      ],
    },
    {
      break: false,
      position: '전자기술자',
      company: {
        name: '아르헨티나 국립기상청',
        logo: smn,
      },
      location: '부에노스 아이레스, 아르헨티나',
      date: '2015년 2월 - 2015년 12월',
      responsibilities: [
        '다양한 기상 측정 장치에 사용되는 회로 기판을 설계하여 정확하고 신뢰할 수 있는 기상 데이터 수집에 기여했습니다.',
        '전국에 20개 이상의 기상 관측소를 성공적으로 설치하여 기상 패턴과 현상에 대한 포괄적인 커버리지를 보장했습니다.',
      ],
    },
    {
      break: false,
      position: '조교',
      company: {
        name: 'Dr. Dámaso Centeno 군사사회연구소',
        logo: damaso,
      },
      location: '부에노스 아이레스, 아르헨티나',
      date: '2009년 3월 - 2009년 12월',
      responsibilities: [
        '고등학교 학생들을 위한 수학 및 물리 과목의 조교로 근무했습니다.',
      ],
    },
  ],
  volunteering: [
    {
      position: '기여자',
      organization: {
        name: 'PyTorch',
        logo: pytorch,
      },
      date: '2020년 7월 - 현재',
      industry: '과학 기술',
    },
  ],
  skills: [
    {
      category: '프로그래밍 언어',
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
      category: '소프트웨어 공학',
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
        'OOP',
        'Design Patterns',
        'Agile',
        'Estimation',
        'Planning',
      ],
    },
    {
      break: true,
      category: '라이브러리 및 도구',
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
      category: '인공지능',
      badges: [
        '지도 학습',
        '비지도 학습',
        '강화 학습',
        'NLP',
        '컴퓨터 비전',
        'Fine-tuning',
        'Knowledge Distillation',
        'Model Evaluation',
      ],
    },
    {
      category: '자율 시스템',
      badges: [
        '이동 로봇공학',
        '운동학',
        '차량 동역학',
        '센서 융합',
        'SLAM',
        '내비게이션',
        'ROS/ROS2',
        'NVIDIA Isaac Sim',
        'Unity',
        'PX4',
        'Mavlink',
      ],
    },
    {
      category: '수학',
      badges: [
        '선형대수학',
        '미적분학',
        '선형 시스템',
        '비선형 시스템',
        '볼록 최적화',
        '수치해석',
        '신호처리',
        '고전 제어',
        '현대 제어',
        '최적 제어',
      ],
    },
    {
      break: false,
      category: '기타',
      badges: [
        '팀워크',
        '책임감',
        '의사소통',
        '리더십',
        '자기주도성',
        '대중 연설',
      ],
    },
  ],
  projects: [
    {
      title: '딥러닝 워크샵',
      company: "산안드레스 대학교",
      location: '부에노스 아이레스, 아르헨티나',
      span: '2021년 8월 - 2022년 8월',
      description:
        'PyTorch와 Jupyter Notebooks를 사용하여 기본 개념과 실제 응용을 다루는 고등학생을 위한 딥러닝 워크샵.',
      tags: [
        'PyTorch',
        'Jupyter',
        'Python',
        '컴퓨터 비전',
        '하이퍼파라미터',
      ],
      details: [
        '고등학생을 위해 맞춤화된 포괄적인 딥러닝 워크샵을 설계하고 진행했습니다. 워크샵은 Rosenblatt Perceptron, 선형 신경망, MNIST 데이터셋을 사용한 다층 선형 신경망, Kaggle Flowers 데이터셋에 적용된 Convolutional Neural Networks와 같은 기본 개념을 다루었습니다. 전체 워크샵은 딥러닝을 위한 선호 프레임워크로 PyTorch를 사용하여 Jupyter Notebooks 위에 구축되었습니다.',
        '학생들은 성공적으로 개념을 학습하고 꽃 이미지를 분류하기 위한 자신만의 딥러닝 모델을 구축했습니다.',
        '워크샵은 큰 성공을 거두었고 학생들은 딥러닝에 대해 더 배우고 싶어 매우 열정적이었습니다.',
      ],
    },
    {
      title: '자율 주행 차량',
      company: "산안드레스 대학교",
      location: '부에노스 아이레스, 아르헨티나',
      span: '2021년 8월 - 2022년 8월',
      description:
        '센서 통합, 보정 및 테스트, 핵심 측면을 위한 고급 알고리즘 구현, 2017 Ford Fusion의 자율 주행 능력 향상.',
      tags: [
        'C++',
        'Python',
        'ROS/ROS2',
        '센서 융합',
        'LiDAR',
        'Radar',
        '카메라',
      ],
      details: [
        '2017 Ford Fusion의 통합에 참여하여 다양한 센서의 보정 및 테스트를 포함한 책임을 맡았습니다.',
        '위치 추정, 인식, 제어 및 계획을 포함한 중요한 측면에 전용된 고급 알고리즘을 실행했습니다.',
        '컴퓨터 제어 드라이브 바이 와이어 시스템이 장착된 2017 Ford Fusion Hybrid에 중점을 두어 모든 차량 작동의 원격 감독을 가능하게 했습니다.',
        'LiDAR, 카메라, 레이더, GPS 및 컴퓨터를 포함한 최첨단 센서의 통합을 조율하여 차량의 자율 주행 능력을 크게 향상시켰습니다.',
        '모든 코드는 C++로 작성되었으며 일부 모듈은 Python으로 작성되었고 차량은 ROS/ROS2와 호환되었습니다.',
        '세밀한 환경 인식과 포괄적인 분석 능력을 통해 차량의 자율성을 높이는 데 중요한 역할을 했습니다.',
      ],
    },
    {
      title: '장애 허용 착륙',
      company: "산안드레스 대학교",
      location: '부에노스 아이레스, 아르헨티나',
      span: '2021년 8월 - 2022년 8월',
      description:
        '모터 고장과 같은 도전과제를 해결하는 멀티로터 항공기의 정밀 착륙을 위한 알고리즘.',
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
        '멀티로터 항공기의 정밀 착륙을 위해 맞춤화된 정교한 알고리즘의 개념화와 생성을 주도하여 문제 해결과 기술 혁신에 대한 탁월한 적성을 보여주었습니다.',
        '모터 고장이 포함된 시나리오에서도 원활하게 작동하도록 알고리즘을 설계하고 개발하여 중요한 비행 역학과 안전 프로토콜에 대한 예리한 이해를 보여주었습니다.',
        '온보드 컴퓨터가 장착된 특별히 설계된 제어기 보드를 사용하여 항공기를 처음부터 구축했습니다. 고급 기능을 위해 Raspberry Pi가 자주 사용되었습니다. 또는 PX4 비행 제어 소프트웨어와 통합된 Pixhawk 4 제어기 보드가 일부 경우에 사용되었습니다.',
        '반복적인 개선과 엄격한 테스트 방법론을 사용하여 알고리즘의 견고성과 신뢰성을 보장하여 복잡한 착륙 절차를 최대한의 정확도로 탐색할 수 있는 탄력적인 솔루션을 만들었습니다.',
        '다학제간 팀과 긴밀히 협력하여 아이디어를 효과적으로 전달함으로써 프로젝트의 더 넓은 프레임워크 내에서 알고리즘의 원활한 통합을 보장했습니다.',
        '멀티로터 시스템의 전반적인 안전성과 운영 능력을 향상시켰습니다.',
      ],
    },
    {
      title: 'Air Hockey',
      company: "산안드레스 대학교",
      location: '부에노스 아이레스, 아르헨티나',
      span: '2021년 8월 - 2022년 8월',
      description:
        'Air Hockey 게임에서 인간 수준의 게임 기술을 달성하는 강화 학습(RL) 및 휴리스틱 알고리즘.',
      tags: [
        '세그멘테이션',
        'C/C++',
        'Python',
        '상태 추정',
        'Q-Learning',
      ],
      details: [
        '산안드레스 대학교에서 Air Hockey 게임의 성능을 향상시키기 위한 강화 학습(RL) 알고리즘의 적용을 포함하는 혁신적인 프로젝트에 기여했습니다.',
        '패들 제어를 위한 기초로 디스크의 위치와 속도를 추정하여 실시간 게임 결정을 알리는 휴리스틱 알고리즘을 개발하고 구현했습니다.',
        'RL 에이전트의 훈련과 평가를 용이하게 하기 위한 포괄적인 시뮬레이터를 설계하고 구축하여 통제된 환경에서 다양한 전략을 효율적으로 테스트할 수 있게 했습니다.',
        'Air Hockey 테이블 위에 위치한 카메라 이미지에서 정확한 디스크 세그멘테이션을 위해 U-Net 아키텍처를 포함한 최첨단 신경망 기술을 연구했습니다.',
        '가변적인 조명 조건과 자동 화이트 밸런스 간섭으로 인한 문제를 해결하기 위한 잠재적 해결책을 탐구하고 연구했습니다. 디스크 추적과 상태 추정을 향상시키기 위해 신경망 기반 비전 시스템을 구현하여 Air Hockey 게임 맥락에서 더 탄력적인 성능에 기여했습니다.',
        '승률과 게임 점수와 같은 메트릭을 사용하여 포괄적인 분석을 위해 RL 에이전트와 신경망 기반 세그멘테이션의 성능을 휴리스틱 알고리즘 기준선과 비교하고 평가했습니다.',
      ],
    },
    {
      break: false,
      title: 'Balancio',
      company: "산안드레스 대학교",
      location: '부에노스 아이레스, 아르헨티나',
      span: '2021년 8월 - 2022년 8월',
      description:
        '균형을 유지하기 위해 신경망을 실행할 수 있는 초저가 자체 균형 로봇을 위한 교육용 프로젝트.',
      tags: [
        'Arduino',
        'PyTorch',
        'Python',
        '전자공학',
        'PID',
        '딥러닝',
      ],
      details: [
        '균형을 유지하기 위해 신경망을 실행하고 무선으로 제어할 수 있는 초저가 자체 균형 로봇을 위한 교육용 프로젝트입니다. RL, ML, AI 및 제어 개념을 가르치기 위한 교육 목적으로 개발되었습니다.',
        'Arduino와 시뮬레이션과 현실 사이의 격차를 줄이기 위한 시뮬레이션 환경으로 PyBullet을 사용하여 제작되었습니다(Sim2Real).',
      ],
    },
    {
      break: false,
      title: 'Monocular SLAM',
      company: "산안드레스 대학교",
      location: '부에노스 아이레스, 아르헨티나',
      span: '2018년 2월 - 2018년 12월',
      description:
        'EKF와 1-Point RANSAC을 사용한 이동 로봇의 동시 위치 추정 및 지도 작성을 위한 시각적 내비게이션 시스템',
      tags: [
        'Kalman',
        'Pinhole Model',
        'C++17',
        'Feature Extraction',
        'RANSAC',
      ],
      details: [
        'C++17로 EKF와 1-Point RANSAC을 사용한 이동 로봇의 동시 위치 추정 및 지도 작성을 위한 시각적 내비게이션 시스템을 구현했습니다.',
      ],
    },
  ],
  languages: [
    {
      name: '스페인어',
      proficiency: '모국어',
    },
    {
      name: '영어',
      proficiency: '전문가 수준 (C2)',
    },
  ],
  publications: [
    {
      type: '저널',
      title:
        'A. J. Gaona, P. D. Arini. "Deep Recurrent Learning for Heart Sounds Segmentation based on Instantaneous Frequency Features". Revista Elektron, Vol. 4, No. 2, pp 52‐57 (2020).',
    },
    {
      type: '컨퍼런스',
      title:
        'A. J. Gaona, C. D. P, J. I. Giribet, R. Bunge. "Prototyping of a multirotor UAV for precision landing under rotor failures". Jornadas Argentinas de Robótica (JAR) XI (2022).',
    },
    {
      type: '컨퍼런스',
      title:
        'J. I. Giribet, C. D. Pose, A. J. Gaona, R. Bunge, J. I. González Etchemaite. "Fault Tolerant Solutions for Multirotor Unmanned Aerial Vehicles in NVIDIA® Jetson™ TX2". NVIDIA GPU Technology Conference (2022).',
    },
  ],
  certifications: [
    {
      name: 'Autonomous Mobile Robots',
      company: 'ETHx',
      issued: '2024년 4월',
      url: 'https://courses.edx.org/certificates/78efdad8566d44f19247b6b4d9a9ca87',
    },
    {
      name: 'Machine Learning Specialization',
      company: 'DeepLearning.AI',
      issued: '2022년 12월',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/ML-Specialization.pdf',
    },
    {
      name: 'Deep Reinforcement Learning',
      company: 'Udacity',
      issued: '2022년 1월',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/DRLN-Certificate.pdf',
    },
    {
      name: 'AWS Solutions Architect Associate',
      company: 'Amazon Web Services (AWS)',
      issued: '2020년 7월',
      url: 'https://www.youracclaim.com/badges/f436421c-4003-4414-ab0c-fb048eb6b76d?source=linked_in_profile',
    },
    {
      name: 'Robotics Software Engineer Nanodegree',
      company: 'Udacity',
      issued: '2020년 6월',
      url: 'https://graduation.udacity.com/confirm/TJ7WMENN',
    },
    {
      name: 'Deep Learning Nanodegree',
      company: 'Udacity',
      issued: '2020년 5월',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/DLND-Certificate.pdf',
    },
    {
      name: 'Sensor Fusion Nanodegree',
      company: 'Udacity',
      issued: '2020년 2월',
      url: 'https://graduation.udacity.com/confirm/FRQGRNDP',
    },
    {
      name: 'C++ Nanodegree',
      company: 'Udacity',
      issued: '2020년 1월',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/CppND-Certificate.pdf',
    },
  ],
};
