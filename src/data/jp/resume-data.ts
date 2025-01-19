import mobile from '@/assets/device-phone-mobile.svg';

import envelope from '@/assets/envelope.svg?raw';

export const data = {
  name: 'Alvaro Joaquín Gaona',
  location: {
    value: 'ブエノスアイレス、アルゼンチン',
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
        name: 'ウェブサイト',
        username: 'alvgaona.com',
        url: 'https://alvgaona.com',
      },
    ],
  },
  education: [
    {
      break: false,
      title: 'ブエノスアイレス大学',
      description: '電子工学修士号（学士号+修士号相当）',
      location: 'ブエノスアイレス、アルゼンチン',
      span: '2010年9月 - 2019年9月',
      bullets: [
        '「瞬時周波数特徴に基づく心音セグメンテーションのための深層回帰学習」、修士論文、2019年。ブエノスアイレス大学。成績10/10。',
        '平均成績: 3.5/4.0',
      ],
    },
  ],
  experience: [
    {
      break: false,
      position: 'リードソフトウェアエンジニア',
      company: {
        name: 'ASAPP',
      },
      location: 'ブエノスアイレス、アルゼンチン',
      date: '2022年8月 - 現在',
      responsibilities: [
        '会社全体のPCI/PIIデータ編集サービスをPython/Goで開発・主導。',
        'C++14でリアルタイム自動音声認識(ASR)サービスを開発・保守。',
        'Large Language Models (LLMs)を編集サービスに統合し、SLAを維持しながら精度を向上。',
        'NVIDIAのTriton Inference ServerをAWSアカウントとKubernetesクラスタ間で実装し、ML推論を最適化。',
        'Torch CompilerとTensorRT、ONNXバックエンドを使用してTriton経由でモデルをコンパイル・提供。',
        'MLサービスの信頼性と迅速な問題解決のための監視システムを設計・実装。',
      ],
    },
    {
      break: false,
      position: '教育助手',
      company: {
        name: 'サンアンドレス大学',
      },
      location: 'ブエノスアイレス、アルゼンチン',
      date: '2022年3月 - 2022年7月',
      responsibilities: [
        'AIエンジニアリングの学部生に「計算思考」の原則についてPythonを使用した実践的な応用に焦点を当てて講義。',
        '1年生の学習全般をサポートし、学部での学習目標達成を支援。',
      ],
    },
    {
      break: false,
      position: 'リサーチエンジニア',
      company: {
        name: 'サンアンドレス大学',
      },
      location: 'ブエノスアイレス、アルゼンチン',
      date: '2021年8月 - 2022年7月',
      responsibilities: [
        'UAV着陸プロジェクトを主導し、コンピュータビジョン技術を通じてプラットフォームへの安全で正確な着陸を可能にするアルゴリズムを開発。C++、ROS、Gazebo、OpenCVを使用して物体追跡、動き推定、制御アルゴリズムを実装。',
        '高校生向けにディープラーニングワークショップを設計・実施し、基礎概念を紹介し、この最先端分野への早期の関心を促進。',
        'アルゼンチンでの自動運転実現を目指す自動運転車プロジェクトに参加。',
      ],
    },
    {
      break: true,
      position: 'シニアソフトウェアエンジニア',
      company: {
        name: 'Roche',
      },
      location: 'ブエノスアイレス、アルゼンチン',
      date: '2019年2月 - 2022年7月',
      responsibilities: [
        'ビジネスへの影響を最小限に抑えながらOracleからPostgreSQLへのコアデータベース移行を主導',
        'Springフレームワークを使用してNGSパネル設計とがん解析のための耐障害性ソフトウェアを開発',
        'NGSパネルの材料推奨を最適化するために価格設定サービスを再設計',
        'がん解析の精度を向上させるバイオインフォマティクスパイプライン統合テスト用のクラウドベースツールを作成',
        'テストスイートの実行時間を日単位から分単位に短縮し、ソフトウェア開発の効率を改善',
        '様々なアプリケーションタイプに対する自動CI/CDパイプラインをJenkinsに実装',
        '技術採用プロセスに貢献し、熟練した専門家でチームを強化',
      ],
    },
    {
      break: false,
      position: 'ソフトウェアエンジニア',
      company: {
        name: 'Telecom Argentina',
      },
      location: 'ブエノスアイレス、アルゼンチン',
      date: '2015年12月 - 2019年2月',
      responsibilities: [
        '1000以上の顧客向けにバックボーンで様々なサービス（インターネット、L3VPN、L2VPN、VPLS）をプロビジョニングするSDNコントローラーの開発で重要な役割を果たす。',
        '内部使用向けにカスタムIPアドレスマネージャーアプリケーションを設計・開発し、エンジニアリングチームが顧客向けのパブリックおよびプライベートIPv4/IPv6アドレスを効果的に割り当てることを可能に。',
        'JavaScript ES6、React、Reduxを使用してSDNコントローラーのフロントエンドの設計と実装を主導し、ネットワークサービス管理のためのユーザーフレンドリーで効率的なインターフェースを実現。',
        'AWSとVMware vSphere / NSX-Vを含むパブリッククラウドとプライベートクラウド間のワークロードの構成と環境を管理し、高可用性と最適なパフォーマンスを確保。',
      ],
    },
    {
      break: false,
      position: '電子技術者',
      company: {
        name: 'アルゼンチン国立気象局',
      },
      location: 'ブエノスアイレス、アルゼンチン',
      date: '2015年2月 - 2015年12月',
      responsibilities: [
        '気象測定装置で使用される回路基板を設計し、正確で信頼性の高い気象データの収集に貢献。',
        '国全体で20以上の気象観測所を設置し、気象パターンと現象の包括的なカバレッジを確保。',
      ],
    },
    {
      break: false,
      position: '教育助手',
      company: {
        name: 'ダマソ・センテーノ軍事社会研究所',
      },
      location: 'ブエノスアイレス、アルゼンチン',
      date: '2009年3月 - 2009年12月',
      responsibilities: [
        '高校生の数学と物理の科目で教育助手を務めた。',
      ],
    },
  ],
  volunteering: [
    {
      position: 'コントリビューター',
      organization: {
        name: 'PyTorch',
      },
      date: '2020年7月 - 現在',
      industry: '科学技術',
    },
  ],
  skills: [
    {
      category: 'プログラミング言語',
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
      category: 'ソフトウェアエンジニアリング',
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
        'オブジェクト指向プログラミング',
        'デザインパターン',
        'アジャイル',
        '見積もり',
        '計画',
      ],
    },
    {
      category: 'ライブラリ＆ツール',
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
      break: true,
      category: '人工知能',
      badges: [
        '教師あり学習',
        '教師なし学習',
        '強化学習',
        '自然言語処理',
        'コンピュータビジョン',
        'ファインチューニング',
        '知識蒸留',
        'モデル評価',
      ],
    },
    {
      category: '自律システム',
      badges: [
        'モバイルロボティクス',
        'キネマティクス',
        '車両ダイナミクス',
        'センサーフュージョン',
        'SLAM',
        'ナビゲーション',
        'ROS/ROS2',
        'NVIDIA Isaac Sim',
        'Unity',
        'PX4',
        'Mavlink',
      ],
    },
    {
      category: '数学',
      badges: [
        '線形代数',
        '微積分',
        '線形システム',
        '非線形システム',
        '凸最適化',
        '数値計算',
        '信号処理',
        '古典制御',
        '現代制御',
        '最適制御',
      ],
    },
    {
      break: false,
      category: 'その他',
      badges: [
        'チームワーク',
        'オーナーシップ',
        'コミュニケーション',
        'リーダーシップ',
        '自己主導型',
        'パブリックスピーキング',
      ],
    },
  ],
  projects: [
    {
      title: 'ディープラーニングワークショップ',
      company: 'サンアンドレス大学',
      location: 'ブエノスアイレス、アルゼンチン',
      span: '2021年8月 - 2022年8月',
      description:
        'PyTorchとJupyter Notebooksを使用して基本概念と実践的応用をカバーする中学生向けディープラーニングワークショップ。',
      tags: [
        'PyTorch',
        'Jupyter',
        'Python',
        'Computer Vision',
        'Hyperparameters',
      ],
      details: [
        '中学生向けに包括的なディープラーニングワークショップを設計・実施。ワークショップはロゼンブラットパーセプトロン、線形ニューラルネットワーク、MNISTデータセットを使用した多層線形ニューラルネットワーク、Kaggleデータセット「Flowers」に適用された畳み込みニューラルネットワークなどの基本概念を網羅。全ワークショップはJupyter Notebooksで構築され、ディープラーニングのフレームワークとしてPyTorchを使用。',
        '生徒たちは概念を理解し、花の画像を分類する独自のディープラーニングモデルを構築することに成功。',
        'ワークショップは大成功を収め、生徒たちはディープラーニングについてさらに学ぶことに非常に熱心だった。',
      ],
    },
    {
      title: '自動運転車',
      company: 'サンアンドレス大学',
      location: 'ブエノスアイレス、アルゼンチン',
      span: '2021年8月 - 2022年8月',
      description:
        '2017年フォードフュージョンにおけるセンサーの統合、キャリブレーション、テスト、重要な側面のための高度なアルゴリズムの実装、自動運転能力の向上。',
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
        '2017年フォードフュージョンの統合に携わり、多様なセンサーのキャリブレーションとテストを担当。',
        '位置推定、認識、制御、計画を含む重要な側面に特化した高度なアルゴリズムを実行。',
        'コンピュータ制御のドライブバイワイヤシステムを備えた2017年フォードフュージョンハイブリッドに注力し、すべての車両操作のリモート監視を可能に。',
        'LiDAR、カメラ、レーダー、GPS、コンピュータを含む最先端のセンサーの組み込みを指揮し、車両の自動運転能力を大幅に向上。',
        'コードはすべてC++で書かれ、一部のモジュールはPythonで、車両はROS/ROS2と互換性があった。',
        '精密な環境認識と包括的な分析能力を通じて、車両の自律性向上に重要な役割を果たした。',
      ],
    },
    {
      break: true,
      title: '耐故障着陸',
      company: 'サンアンドレス大学',
      location: 'ブエノスアイレス、アルゼンチン',
      span: '2021年8月 - 2022年8月',
      description:
        'エンジン故障などの課題に対応する、マルチロータ航空機の精密着陸のためのアルゴリズム。',
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
        'マルチロータ航空機の精密着陸のための洗練されたアルゴリズムの概念化と作成を主導し、問題解決と技術革新における卓越した適性を実証。',
        'エンジン故障シナリオでもシームレスに動作するようアルゴリズムを設計・開発し、重要な飛行力学と安全性プロトコルへの鋭い理解を示す。',
        'オンボードコンピュータを搭載した特別に設計されたコントローラボードを使用して航空機を一から構築。高レベル機能には頻繁にRaspberry Piを使用。あるいは、PX4オートパイロット飛行制御ソフトウェアを統合したPixhawk 4コントローラボードを特定のケースで使用。',
        '反復的な改良と厳密なテスト方法を採用してアルゴリズムの堅牢性と信頼性を確保し、複雑な着陸手順を最高の精度でナビゲートできる耐久性のあるソリューションを実現。',
        '学際的なチームと緊密に協力し、洞察を効果的に伝達してアルゴリズムをより広範なプロジェクトフレームワークにシームレスに統合。',
        'マルチロータシステムの全体的な安全性と運用能力を向上。',
      ],
    },
    {
      break: true,
      title: 'エアホッケー',
      company: 'サンアンドレス大学',
      location: 'ブエノスアイレス、アルゼンチン',
      span: '2021年8月 - 2022年8月',
      description:
        'エアホッケーの試合で人間レベルのゲームプレイスキルを達成する強化学習（RL）とヒューリスティックアルゴリズム。',
      tags: [
        'Segmentation',
        'C/C++',
        'Python',
        'State Estimation',
        'Q-Learning',
      ],
      details: [
        'サンアンドレス大学でエアホッケーのパフォーマンスを向上させるための強化学習（RL）アルゴリズムの適用に関する先駆的なプロジェクトに貢献。',
        'パドル制御のベースラインとしてヒューリスティックアルゴリズムを開発・実装し、パックの位置と速度を推定してリアルタイムのゲームプレイ決定を支援。',
        'RLエージェントのトレーニングと評価を容易にする包括的なシミュレータを設計・構築し、制御環境での異なる戦略の効率的なテストを可能に。',
        'エアホッケーテーブル上部に設置されたカメラ画像からパックを正確にセグメント化するためのU-Netアーキテクチャを含む最先端のニューラルネットワーク技術を研究。',
        '可変照明条件と自動ホワイトバランス干渉から生じる課題に対する潜在的な解決策を探求・研究。ニューラルネットワークベースのビジョンシステムを実装してパック追跡と状態推定を強化し、エアホッケーゲームプレイのコンテキストでより耐久性のあるパフォーマンスに貢献。',
        'RLエージェントとニューラルネットワークベースのセグメンテーションのパフォーマンスをヒューリスティックアルゴリズムベースラインと評価・ベンチマークし、勝率やゲームスコアなどの指標を使用して包括的な分析を実施。',
      ],
    },
    {
      break: false,
      title: 'バランシオ',
      company: 'サンアンドレス大学',
      location: 'ブエノスアイレス、アルゼンチン',
      span: '2021年8月 - 2022年8月',
      description:
        'ニューラルネットワークを実行してバランスを維持できる超低コストの自己平衡ロボットのための教育プロジェクト。',
      tags: [
        'Arduino',
        'PyTorch',
        'Python',
        'Electronics',
        'PID',
        'Deep Learning',
      ],
      details: [
        'バランスを維持するためのニューラルネットワークを実行し、ワイヤレスで制御できる超低コストの自己平衡ロボットのための教育プロジェクト。RL、ML、AI、制御の概念を教えるために開発。',
        'ArduinoとPyBulletをシミュレーション環境として使用して作成し、シミュレーションと現実（Sim2Real）のギャップを埋める。',
      ],
    },
    {
      break: false,
      title: '単眼視覚SLAM',
      company: 'サンアンドレス大学',
      location: 'ブエノスアイレス、アルゼンチン',
      span: '2018年2月 - 2018年12月',
      description:
        'EKFと1-Point RANSACを使用した移動ロボットの同時位置推定とマッピングのための視覚ナビゲーションシステム',
      tags: [
        'Kalman',
        'Pinhole Model',
        'C++17',
        'Feature Extraction',
        'RANSAC',
      ],
      details: [
        'C++17でEKFと1-Point RANSACを使用した移動ロボットの同時位置推定とマッピングのための視覚ナビゲーションシステムを実装。',
      ],
    },
  ],
  languages: [
    {
      name: 'スペイン語',
      proficiency: 'ネイティブ',
    },
    {
      name: '英語',
      proficiency: '専門的業務遂行レベル（C2レベル）',
    },
  ],
  publications: [
    {
      type: 'ジャーナル',
      title:
        'A. J. Gaona, P. D. Arini. "Deep Recurrent Learning for Heart Sounds Segmentation based on Instantaneous Frequency Features". Revista Elektron, Vol. 4, No. 2, pp 52‐57 (2020).',
    },
    {
      type: '会議',
      title:
        'A. J. Gaona, C. D. P, J. I. Giribet, R. Bunge. "Prototyping of a multirotor UAV for precision landing under rotor failures". Jornadas Argentinas de Robótica (JAR) XI (2022).',
    },
    {
      type: '会議',
      title:
        'J. I. Giribet, C. D. Pose, A. J. Gaona, R. Bunge, J. I. González Etchemaite. "Fault Tolerant Solutions for Multirotor Unmanned Aerial Vehicles in NVIDIA® Jetson™ TX2". NVIDIA GPU Technology Conference (2022).',
    },
  ],
  certifications: [
    {
      name: '自律移動ロボット',
      company: 'ETHx',
      issued: '2024年4月',
      url: 'https://courses.edx.org/certificates/78efdad8566d44f19247b6b4d9a9ca87',
    },
    {
      name: '機械学習スペシャライゼーション',
      company: 'DeepLearning.AI',
      issued: '2022年12月',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/ML-Specialization.pdf',
    },
    {
      name: '深層強化学習',
      company: 'Udacity',
      issued: '2022年1月',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/DRLN-Certificate.pdf',
    },
    {
      name: 'AWSソリューションアーキテクトアソシエイト',
      company: 'Amazon Web Services (AWS)',
      issued: '2020年7月',
      url: 'https://www.youracclaim.com/badges/f436421c-4003-4414-ab0c-fb048eb6b76d?source=linked_in_profile',
    },
    {
      name: 'ロボティクスソフトウェアエンジニア',
      company: 'Udacity',
      issued: '2020年6月',
      url: 'https://graduation.udacity.com/confirm/TJ7WMENN',
    },
    {
      name: 'ディープラーニング',
      company: 'Udacity',
      issued: '2020年5月',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/DLND-Certificate.pdf',
    },
    {
      name: 'センサーフュージョン',
      company: 'Udacity',
      issued: '2020年2月',
      url: 'https://graduation.udacity.com/confirm/FRQGRNDP',
    },
    {
      name: 'C++',
      company: 'Udacity',
      issued: '2020年1月',
      url: 'https://pub-f074cead5eaf408790b463b05f6e8b32.r2.dev/CppND-Certificate.pdf',
    },
  ],
};
