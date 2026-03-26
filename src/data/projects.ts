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
// *this bit* will be emphasised (italic)
// _this bit_ will have a <span className="text_accent"></span> around it
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
      en: 'Medieval Racing is an online multiplayer arcade racing game that allows friends to play together on a crazy track. It was developed by a team of 5 over 5 months and taught me a lot about multiplayer architecture and project management.<nl>For this project, we chose Mirror, an excellent open-source tool based on Unity\'s NetCode for GameObjects. To host the server, we used a virtual machine provided by [Minet](#0), the student internet provider on the Télécom SudParis campus.<nl>One of the key challenges was room management, so several groups of friends could play simultaneously in separate sessions. We solved this with a Python script handling create/join room requests.<nl>I also set up continuous integration with GitHub Actions to automatically build the server executable from source and publish it to the virtual machine.',
      fr: 'Medieval Racing est un jeu de course arcade multijoueur en ligne qui permet à des amis de jouer ensemble sur un circuit déjanté. Il a été développé dans une équipe de 5 sur 5 mois et m\'a beaucoup appris, autant sur le multijoueur que sur la gestion de projet.<nl>Pour ce projet, nous avons choisi Mirror, un excellent outil open source basé sur NetCode for GameObjects d\'Unity. Pour héberger le serveur, nous avons utilisé une machine virtuelle fournie par [Minet](#1), l\'association étudiante fournisseuse d\'internet sur le campus de Télécom SudParis.<nl>Une des principales difficultés a été la gestion des salles, afin que plusieurs groupes d\'amis puissent jouer en parallèle dans des courses séparées. Nous avons résolu cela avec un script Python qui traite les requêtes de création et de jonction de salle.<nl>J\'ai également mis en place l\'intégration continue avec GitHub Actions pour compiler automatiquement un exécutable serveur à partir de la source puis le publier sur la machine virtuelle.'
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
      en: 'Sorting Bubble was developed during the [Global Game Jam hosted at Télécom SudParis](#0), from January 24th to 26th. This edition was organized by us, students, and I want to sincerely thank [Maxime Sansané](#1) for leading the initiative and making this event happen.<nl>Sorting Bubble is a puzzle game where you play as a small bubble sorting numbers through function-based levels. With traps and tools throughout each stage, you must combine buffer mechanics to overcome obstacles like squishers that block you when you carry a number.<nl>We are very happy with the result. Even without an artist in the team, we chose a simple and efficient visual style that fits this kind of game very well.<nl>I especially enjoyed developing the different buffers and building scripts that enabled higher-level level editing. This helped teammates and myself work more effectively in a level designer role. I also loved implementing animation scripts and UI elements like the defeat screen.',
      fr: 'Sorting Bubble a été développé pendant la [Global Game Jam organisée à Télécom SudParis](#0), du 24 au 26 janvier. La particularité de cette édition est qu\'elle a été organisée par nous, les étudiants, et je tiens à remercier sincèrement [Maxime Sansané](#1) pour avoir pris les devants et rendu cet évènement possible.<nl>Sorting Bubble est un jeu de puzzle où vous incarnez une petite bulle qui trie des nombres à travers des niveaux basés sur des fonctions. Entre pièges et outils, il faut trouver la bonne méthode avec différents types de buffers pour franchir des obstacles comme les squishers qui vous bloquent si vous portez un nombre.<nl>Nous sommes très satisfaits du résultat. Même sans artiste dans l\'équipe, nous avons choisi une direction visuelle simple et efficace qui fonctionne très bien pour ce type de jeu.<nl>J\'ai particulièrement apprécié développer les différents buffers et mettre à disposition des scripts permettant une édition de niveaux plus haut niveau. Cela a aidé d\'autres membres de l\'équipe et moi-même à travailler plus facilement côté level design. J\'ai aussi aimé développer des scripts d\'animation et des éléments d\'interface comme l\'écran de défaite.'
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
      fr: 'Novembre - Decembre 2024'
    },
    developmentTime: {
      en: '48 hours',
      fr: '48 heures'
    },
    description: {
      en: 'During the amazing *Unijam 2024* event held from November 28th to December 1st, our team created *Iram Rnark*, the game that won the _Audience Choice Award_. In this unique experience, players embody Iram Rnark, a clairvoyant without supernatural powers, trying to foresee her clients\' futures through dialogues and observations.<nl>*Iram Rnark* was a very valuable teamwork experience. As lead developer during the jam, I guided the coding side with a supportive approach and made sure everyone could contribute while staying comfortable with their tasks. I remained available whenever someone needed help on technical or structural challenges.<nl>The project was completed in a great atmosphere, and we had a lot of fun building it together.',
      fr: 'Lors de l\'incroyable *Unijam 2024* qui s\'est déroulé du 28 novembre au 1er décembre, notre équipe a créé *Iram Rnark*, le jeu qui a remporté le _Prix du Public_. Dans cette expérience, les joueurs incarnent Iram Rnark, une voyante sans pouvoir surnaturel qui tente de prévoir l\'avenir de ses clients grâce aux dialogues et à l\'observation.<nl>*Iram Rnark* a été une expérience très enrichissante en matière d\'esprit d\'équipe. En tant que développeur principal pendant l\'évènement, j\'ai guidé la partie code avec une approche bienveillante et je me suis assuré que chacun puisse contribuer tout en étant à l\'aise avec ses missions. Je suis resté disponible dès qu\'il fallait aider sur des sujets techniques ou structurels.<nl>Le projet a été mené à bien dans une superbe ambiance, et nous avons tous pris beaucoup de plaisir à travailler dessus ensemble.'
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
        link: 'https://adrikat2022.github.io/test_project/'
      },
      {
        type: 'GITHUB',
        link: 'https://github.com/AdriKat2022/test_project'
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
      en: 'This game is the result of a challenge I took in November 2024: learn the *new Flame game engine* by building a game in 2 weeks.<nl>The main goal was to create a simple game while touching as many Flame features as possible and understanding its *components* structure, where elements can be nested into each other.<nl>I also put continuous integration into practice with GitHub to maintain a playable version on GitHub Pages and automate deployment at each update.',
      fr: 'Ce jeu est le fruit d\'un challenge relevé en novembre 2024 : apprendre à utiliser le *nouveau moteur de jeu Flame* en créant un jeu en 2 semaines.<nl>L\'objectif principal était de construire un jeu simple tout en explorant un maximum de fonctionnalités de Flame et en comprenant sa structure de *composants*, qui peuvent s\'imbriquer les uns dans les autres.<nl>J\'ai aussi pu mettre en pratique l\'intégration continue avec GitHub pour maintenir une version jouable sur GitHub Pages et automatiser le déploiement à chaque mise à jour.'
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
      en: '*The Kairi Invasion* started as a simple school exercise where we were expected to build a small SCHMUP project to warm up for the year. Once the assignment was completed, I continued polishing the project to improve visuals such as backgrounds, enemies, and projectiles.<nl>In this project, I mainly focused on *game juice*: satisfying UI, strong player feedback, and an overall better user experience. The animations visible in-game were coded in Unity, mainly using Coroutines.',
      fr: '*The Kairi Invasion* tient son origine d\'un simple travail pratique d\'école où nous devions réaliser un petit jeu de tir (SCHMUP). Une fois le projet terminé côté scolaire, j\'ai voulu continuer à le peaufiner afin d\'améliorer les visuels (fonds, ennemis, projectiles...).<nl>Sur ce projet, je me suis principalement concentré sur le *game juice* : interface agréable, retours joueur efficaces et meilleure expérience utilisateur. Les animations visibles en jeu ont été codées dans Unity, notamment avec des coroutines.'
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
      en: '*Find Mocha* has been my favorite personal project so far. My initial motivation was to deliver it as a gift to a very close friend, which explains the level of commitment I had from day one.<nl>In this homemade platformer, you play as a little bear named Milk exploring sweet mountains to find his friend Mocha.<nl>Different powerups help you through the journey, but beware of the bad-thought monsters.<nl>You can play by downloading the game on GitHub.',
      fr: '*Find Mocha* a été mon projet personnel préféré jusqu\'à présent. Ma motivation initiale était de l\'offrir en cadeau à un ami très proche, ce qui explique l\'implication que j\'ai eue dès le départ.<nl>Dans ce petit jeu de plateforme fait maison avec Unity, vous incarnez un petit ours nommé Milk qui explore des montagnes sucrées pour retrouver son ami Mocha.<nl>Différents powerups vous aideront pendant le voyage, mais attention aux monstres de mauvaises pensées.<nl>Vous pouvez y jouer en téléchargeant le jeu sur GitHub.'
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
      en: '*Rupture* is a project carried out by a group of 4 students during our digital engineering training at Télécom SudParis.<nl>In this narrative game, you embody a humble robot observing society in the near future. While your initial mission is to help a young couple, your task unexpectedly evolves into something far more significant than simple entertainment.<nl>The primary objective was to learn Unreal Engine 5 and create an impactful game around Sustainable Development.',
      fr: '*Rupture* est un projet réalisé par un groupe de 4 étudiants dans le cadre de la formation d\'ingénieur du numérique à Télécom SudParis.<nl>Dans ce jeu narratif, vous incarnez le point de vue d\'un modeste robot observant l\'état de la société dans un futur proche. Alors que votre mission initiale est d\'aider un jeune couple, votre tâche se transforme de manière inattendue en une mission bien plus importante qu\'un simple divertissement.<nl>L\'objectif principal était notamment d\'apprendre à utiliser Unreal Engine 5 pour créer un jeu impactant sur le thème du Développement Durable.'
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
      en: 'Developed in 48 hours during [INT Game Jam 2024](#0), an event managed autonomously by a group of 9 students, *Shipping Time* was designed by a team of 5 jammers around this year\'s theme: "Playing with time".<nl>In this rhythm-reaction game, you control a boat that must master both time and weather to deliver packages on schedule.<nl>Because of technical difficulties, the game could not be completed exactly as planned, but despite some bugs we were satisfied with a working gameplay loop that matched our original vision overall.',
      fr: 'Développé en 48 heures durant [INT Game Jam 2024](#0), un évènement géré de manière autonome par un groupe de 9 étudiants, *Shipping Time* a été conçu par une équipe de 5 jammeurs autour du thème de l\'année : "Jouer avec le temps".<nl>Dans ce jeu de rythme à réaction, vous incarnez un bateau qui doit contrôler à la fois le temps et la météo pour livrer ses colis à temps.<nl>Malgré quelques difficultés techniques, le jeu n\'a pas pu être terminé exactement comme prévu, mais nous restons satisfaits d\'une boucle de gameplay fonctionnelle et globalement fidèle à notre vision initiale.'
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
      en: 'Developed in 48 hours during [Global Game Jam 2024](#0), *The Legend Of Blo : the voice in your head* was created by a team of 6 students. It is a narrative game full of bugs (intentional?) where a rather unusual narrator accompanies you in your quest, aligned with this year\'s theme: "Make me laugh".<nl>The project was incredibly fun to produce, and we laughed a lot throughout development. From intentional to unintentional bugs, everything became part of the creative energy. That day, we truly learned one key lesson: it\'s not a bug, it\'s a feature.<nl>We were very proud of the final result, and I am personally proud of having implemented the modular dialogue system for this project.',
      fr: 'Développé en 48 heures durant [Global Game Jam 2024](#0), *The Legend Of Blo : the voice in your head* est né d\'une équipe de 6 étudiants. C\'est un jeu narratif rempli de bugs (intentionnels ?) où un narrateur assez spécial vous accompagne dans votre quête, en cohérence avec le thème de l\'année : "Make me laugh".<nl>Le projet a été extrêmement amusant à produire, et nous avons beaucoup ri pendant tout le développement. Des bugs intentionnels aux bugs inattendus, tout participait à l\'énergie créative. Ce jour-là, nous avons vraiment retenu une leçon : ce n\'est pas un bug, c\'est une feature.<nl>Nous avons été très fiers du résultat final, et je suis personnellement fier d\'avoir mis en place le système de dialogue modulaire de ce projet.'
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
      en: 'This project was carried out in pairs during our second year of digital engineering school, in the Game Architectures and Engines course at Télécom SudParis.<nl>Building this game allowed us to validate our Unity skills by producing a simple game with solid fundamentals.<nl>For development, we combined previous Unity experience with new tools introduced by the course, notably NavMesh for AI navigation on terrain.',
      fr: 'Ce projet a été réalisé en duo durant notre deuxième année d\'école d\'ingénieur du numérique, dans le cours d\'Architectures et Moteurs de Jeux Vidéos à Télécom SudParis.<nl>La création de ce jeu nous a permis de valider nos compétences Unity en produisant un jeu simple avec des bases solides.<nl>Pour le développement, nous avons combiné nos acquis sur Unity avec de nouveaux outils introduits par le module, notamment le NavMesh pour la navigation de l\'IA sur un terrain.'
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
      en: 'This game was created in 48 hours during [Unijam FR 2023](#0), with this year\'s theme: "Everything transforms".<nl>The concept was to embody a small laboratory slime trying to forge its own freedom by escaping the lab. But slime sticks and does not jump high.<nl>Heat and cold sources alter your state, each with advantages and disadvantages. Be careful not to take too long: every room has its own temperature and eventually forces you back into the same state.',
      fr: 'Ce jeu a été réalisé en 48 heures à l\'occasion de [Unijam FR 2023](#0), avec le thème de cette année : "Tout se transforme".<nl>Notre idée était d\'incarner un petit slime de laboratoire qui tente de se forger sa propre liberté en s\'échappant du labo. Mais un slime ça colle, et ça ne saute pas haut.<nl>Des sources de chaleur et de froid altèrent votre état, chacun avec ses avantages et ses inconvénients. Attention à ne pas traîner : chaque salle possède sa propre température et vous ramène progressivement au même état.'
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
      en: 'This game was created in 48 hours by a team of 6 during [Global Game Jam 2023](#0), with this year\'s theme: "Roots".<nl>This jam was the first one for the whole team. At that time, using Git, a key tool for teamwork and version control, was also new for us, and this project was where we truly started learning it.<nl>The game could not be fully completed because we faced too many Git-related issues. In retrospect, with our current experience, we could now solve most of those blockers much more effectively.',
      fr: 'Ce jeu a été réalisé en 48 heures dans une équipe de 6 à l\'occasion de [Global Game Jam 2023](#0), avec le thème de l\'année : "Roots".<nl>Cette game jam était une première pour toute l\'équipe. À ce moment-là, l\'utilisation de Git, outil essentiel de gestion de versions en équipe, était également nouvelle pour nous, et ce projet a marqué le début de sa vraie prise en main.<nl>Le jeu n\'a finalement pas pu être totalement abouti car nous avons rencontré trop de problèmes liés à Git. Avec le recul et notre niveau actuel, nous pourrions aujourd\'hui corriger la plupart de ces blocages bien plus efficacement.'
    }
  }
];
