
export interface Session {
  id: string;
  title: string;
  content: string;
  duration: number; // in minutes
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  progress: number; // 0-100%
  sessions: Session[];
  tags: string[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Python Programming',
    description: 'Master Python from basics to advanced concepts with hands-on projects',
    thumbnail: '/api/placeholder/400/250',
    difficulty: 'Beginner',
    duration: '25 hours',
    rating: 4.8,
    progress: 0,
    tags: ['Programming', 'Backend', 'Data Science'],
    sessions: [
      {
        id: '1-1',
        title: 'Introduction à Python',
        content: 'Présentation de Python et installation de l\'environnement (Anaconda, VS Code, Jupyter Notebook), Variables et types de données (entiers, flottants, chaînes, booléens), Opérateurs arithmétiques, logiques et de comparaison, Structures de contrôle : conditions (if-else) et boucles (for, while).',
        duration: 120,
        completed: false
      },
      {
        id: '1-2',
        title: 'Fonctions et Manipulation des Données',
        content: 'Définition et utilisation des fonctions (def, return), Passage de paramètres et valeurs de retour, Manipulation des chaînes de caractères et opérations sur les listes, Lecture et écriture dans des fichiers.',
        duration: 120,
        completed: false
      },
      {
        id: '1-3',
        title: 'Structures de Données et Algorithmes Fondamentaux',
        content: 'Listes et dictionnaires : création, modification et parcours, Tri et recherche : tri à bulles, tri rapide, recherche linéaire et dichotomique, Complexité algorithmique et optimisation des boucles.',
        duration: 120,
        completed: false
      },
      {
        id: '1-4',
        title: 'Programmation Orientée Objet (POO)',
        content: 'Définition des classes et des objets, Constructeur (__init__) et méthodes spéciales, Héritage et polymorphisme, Gestion des exceptions avec try-except.',
        duration: 120,
        completed: false
      },
      {
        id: '1-5',
        title: 'Bases de données et APIs',
        content: 'Introduction aux bases de données avec SQLite, Interaction avec des APIs et requêtes HTTP.',
        duration: 120,
        completed: false
      }
    ]
  },
  {
    id: '2',
    title: 'Java Programming',
    description: 'Learn Java programming from fundamentals to enterprise applications',
    thumbnail: '/api/placeholder/400/250',
    difficulty: 'Intermediate',
    duration: '30 hours',
    rating: 4.7,
    progress: 0,
    tags: ['Programming', 'Enterprise', 'Backend'],
    sessions: [
      {
        id: '2-1',
        title: 'Introduction au langage Java',
        content: 'Syntaxe, variables, conditions, boucles. Installation d\'un IDE (Eclipse/IntelliJ). Opérateurs logiques et de comparaison, Structures de contrôle : conditions (if-else) et boucles (for, while).',
        duration: 120,
        completed: false
      },
      {
        id: '2-2',
        title: 'Programmation orientée objet (POO)',
        content: 'Concepts de classes, objets, constructeurs, getteurs, setteurs.',
        duration: 120,
        completed: false
      },
      {
        id: '2-3',
        title: 'Héritage et Encapsulation',
        content: 'Héritage, encapsulation, interface.',
        duration: 120,
        completed: false
      },
      {
        id: '2-4',
        title: 'Collections et Gestion des Exceptions',
        content: 'Collections et gestion des exceptions : ArrayList (Tri, recherche), HashMap, gestion des erreurs (try-catch).',
        duration: 120,
        completed: false
      },
      {
        id: '2-5',
        title: 'Bases de données et APIs',
        content: 'Introduction aux bases de données avec JDBC, Interaction avec des APIs et fichiers.',
        duration: 120,
        completed: false
      }
    ]
  },
  {
    id: '3',
    title: 'Base de données',
    description: 'Master database design, SQL queries, and database management systems',
    thumbnail: '/api/placeholder/400/250',
    difficulty: 'Intermediate',
    duration: '20 hours',
    rating: 4.6,
    progress: 0,
    tags: ['Database', 'SQL', 'Backend'],
    sessions: [
      {
        id: '3-1',
        title: 'Concepts de base et SQL',
        content: 'Modèle relationnel, introduction à SQL.',
        duration: 120,
        completed: false
      },
      {
        id: '3-2',
        title: 'Modélisation',
        content: 'Diagrammes E/A, normalisation.',
        duration: 120,
        completed: false
      },
      {
        id: '3-3',
        title: 'Requêtes SQL avancées',
        content: 'JOIN, GROUP BY, sous-requêtes.',
        duration: 120,
        completed: false
      },
      {
        id: '3-4',
        title: 'Transactions et sécurité',
        content: 'Gestion des transactions, introduction aux verrous.',
        duration: 120,
        completed: false
      },
      {
        id: '3-5',
        title: 'Connexion à une base via un langage',
        content: 'Connexion avec JDBC, PHP PDO.',
        duration: 120,
        completed: false
      }
    ]
  },
  {
    id: '4',
    title: 'Programmation Web',
    description: 'Build modern web applications with HTML, CSS, PHP, and JavaScript',
    thumbnail: '/api/placeholder/400/250',
    difficulty: 'Beginner',
    duration: '25 hours',
    rating: 4.5,
    progress: 0,
    tags: ['Web Development', 'Frontend', 'Backend'],
    sessions: [
      {
        id: '4-1',
        title: 'Bases d\'HTML et CSS',
        content: 'Structure d\'une page web, introduction à CSS.',
        duration: 120,
        completed: false
      },
      {
        id: '4-2',
        title: 'Introduction à PHP',
        content: 'Syntaxe de base, variables, boucles, fonctions.',
        duration: 120,
        completed: false
      },
      {
        id: '4-3',
        title: 'Interaction avec les bases de données',
        content: 'Connexion à une base, exécution de requêtes SQL.',
        duration: 120,
        completed: false
      },
      {
        id: '4-4',
        title: 'Sessions et cookies',
        content: 'Gestion des utilisateurs avec sessions et cookies.',
        duration: 120,
        completed: false
      },
      {
        id: '4-5',
        title: 'AJAX et interactivité',
        content: 'Création d\'interfaces interactives avec AJAX.',
        duration: 120,
        completed: false
      }
    ]
  },
  {
    id: '5',
    title: 'Programmation Mobile Android',
    description: 'Develop native Android applications from scratch to deployment',
    thumbnail: '/api/placeholder/400/250',
    difficulty: 'Intermediate',
    duration: '35 hours',
    rating: 4.7,
    progress: 0,
    tags: ['Mobile', 'Android', 'Java', 'Kotlin'],
    sessions: [
      {
        id: '5-1',
        title: 'Introduction à Android Studio',
        content: 'Installation, création d\'un premier projet, architecture d\'une application.',
        duration: 120,
        completed: false
      },
      {
        id: '5-2',
        title: 'Interfaces utilisateur',
        content: 'XML, vues, boutons, champs de texte.',
        duration: 120,
        completed: false
      },
      {
        id: '5-3',
        title: 'Navigation et fragments',
        content: 'Multi-écrans avec fragments et intents.',
        duration: 120,
        completed: false
      },
      {
        id: '5-4',
        title: 'Bases de données locales',
        content: 'SQLite, SharedPreferences.',
        duration: 120,
        completed: false
      },
      {
        id: '5-5',
        title: 'Fonctionnalités natives et déploiement',
        content: 'Localisation, caméra, génération d\'APK.',
        duration: 120,
        completed: false
      }
    ]
  },
  {
    id: '6',
    title: 'Framework PHP Laravel',
    description: 'Build robust web applications using the Laravel PHP framework',
    thumbnail: '/api/placeholder/400/250',
    difficulty: 'Advanced',
    duration: '40 hours',
    rating: 4.8,
    progress: 0,
    tags: ['PHP', 'Laravel', 'Backend', 'Framework'],
    sessions: [
      {
        id: '6-1',
        title: 'Introduction à Laravel',
        content: 'Installation, structure du projet.',
        duration: 120,
        completed: false
      },
      {
        id: '6-2',
        title: 'Routage et contrôleurs',
        content: 'Gestion des routes, création de contrôleurs.',
        duration: 120,
        completed: false
      },
      {
        id: '6-3',
        title: 'Modèles et bases de données',
        content: 'Migrations, ORM Eloquent.',
        duration: 120,
        completed: false
      },
      {
        id: '6-4',
        title: 'Formulaires et validation',
        content: 'Gestion des entrées utilisateur.',
        duration: 120,
        completed: false
      },
      {
        id: '6-5',
        title: 'API RESTful',
        content: 'Création d\'une API avec Laravel.',
        duration: 120,
        completed: false
      }
    ]
  },
  {
    id: '7',
    title: 'Programmation JavaScript',
    description: 'Master modern JavaScript, React, Node.js for full-stack development',
    thumbnail: '/api/placeholder/400/250',
    difficulty: 'Intermediate',
    duration: '45 hours',
    rating: 4.9,
    progress: 0,
    tags: ['JavaScript', 'React', 'Node.js', 'Full-stack'],
    sessions: [
      {
        id: '7-1',
        title: 'Bases de JavaScript moderne',
        content: 'Syntaxe ES6, manipulation du DOM.',
        duration: 120,
        completed: false
      },
      {
        id: '7-2',
        title: 'Framework front-end (React.js)',
        content: 'Installation, composants, props.',
        duration: 120,
        completed: false
      },
      {
        id: '7-3',
        title: 'Node.js et Express.js',
        content: 'Introduction à Node.js, création d\'un serveur.',
        duration: 120,
        completed: false
      },
      {
        id: '7-4',
        title: 'Base de données avec Node.js',
        content: 'Connexion à une base via Mongoose.',
        duration: 120,
        completed: false
      },
      {
        id: '7-5',
        title: 'Application complète',
        content: 'Développement d\'une application full-stack complète.',
        duration: 120,
        completed: false
      }
    ]
  },
  {
    id: '8',
    title: 'Programmation mobile JavaScript',
    description: 'Create cross-platform mobile apps with React Native and Ionic',
    thumbnail: '/api/placeholder/400/250',
    difficulty: 'Advanced',
    duration: '50 hours',
    rating: 4.6,
    progress: 0,
    tags: ['Mobile', 'React Native', 'Ionic', 'Cross-platform'],
    sessions: [
      {
        id: '8-1',
        title: 'Introduction à React Native/Ionic',
        content: 'Installation, création d\'un premier projet.',
        duration: 120,
        completed: false
      },
      {
        id: '8-2',
        title: 'Interfaces utilisateur',
        content: 'Composants de base, navigation.',
        duration: 120,
        completed: false
      },
      {
        id: '8-3',
        title: 'Gestion des données et API',
        content: 'Axios, connexion à une API REST.',
        duration: 120,
        completed: false
      },
      {
        id: '8-4',
        title: 'Fonctionnalités natives',
        content: 'Accès au GPS, caméra, stockage.',
        duration: 120,
        completed: false
      },
      {
        id: '8-5',
        title: 'Déploiement',
        content: 'Génération d\'APK/IPA, tests.',
        duration: 120,
        completed: false
      }
    ]
  }
];
