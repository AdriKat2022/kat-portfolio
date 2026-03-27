import type { Project } from '@/types/project';
import { getSkillsByIds } from '@/data/skills';

const portfolioAssets = import.meta.glob('../assets/portfolio/*', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const portfolioDocuments = import.meta.glob('../assets/docs/*', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const getAssetUrl = (name: string): string => {
  return portfolioAssets[`../assets/portfolio/${name}`] ?? '';
};

const getDocumentUrl = (name: string): string => {
  return portfolioDocuments[`../assets/docs/${name}`] ?? '';
}

// Project description :
// <nl> creates a new paragraph
// *this bit* will be emphasized (italic)
// _this bit_ will have a <span className="text-accent"></span> around it
// [this bit](#i) will be a link to the ith link of additionalLinks.

export const projects: Project[] = [
  {
    id: 'medieval-racing',
    pinned: true,
    cover_img: getAssetUrl('medieval-racing_cover.jpg'),
    imgs: [
      getAssetUrl('medieval-racing_1.jpg'),
      getAssetUrl('medieval-racing_2.jpg'),
      getAssetUrl('medieval-racing_3.jpg'),
      getAssetUrl('medieval-racing_4.jpg'),
      getAssetUrl('medieval-racing_5.jpg')
    ],
    technologies: getSkillsByIds([
      'mirror-networking',
      'vm-scripting',
      'ci-cd',
      'unity',
      'csharp',
      'git'
    ]),
    actions: [
      {
        customDisplay: { en: "Open Itch.io page", fr: "Ouvrir la page Itch.io" },
        type: 'GENERAL-LINK-NEW-TAB',
        link: 'https://adrikat-1.itch.io/medieval-racing'
      }
    ],
    title: {
      en: 'Medieval Racing',
      fr: 'Medieval Racing'
    },
    date: {
      en: 'October 2024 - January 2025',
      fr: 'Octobre 2024 - Janvier 2025'
    },
    developmentTime: {
      en: '5 months',
      fr: '5 mois'
    },
    additionalLinks: [
      'https://minet.net/en/',
      'https://minet.net/fr/'
    ],
    description: {
      en: 'Medieval Racing is an online multiplayer arcade racing game where friends can race together on a chaotic track. Developed by a team of five over five months, it taught me a great deal about multiplayer architecture and project management.<nl>For this project, we chose Mirror, an excellent open-source framework built on Unity\'s NetCode for GameObjects. To host the server, we used a virtual machine provided by [Minet](#0), the student internet provider on the Télécom SudParis campus.<nl>One of our key challenges was room management, so multiple groups of friends could play simultaneously in separate sessions. We solved this with a Python script handling create and join room requests.<nl>I also set up continuous integration with GitHub Actions to automatically build the server executable from source and deploy it to the virtual machine.',
      fr: 'Medieval Racing est un jeu de course arcade multijoueur en ligne où des amis peuvent jouer ensemble sur un circuit déjanté. Développé par une équipe de cinq personnes sur cinq mois, ce projet m\'a énormément appris sur l\'architecture multijoueur et la gestion de projet.<nl>Pour ce projet, nous avons choisi Mirror, un excellent framework open source basé sur NetCode for GameObjects d\'Unity. Pour héberger le serveur, nous avons utilisé une machine virtuelle fournie par [Minet](#1), l\'association étudiante qui fournit l\'accès internet sur le campus de Télécom SudParis.<nl>L\'un des principaux défis a été la gestion des salles, afin que plusieurs groupes d\'amis puissent jouer en parallèle dans des sessions séparées. Nous avons résolu ce point avec un script Python qui traite les requêtes de création et de jonction de salle.<nl>J\'ai également mis en place l\'intégration continue avec GitHub Actions pour compiler automatiquement un exécutable serveur à partir de la source et le déployer sur la machine virtuelle.'
    }
  },
  {
    id: 'sorting-bubble',
    pinned: false,
    cover_img: getAssetUrl('sorting-bubble_cover.jpg'),
    imgs: [
      getAssetUrl('sorting-bubble_1.jpg'),
      getAssetUrl('sorting-bubble_2.jpg'),
      getAssetUrl('sorting-bubble_3.jpg'),
      getAssetUrl('sorting-bubble_4.jpg'),
      getAssetUrl('sorting-bubble_5.jpg')
    ],
    technologies: getSkillsByIds([
      'tool-programming',
      'problem-solving',
      'unity',
      'csharp',
      'git'
    ]),
    actions: [
      {
        customDisplay: { en: "Open Itch.io page", fr: "Ouvrir la page Itch.io" },
        type: 'ITCH',
        link: 'https://adrikat-1.itch.io/sorting-bubble'
      }
    ],
    title: {
      en: 'Sorting Bubble',
      fr: 'Sorting Bubble'
    },
    date: {
      en: 'January 2025',
      fr: 'Janvier 2025'
    },
    developmentTime: {
      en: '48 hours',
      fr: '48 heures'
    },
    additionalLinks: [
      'https://globalgamejam.org/jam-sites/2025/telecom-sudparis',
      'https://www.linkedin.com/posts/maxime-sansane_last-week-i-had-the-chance-to-organise-t%C3%A9l%C3%A9com-activity-7289918024784990209-EpaY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD18u4sBa7MoCrgRuDr8SXINMEpywk0Hbmo'
    ],
    description: {
      en: 'Sorting Bubble was developed during the [Global Game Jam hosted at Télécom SudParis](#0), from January 24 to 26. This edition was organized by us, the students, and I sincerely want to thank [Maxime Sansané](#1) for taking the lead and making the event happen.<nl>Sorting Bubble is a puzzle game where you play as a small bubble sorting numbers through function-based levels. With traps and tools across each stage, you combine buffer mechanics to overcome obstacles such as squishers that block you when carrying a number.<nl>We are very happy with the result. Even without an artist on the team, we chose a simple and effective visual style that fits this type of game very well.<nl>I particularly enjoyed developing the different buffers and creating scripts that enabled higher-level level editing. This helped the team, including me, work more efficiently in a level design role. I also enjoyed implementing animation scripts and UI elements such as the defeat screen.',
      fr: 'Sorting Bubble a été développé pendant la [Global Game Jam organisée à Télécom SudParis](#0), du 24 au 26 janvier. Cette édition avait une particularité : elle a été organisée par nous, les étudiants. Je tiens d\'ailleurs à remercier sincèrement [Maxime Sansané](#1) d\'avoir pris les devants et rendu cet évènement possible.<nl>Sorting Bubble est un jeu de puzzle dans lequel vous incarnez une petite bulle qui trie des nombres à travers des niveaux basés sur des fonctions. Entre pièges et outils, il faut trouver la bonne méthode avec différents types de buffers pour franchir des obstacles comme les squishers, qui vous bloquent si vous portez un nombre.<nl>Nous sommes très satisfaits du résultat. Même sans artiste dans l\'équipe, nous avons choisi une direction visuelle simple et efficace, très adaptée à ce type de jeu.<nl>J\'ai particulièrement apprécié développer les différents buffers et créer des scripts facilitant une édition de niveaux plus avancée. Cela a aidé les autres membres de l\'équipe, et moi-même, à travailler plus facilement sur la partie level design. J\'ai aussi beaucoup aimé développer des scripts d\'animation et des éléments d\'interface comme l\'écran de défaite.'
    }
  },
  {
    id: 'irma-rnark',
    pinned: false,
    cover_img: getAssetUrl('irma-rnark_cover.jpg'),
    imgs: [
      getAssetUrl('irma-rnark_1.jpg'),
      getAssetUrl('irma-rnark_2.jpg'),
      getAssetUrl('irma-rnark_3.jpg'),
      getAssetUrl('irma-rnark_4.jpg')
    ],
    technologies: getSkillsByIds([
      'leadership',
      'problem-solving',
      'unity',
      'csharp',
      'git'
    ]),
    actions: [
      {
        type: 'ITCH',
        link: 'https://soldatspectre76.itch.io/irma-rnak'
      }
    ],
    title: {
      en: 'Irma Rnark',
      fr: 'Irma Rnark'
    },
    date: {
      en: 'November - December 2024',
      fr: 'Novembre - Décembre 2024'
    },
    developmentTime: {
      en: '48 hours',
      fr: '48 heures'
    },
    description: {
      en: 'During the incredible *Unijam 2024* event, held from November 28 to December 1, our team created *Irma Rnark*, the game that won the _Audience Choice Award_. In this experience, players embody Irma Rnark, a clairvoyant without supernatural powers who tries to foresee her clients\' futures through dialogue and observation.<nl>*Irma Rnark* was a very valuable teamwork experience. As lead developer during the jam, I guided the coding side with a supportive mindset and made sure everyone could contribute while staying comfortable with their tasks. I stayed available whenever someone needed help with technical or structural challenges.<nl>The project came together in a great atmosphere, and we had a lot of fun building it as a team.',
      fr: 'Lors de l\'incroyable *Unijam 2024*, organisé du 28 novembre au 1er décembre, notre équipe a créé *Irma Rnark*, le jeu qui a remporté le _Prix du Public_. Dans cette expérience, les joueurs incarnent Irma Rnark, une voyante sans pouvoir surnaturel qui tente de prévoir l\'avenir de ses clients grâce au dialogue et à l\'observation.<nl>*Irma Rnark* a été une expérience très enrichissante sur le plan du travail d\'équipe. En tant que développeur principal pendant l\'évènement, j\'ai guidé la partie code avec une approche bienveillante et je me suis assuré que chacun puisse contribuer tout en restant à l\'aise avec ses missions. Je suis resté disponible dès qu\'il fallait aider sur des sujets techniques ou structurels.<nl>Le projet a abouti dans une excellente ambiance, et nous avons pris beaucoup de plaisir à le construire ensemble.'
    }
  },
  {
    id: 'space-shooter-game',
    pinned: false,
    cover_img: getAssetUrl('space_shooter_game_cover.jpg'),
    imgs: [
      getAssetUrl('space_shooter_game_1.jpg'),
      getAssetUrl('space_shooter_game_2.jpg'),
      getAssetUrl('space_shooter_game_3.jpg')
    ],
    technologies: getSkillsByIds([
      'encapsulation',
      'flutter',
      'flame',
      'dart',
      'git',
      'ci-cd'
    ]),
    actions: [
      {
        type: 'PLAY-IN-BROWSER',
        link: 'https://adrikat2022.github.io/Flutter-Space-Shooter/'
      },
      {
        type: 'GITHUB',
        link: 'https://github.com/AdriKat2022/Flutter-Space-Shooter'
      }
    ],
    title: {
      en: 'Space Shooter Game',
      fr: 'Space Shooter Game'
    },
    date: {
      en: 'November 2024',
      fr: 'Novembre 2024'
    },
    developmentTime: {
      en: '2 weeks',
      fr: '2 semaines'
    },
    description: {
      en: 'This game was the result of a challenge I set myself in November 2024: learn the *new Flame game engine* by building a game in two weeks.<nl>The main goal was to create a simple game while exploring as many Flame features as possible, especially its *component* architecture, where elements can be nested into one another.<nl>I also put continuous integration into practice with GitHub to keep a playable version on GitHub Pages and automate deployment with every update.',
      fr: 'Ce jeu est né d\'un défi que je me suis lancé en novembre 2024 : apprendre à utiliser le *nouveau moteur de jeu Flame* en créant un jeu en deux semaines.<nl>L\'objectif principal était de développer un jeu simple tout en explorant un maximum de fonctionnalités de Flame, notamment son architecture en *composants*, où les éléments peuvent s\'imbriquer les uns dans les autres.<nl>J\'ai aussi pu mettre en pratique l\'intégration continue avec GitHub afin de maintenir une version jouable sur GitHub Pages et d\'automatiser le déploiement à chaque mise à jour.'
    }
  },
  {
    id: 'the-kairi-invasion',
    pinned: false,
    cover_img: getAssetUrl('theKairiInvasionCover.jpg'),
    imgs: [
      getAssetUrl('theKairiInvasion_1.jpg'),
      getAssetUrl('theKairiInvasion_2.jpg'),
      getAssetUrl('theKairiInvasion_3.jpg'),
      getAssetUrl('theKairiInvasion_4.jpg')
    ],
    technologies: getSkillsByIds(['unity', 'csharp', 'git']),
    actions: [
      {
        type: 'GITHUB',
        link: 'https://github.com/AdriKat2022/SCHMUP/tree/burgerVer'
      }
    ],
    title: {
      en: 'The Kairi Invasion',
      fr: 'The Kairi Invasion'
    },
    date: {
      en: 'September - October 2024',
      fr: 'Septembre - Octobre 2024'
    },
    developmentTime: 
    {
      en: "1 month",
      fr: "1 mois"
    },
    description: {
      en: '*The Kairi Invasion* began as a simple school assignment where we were expected to build a small SCHMUP to kick off the year. Once the assignment was complete, I kept polishing the project to improve visuals such as backgrounds, enemies, and projectiles.<nl>On this project, I mainly focused on *game juice*: a satisfying interface, strong player feedback, and a smoother overall experience. Most of the in-game animations were coded in Unity using coroutines.',
      fr: '*The Kairi Invasion* est né d\'un travail pratique où nous devions réaliser un petit jeu de tir type SCHMUP pour démarrer l\'année. Une fois le rendu scolaire terminé, j\'ai poursuivi le projet pour le peaufiner visuellement (fonds, ennemis, projectiles...).<nl>Sur ce projet, je me suis surtout concentré sur le *game juice* : interface satisfaisante, retours joueur lisibles et expérience globale plus fluide. La majorité des animations en jeu a été codée dans Unity, notamment avec des coroutines.'
    }
  },
  {
    id: 'find-mocha',
    pinned: true,
    cover_img: getAssetUrl('find_mocha_cover.jpg'),
    imgs: [
      getAssetUrl('find_mocha_1.jpg'),
      getAssetUrl('find_mocha_2.jpg'),
      getAssetUrl('find_mocha_3.jpg'),
      getAssetUrl('find_mocha_4.jpg')
    ],
    technologies: getSkillsByIds(['unity', 'csharp', 'git']),
    actions: [
      {
        type: 'GITHUB',
        link: 'https://github.com/AdriKat2022/find-mocha'
      }
    ],
    title: {
      en: 'Find Mocha',
      fr: 'Find Mocha'
    },
    date: {
      en: 'November 2023 - April 2024',
      fr: 'Novembre 2023 - Avril 2024'
    },
    developmentTime: {
      en: "5 months",
      fr: "5 mois"
    },
    description: {
      en: '*Find Mocha* remains my favorite personal project to date. At first, I wanted to create it as a gift for a close friend, which explains the level of commitment I put into it from day one.<nl>In this homemade platformer, you play as a little bear named Milk, exploring candy-like mountains to find his friend Mocha.<nl>Different power-ups support you along the journey, but beware of the bad-thought monsters.<nl>You can play it by downloading the game on GitHub.',
      fr: '*Find Mocha* reste mon projet personnel préféré à ce jour. À l\'origine, je voulais l\'offrir en cadeau à un ami très proche, ce qui explique le niveau d\'implication que j\'y ai mis dès le premier jour.<nl>Dans ce platformer fait maison, vous incarnez un petit ours nommé Milk, qui explore des montagnes sucrées pour retrouver son ami Mocha.<nl>Différents power-ups vous accompagnent tout au long de l\'aventure, mais attention aux monstres de mauvaises pensées.<nl>Vous pouvez y jouer en téléchargeant le jeu sur GitHub.'
    }
  },
  {
    id: 'rupture',
    pinned: true,
    cover_img: getAssetUrl('rupture_cover.jpg'),
    imgs: [
      getAssetUrl('rupture_1.jpg'),
      getAssetUrl('rupture_2.jpg'),
      getAssetUrl('rupture_3.jpg'),
      getAssetUrl('rupture_4.jpg'),
      getAssetUrl('rupture_5.jpg')
    ],
    technologies: getSkillsByIds([
      'gameplay-programming',
      'unreal-engine-5',
      'cpp',
      'git',
      'git-lfs'
    ]),
    actions: [
      {
        customDisplay: { en: "See the Report", fr: "Voir le Rapport" },
        type: 'DOWNLOAD',
        link: getDocumentUrl('rupture-report.pdf')
      }
    ],
    title: {
      en: 'Rupture',
      fr: 'Rupture'
    },
    date: {
      en: 'January - June 2024',
      fr: 'Janvier - Juin 2024'
    },
    developmentTime: {
      en: '6 months',
      fr: '6 mois'
    },
    description: {
      en: '*Rupture* is a project created by a team of four students during our digital engineering studies at Télécom SudParis.<nl>In this narrative game, you experience the near future through the eyes of a humble robot observing society. What begins as a simple mission to help a young couple gradually evolves into something far more meaningful than pure entertainment.<nl>The main objective was to learn Unreal Engine 5 and build an impactful game around the theme of Sustainable Development.',
      fr: '*Rupture* est un projet réalisé par une équipe de quatre étudiants dans le cadre de notre formation d\'ingénieur du numérique à Télécom SudParis.<nl>Dans ce jeu narratif, vous découvrez un futur proche à travers le regard d\'un modeste robot qui observe la société. Ce qui commence comme une mission simple pour aider un jeune couple évolue progressivement vers quelque chose de bien plus marquant qu\'un simple divertissement.<nl>L\'objectif principal était d\'apprendre Unreal Engine 5 et de créer un jeu à impact autour du thème du Développement Durable.'
    }
  },
  {
    id: 'shipping-time',
    pinned: false,
    cover_img: getAssetUrl('shippingTimeCover.jpg'),
    imgs: [
      getAssetUrl('shippingTime.jpg')
    ],
    technologies: getSkillsByIds(['unity', 'csharp', 'git']),
    actions: [
      {
        type: 'ITCH',
        link: 'https://adrikat-1.itch.io/shipping-time'
      }
    ],
    title: {
      en: 'Shipping Time',
      fr: 'Shipping Time'
    },
    date: {
      en: 'April 2024',
      fr: 'Avril 2024'
    },
    developmentTime: {
      en: '48 hours',
      fr: '48 heures'
    },
    additionalLinks: [
      'https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/'
    ],
    description: {
      en: 'Developed in 48 hours during [INT Game Jam 2024](#0), an event autonomously organized by a group of nine students, *Shipping Time* was designed by a team of five jammers around this year\'s theme: "Playing with Time".<nl>In this rhythm-reaction game, you control a boat that must master both time and weather to deliver packages on schedule.<nl>Due to technical challenges, the game could not be completed exactly as planned. Even so, despite some bugs, we were satisfied with a functional gameplay loop that remained faithful to our original vision.',
      fr: 'Développé en 48 heures lors de [INT Game Jam 2024](#0), un évènement organisé de façon autonome par un groupe de neuf étudiants, *Shipping Time* a été conçu par une équipe de cinq jammeurs autour du thème de l\'année : "Jouer avec le temps".<nl>Dans ce jeu de rythme-réaction, vous incarnez un bateau qui doit maîtriser à la fois le temps et la météo pour livrer ses colis dans les délais.<nl>En raison de difficultés techniques, le jeu n\'a pas pu être finalisé exactement comme prévu. Malgré cela, et malgré quelques bugs, nous sommes restés satisfaits d\'une boucle de gameplay fonctionnelle, globalement fidèle à notre vision initiale.'
    }
  },
  {
    id: 'the-legend-of-blo',
    pinned: false,
    cover_img: getAssetUrl('theLegendOfBloCover.jpg'),
    imgs: [
      getAssetUrl('theLegendOfBlo.jpg')
    ],
    technologies: getSkillsByIds(['unity', 'csharp', 'git']),
    actions: [
      {
        type: 'ITCH',
        link: 'https://valt7.itch.io/legendblo'
      }
    ],
    title: {
      en: 'The Legend Of Blo : the voice in your head',
      fr: 'The Legend Of Blo : the voice in your head'
    },
    date: {
      en: 'January 2024',
      fr: 'Janvier 2024'
    },
    developmentTime: {
      en: '48 hours',
      fr: '48 heures'
    },
    additionalLinks: [
      'https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/'
    ],
    description: {
      en: 'Developed in 48 hours during [Global Game Jam 2024](#0), *The Legend Of Blo : the voice in your head* was created by a team of six students. It is a narrative game full of bugs (intentional?) where an unusual narrator follows you throughout your quest, in line with this year\'s theme: "Make me laugh".<nl>The project was incredibly fun to produce, and we laughed all the way through development. From intentional to accidental bugs, everything fed the creative energy. That day, we truly learned one lesson: it\'s not a bug, it\'s a feature.<nl>We were very proud of the final result, and I am personally proud to have implemented the project\'s modular dialogue system.',
      fr: 'Développé en 48 heures pendant [Global Game Jam 2024](#0), *The Legend Of Blo : the voice in your head* est né d\'une équipe de six étudiants. C\'est un jeu narratif rempli de bugs (intentionnels ?) où un narrateur atypique vous accompagne tout au long de votre quête, en cohérence avec le thème de l\'année : "Make me laugh".<nl>Le projet a été extrêmement amusant à produire, et nous avons beaucoup ri pendant tout le développement. Des bugs intentionnels aux bugs imprévus, tout nourrissait l\'énergie créative. Ce jour-là, nous avons retenu une leçon : ce n\'est pas un bug, c\'est une feature.<nl>Nous avons été très fiers du résultat final, et je suis personnellement fier d\'avoir mis en place le système de dialogue modulaire du projet.'
    }
  },
  {
    id: 'magic-circus',
    pinned: false,
    cover_img: getAssetUrl('magicCircusCover.jpg'),
    imgs: [
      getAssetUrl('magicCircus.jpg')
    ],
    technologies: getSkillsByIds(['nav-mesh', 'unity', 'csharp', 'git']),
    actions: [
      {
        type: 'GITHUB',
        link: 'https://github.com/AdriKat2022/AMJV-CTF'
      }
    ],
    title: {
      en: 'Magic Circus',
      fr: 'Magic Circus'
    },
    date: {
      en: 'November 2023 - January 2024',
      fr: 'Novembre 2023 - Janvier 2024'
    },
    developmentTime: {
      en: '3 months',
      fr: '3 mois'
    },
    description: {
      en: 'This project was completed in pairs during our second year of digital engineering studies, in the Game Architectures and Engines course at Télécom SudParis.<nl>Building this game allowed us to validate our Unity skills by delivering a simple project with solid fundamentals.<nl>During development, we combined our prior Unity experience with tools introduced in the course, notably NavMesh for AI navigation on terrain.',
      fr: 'Ce projet a été réalisé en binôme pendant notre deuxième année d\'études d\'ingénieur du numérique, dans le cours d\'Architectures et Moteurs de Jeux Vidéos à Télécom SudParis.<nl>La création de ce jeu nous a permis de valider nos compétences sur Unity en livrant un projet simple, mais construit sur des bases solides.<nl>Pendant le développement, nous avons combiné notre expérience préalable sur Unity avec des outils introduits dans le module, notamment le NavMesh pour la navigation de l\'IA sur terrain.'
    }
  },
  {
    id: 'translimation',
    pinned: false,
    cover_img: getAssetUrl('translimationCover.jpg'),
    imgs: [
      getAssetUrl('translimation.jpg')
    ],
    technologies: getSkillsByIds(['unity', 'csharp', 'git']),
    actions: [
      {
        type: 'ITCH',
        link: 'https://miloderoussi.itch.io/translimation'
      }
    ],
    title: {
      en: 'Translimation',
      fr: 'Translimation'
    },
    date: {
      en: 'November 2023',
      fr: 'Novembre 2023'
    },
    developmentTime: {
      en: '48 hours',
      fr: '48 heures'
    },
    additionalLinks: [
      'https://itch.io/jam/unijam2023'
    ],
    description: {
      en: 'This game was created in 48 hours during [Unijam FR 2023](#0), with this year\'s theme: "Everything transforms".<nl>The concept was to play as a small laboratory slime trying to forge its own freedom by escaping the lab. But slime sticks, and it does not jump very high.<nl>Heat and cold sources alter your state, each with advantages and drawbacks. Be careful not to take too long: every room has its own temperature and eventually forces you back into the same state.',
      fr: 'Ce jeu a été réalisé en 48 heures lors de [Unijam FR 2023](#0), avec le thème de l\'année : "Tout se transforme".<nl>Le concept consiste à incarner un petit slime de laboratoire qui tente de conquérir sa liberté en s\'échappant du labo. Mais un slime colle, et ne saute pas très haut.<nl>Des sources de chaleur et de froid modifient votre état, chacune avec ses avantages et ses limites. Attention à ne pas traîner : chaque salle a sa propre température et vous ramène progressivement au même état.'
    }
  },
  {
    id: 'exploding-tree',
    pinned: false,
    cover_img: getAssetUrl('explodingTreeCover.jpg'),
    imgs: [
      getAssetUrl('explodingTree.jpg')
    ],
    technologies: getSkillsByIds(['unity', 'csharp', 'git']),
    actions: [
      {
        type: 'GITHUB',
        link: 'https://github.com/HugoLhuilier/ExplodingTree'
      }
    ],
    title: {
      en: 'Exploding Tree',
      fr: 'Exploding Tree'
    },
    date: {
      en: 'February 2023',
      fr: 'Février 2023'
    },
    developmentTime: {
      en: '48 hours',
      fr: '48 heures'
    },
    additionalLinks: [
      'https://itch.io/jam/unijam2023'
    ],
    description: {
      en: 'This game was created in 48 hours by a team of six during [Global Game Jam 2023](#0), on this year\'s theme: "Roots".<nl>This jam was a first for the entire team. At the time, Git, a key tool for teamwork and version control, was also new to us, and this project is where we truly began learning it.<nl>The game could not be fully completed because we encountered too many Git-related issues. In retrospect, with our current experience, we could solve most of those blockers much more effectively.',
      fr: 'Ce jeu a été réalisé en 48 heures par une équipe de six personnes pendant [Global Game Jam 2023](#0), sur le thème de l\'année : "Roots".<nl>Cette jam était une première pour toute l\'équipe. À l\'époque, Git, outil essentiel pour le travail collaboratif et la gestion de versions, était également nouveau pour nous, et ce projet a marqué le début de sa réelle prise en main.<nl>Le jeu n\'a pas pu être finalisé complètement car nous avons rencontré trop de problèmes liés à Git. Avec notre niveau actuel, nous pourrions résoudre la plupart de ces blocages bien plus efficacement.'
    }
  }
];
