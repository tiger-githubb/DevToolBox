import type tool from "@/interfaces/toolsData.interface"

const tools: tool[] = [
    {
        "name": "Visual Studio Code",
        "description": "Éditeur de code source open source avec prise en charge de plusieurs langages et extensions.",
        "link": "https://code.visualstudio.com/",
        "category": "Web Development",
        "tags": ["éditeur de code", "open source", "JavaScript"],
        "add_date": "2023-11-07",
        "contributor": "Tiger-githubb"
    },
    {
        "name": "Sublime Text",
        "description": "Éditeur de texte sophistiqué pour le code, le marquage et le prose.",
        "link": "https://www.sublimetext.com/",
        "category": "Web Development",
        "tags": ["éditeur de code", "sophistiqué", "HTML", "CSS"],
        "add_date": "2023-11-15",
        "contributor": "Coder123"
    },
    {
        "name": "Jupyter Notebook",
        "description": "Application web open-source pour la création et le partage de documents qui contiennent du code en direct, des équations, des visualisations et du texte narratif.",
        "link": "https://jupyter.org/",
        "category": "Data Analysis",
        "tags": ["data science", "open source", "Python"],
        "add_date": "2023-11-10",
        "contributor": "DataScientistX"
    },
    {
        "name": "RStudio",
        "description": "Environnement de développement intégré (IDE) pour le langage de programmation R.",
        "link": "https://rstudio.com/",
        "category": "Data Analysis",
        "tags": ["data science", "R programming", "IDE"],
        "add_date": "2023-11-12",
        "contributor": "StatsMaster"
    },
    {
        "name": "Magento",
        "description": "Plateforme open source de commerce électronique.",
        "link": "https://magento.com/",
        "category": "E-commerce",
        "tags": ["commerce électronique", "open source", "boutique en ligne"],
        "add_date": "2023-11-18",
        "contributor": "EcommPro"
    },
    {
        "name": "Shopify",
        "description": "Plateforme de commerce électronique tout-en-un pour créer une boutique en ligne.",
        "link": "https://www.shopify.com/",
        "category": "E-commerce",
        "tags": ["commerce électronique", "boutique en ligne", "plateforme tout-en-un"],
        "add_date": "2023-11-20",
        "contributor": "ShopifyFan"
    },

    {
        "name": "Git",
        "description": "Système de gestion de version distribué gratuit et open source.",
        "link": "https://git-scm.com/",
        "category": "Version Control",
        "tags": ["gestion de version", "open source", "collaboration"],
        "add_date": "2023-11-22",
        "contributor": "GitMaster"
    },
    {
        "name": "SVN (Apache Subversion)",
        "description": "Système de gestion de version centralisé.",
        "link": "https://subversion.apache.org/",
        "category": "Version Control",
        "tags": ["gestion de version", "centralisé", "historique"],
        "add_date": "2023-11-25",
        "contributor": "SVNGuru"
    },
    {
        "name": "MongoDB",
        "description": "Base de données NoSQL orientée documents.",
        "link": "https://www.mongodb.com/",
        "category": "Database",
        "tags": ["base de données", "NoSQL", "documents"],
        "add_date": "2023-11-28",
        "contributor": "MongoDBFan"
    },
    {
        "name": "MySQL",
        "description": "Système de gestion de base de données relationnelle open source.",
        "link": "https://www.mysql.com/",
        "category": "Database",
        "tags": ["base de données", "relationnelle", "SQL"],
        "add_date": "2023-12-01",
        "contributor": "SQLMaster"
    },
    {
        "name": "React",
        "description": "Bibliothèque JavaScript open source pour la construction d'interfaces utilisateur.",
        "link": "https://reactjs.org/",
        "category": "Frontend Frameworks",
        "tags": ["JavaScript", "bibliothèque", "interface utilisateur"],
        "add_date": "2023-12-04",
        "contributor": "ReactDev"
    },
    {
        "name": "Angular",
        "description": "Plateforme et framework d'application web open source.",
        "link": "https://angular.io/",
        "category": "Frontend Frameworks",
        "tags": ["JavaScript", "framework", "application web"],
        "add_date": "2023-12-07",
        "contributor": "AngularNinja"
    },
    {
        "name": "Node.js",
        "description": "Environnement d'exécution JavaScript côté serveur.",
        "link": "https://nodejs.org/",
        "category": "Backend Frameworks",
        "tags": ["JavaScript", "côté serveur", "runtime"],
        "add_date": "2023-12-10",
        "contributor": "NodeMaster"
    },
    {
        "name": "Django",
        "description": "Framework web Python pour le développement rapide.",
        "link": "https://www.djangoproject.com/",
        "category": "Backend Frameworks",
        "tags": ["Python", "framework web", "développement rapide"],
        "add_date": "2023-12-13",
        "contributor": "DjangoDev"
    },
    {
        "name": "Amazon Web Services (AWS)",
        "description": "Plateforme de services cloud proposée par Amazon.",
        "link": "https://aws.amazon.com/",
        "category": "Cloud Services",
        "tags": ["cloud", "services", "Amazon"],
        "add_date": "2023-12-16",
        "contributor": "AWSExpert"
    },
    {
        "name": "Microsoft Azure",
        "description": "Plateforme cloud de Microsoft pour le déploiement et la gestion d'applications.",
        "link": "https://azure.microsoft.com/",
        "category": "Cloud Services",
        "tags": ["cloud", "Microsoft", "déploiement"],
        "add_date": "2023-12-19",
        "contributor": "AzurePro"
    },
    {
        "name": "React Native",
        "description": "Framework pour construire des applications mobiles avec React.",
        "link": "https://reactnative.dev/",
        "category": "Mobile App Development",
        "tags": ["React", "applications mobiles", "framework"],
        "add_date": "2023-12-22",
        "contributor": "ReactNativeDev"
    },
    {
        "name": "Flutter",
        "description": "UI toolkit open source pour la création d'applications natives compilées.",
        "link": "https://flutter.dev/",
        "category": "Mobile App Development",
        "tags": ["applications mobiles", "UI toolkit", "open source"],
        "add_date": "2023-12-25",
        "contributor": "FlutterFan"
    },
    {
        "name": "Jenkins",
        "description": "Outil open source d'automatisation de construction, de déploiement et d'intégration continue.",
        "link": "https://www.jenkins.io/",
        "category": "DevOps",
        "tags": ["automatisation", "construction", "intégration continue"],
        "add_date": "2023-12-28",
        "contributor": "JenkinsMaster"
    },
    {
        "name": "Docker",
        "description": "Plateforme pour le développement, la distribution et l'exécution d'applications conteneurisées.",
        "link": "https://www.docker.com/",
        "category": "DevOps",
        "tags": ["conteneurisation", "déploiement", "applications"],
        "add_date": "2023-12-31",
        "contributor": "DockerFan"
    },
    {
        "name": "TensorFlow",
        "description": "Bibliothèque open source d'apprentissage automatique développée par Google.",
        "link": "https://www.tensorflow.org/",
        "category": "Machine Learning",
        "tags": ["apprentissage automatique", "open source", "Google"],
        "add_date": "2024-01-03",
        "contributor": "TensorFlowFan"
    },
    {
        "name": "PyTorch",
        "description": "Bibliothèque open source pour les travaux d'apprentissage profond.",
        "link": "https://pytorch.org/",
        "category": "Machine Learning",
        "tags": ["apprentissage profond", "open source", "Python"],
        "add_date": "2024-01-06",
        "contributor": "PyTorchFan"
    },
    {
        "name": "Postman",
        "description": "Plateforme de collaboration pour le développement d'API.",
        "link": "https://www.postman.com/",
        "category": "API Integration",
        "tags": ["collaboration", "API", "développement"],
        "add_date": "2024-01-09",
        "contributor": "APIMaster"
    },
    {
        "name": "Swagger",
        "description": "Outil open source pour la conception, la construction, et la documentation d'API RESTful.",
        "link": "https://swagger.io/",
        "category": "API Integration",
        "tags": ["API RESTful", "conception", "documentation"],
        "add_date": "2024-01-12",
        "contributor": "SwaggerDev"
    },
    {
        "name": "WordPress",
        "description": "Système de gestion de contenu open source pour la création de sites web.",
        "link": "https://wordpress.org/",
        "category": "Content Management",
        "tags": ["gestion de contenu", "open source", "sites web"],
        "add_date": "2024-01-15",
        "contributor": "WPEnthusiast"
    },
    {
        "name": "Drupal",
        "description": "Système de gestion de contenu open source et framework de développement web.",
        "link": "https://www.drupal.org/",
        "category": "Content Management",
        "tags": ["gestion de contenu", "framework web", "open source"],
        "add_date": "2024-01-18",
        "contributor": "DrupalDev"
    },
    {
        "name": "Sketch",
        "description": "Logiciel de conception graphique vectorielle pour l'interface utilisateur et l'expérience utilisateur.",
        "link": "https://www.sketch.com/",
        "category": "Design and UI/UX",
        "tags": ["conception graphique", "interface utilisateur", "expérience utilisateur"],
        "add_date": "2024-01-21",
        "contributor": "SketchArtist"
    },
    {
        "name": "Figma",
        "description": "Outil de conception d'interface utilisateur collaboratif basé sur le Web.",
        "link": "https://www.figma.com/",
        "category": "Design and UI/UX",
        "tags": ["conception d'interface utilisateur", "collaboratif", "Web"],
        "add_date": "2024-01-24",
        "contributor": "FigmaDesigner"
    },
    {
        "name": "Trello",
        "description": "Outil de gestion de projet basé sur des listes et des cartes.",
        "link": "https://trello.com/",
        "category": "Productivity",
        "tags": ["gestion de projet", "listes", "cartes"],
        "add_date": "2024-01-27",
        "contributor": "TrelloUser"
    },
    {
        "name": "Asana",
        "description": "Outil de gestion de projet et de travail d'équipe.",
        "link": "https://asana.com/",
        "category": "Productivity",
        "tags": ["gestion de projet", "travail d'équipe", "collaboration"],
        "add_date": "2024-01-30",
        "contributor": "AsanaFan"
    },
    {
        "name": "Hadoop",
        "description": "Framework open source pour le stockage et le traitement distribué de gros volumes de données.",
        "link": "https://hadoop.apache.org/",
        "category": "Big Data",
        "tags": ["Big Data", "stockage distribué", "traitement distribué"],
        "add_date": "2024-02-02",
        "contributor": "HadoopMaster"
    },
    {
        "name": "Apache Spark",
        "description": "Moteur de traitement de données rapide et open source.",
        "link": "https://spark.apache.org/",
        "category": "Big Data",
        "tags": ["Big Data", "traitement de données", "open source"],
        "add_date": "2024-02-05",
        "contributor": "SparkFan"
    }
]

export default tools;

