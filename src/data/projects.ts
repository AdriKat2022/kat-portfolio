import type { Project } from '@/types/project';

const getAssetUrl = (name: string) => {
  return new URL(`@assets/portfolio/${name}`, import.meta.url).href;
};

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
    technologies: [
      'Mirror Networking',
      'VM Scripting',
      'CI/CD with git pipeline',
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
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
    description: {
      en: '<p>Medieval Racing is an online multiplayer arcade racing game that allows friends to play together on a crazy track! It was developed in a team of 5 over the course of 5 months. This project is one of the largest I have been able to develop and has taught me a lot, both on the online multiplayer side and on project management.</p><p>For this project, we chose to use Mirror which is an excellent open source tool based on Unity\'s NetCode for GameObjects. To host the server, we used a virtual machine provided by <a href="https://minet.net/en/">Minet</a> which is the student internet provider on the campus of my school Télécom SudParis.</p><p>One of the difficulties we encountered during the development of the server was the management of rooms so that several groups of friends could play at the same time in separate rooms. We decided to use a python script that processes requests to create or join a room.</p><p>It is also interesting to note that the regular update of the server could not be done manually each time. I was also responsible for setting up continuous integration with GitHub Actions which automatically compiles a server executable from the project source, then publishes it on the virtual machine.</p><p>Feel free to test it by downloading it from itch with the button below!</p>',
      fr: '<p>Medieval Racing est un jeu de course arcade multijoueur en ligne qui permet à des amis de jouer ensemble sur un circuit déjanté ! Il a été développé dans une équipe de 5 en l\'espace de 5 mois. Ce projet est un des plus grand que j\'ai pu déveloper et qui m\'a fait apprendre beaucoup, tant sur le côté multijoueur en ligne que sur la gestion de projet.</p><p>Pour ce projet, nous avons choisi d\'utiliser Mirror qui est un excellent outil open source basé sur NetCode for GameObjects d\'Unity. Pour héberger le serveur, nous avons utilisé une machine virtuelle fournie par <a href="https://minet.net/fr/">Minet</a> qui est l\'association étudiante fournisseusse d\'internet sur le campus de mon école Télécom SudParis.</p><p>Une des difficultés que l\'on a rencontré lors du développement du serveur, a été la gestion des salles pour que plusieurs groupes d\'amis jouent en même temps dans des courses séparées. On a décidé d\'utiliser un script python qui traite les requêtes pour créer ou rejoindre une salle.</p><p>Il est intéressant aussi de noter que la mise à jour régulière du serveur ne pouvait pas se faire à la main à chaque fois. J\'ai été également responsable de la mise en place de l\'intégration continue avec GitHub Actions qui compile automatiquement un exécutable serveur à partir de la source du projet, puis le publie sur la machine virtuelle.</p><p>N\'hésitez pas à le tester en le téléchargeant depuis itch avec le bouton ci-dessous !</p>'
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
    technologies: [
      'Tool Programming',
      'Problem Solving',
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
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
    description: {
      en: '<p>Sorting Bubble was developed on the occasion of the <a href="https://globalgamejam.org/jam-sites/2025/telecom-sudparis">Global Game Jam that took place at Télécom SudParis</a> from January 24th to 26th. The particularity of this event is that it was organized by us, students! I would like to thank from the bottom of my heart <a href="https://www.linkedin.com/posts/maxime-sansane_last-week-i-had-the-chance-to-organise-t%C3%A9l%C3%A9com-activity-7289918024784990209-EpaY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD18u4sBa7MoCrgRuDr8SXINMEpywk0Hbmo" target="_blank">Maxime Sansané</a> for taking the lead and making this event exist !</p><p>Sorting Bubble is a puzzle game where your mission is to embody a small bubble to sort numbers through functions (levels). Sprinkled with traps and tools to get out of it, you will have to find a method using different types of buffers to pass through obstacles like squishers that won\'t let you pass if you carry a number.</p><p>We are very satisfied with the result: even in the absence of an artist in the team, we decided to take a simple and effective style that works very well for our type of game.</p><p>I enjoyed my contribution to this project: the development of the different buffers, but also the provision of various scripts to allow higher-level level editing. This allowed other team members and sometimes myself to exercise the job of a level designer more easily. What I also appreciated in this project was the development of animation scripts, such as the recompilation and also the creation of UI like the defeat screen.</p><p>Don\'t hesitate to check it out with the button below!</p>',
      fr: '<p>Sorting Bubble a été développé à l\'occasion de la <a href="https://globalgamejam.org/jam-sites/2025/telecom-sudparis">Global Game Jam qui s\'est déroulé à Télécom SudParis</a> du 24 au 26 Janvier. La particularité de cet évènement est qu\'il ait été organisé par nous, des étudiants! Je tiens à remercier de tout coeur <a href="https://www.linkedin.com/posts/maxime-sansane_last-week-i-had-the-chance-to-organise-t%C3%A9l%C3%A9com-activity-7289918024784990209-EpaY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD18u4sBa7MoCrgRuDr8SXINMEpywk0Hbmo" target="_blank">Maxime Sansané</a> for avoir pris les devants et avoir permit à cet évènement d\'exister !</p><p>Sorting Bubble est un jeu puzzle ou votre mission est d\'incarner une petite bulle pour trier des nombres à travers des fonctions (des niveaux). Parsemés avec des pièges et outils pour s\'en sortir, vous allez devoir trouver une méthode en utilisant différents types de buffers pour passer à travers des obstacles comme des squishers qui ne vous ne laisseront pas passer si vous portez un nombre.</p><p>Nous sommes très satifaits du résultat : même en l\'absence d\'artiste dans l\'équipe, nous avons décidé de prendre un style simple et efficace qui fonctionne très bien pour notre type de jeu.</p><p>J\'ai beaucoup apprécié ma contribution sur ce projet : le développement des différents buffers, mais également la mise à disposition de scripts variés pour permettre une édition des levels de plus haut niveau. Cela a permis à d\'autres membres de l\'équipe et parfois moi-même de pouvoir exercer le job d\'un level designer plus aisément. Ce que j\'ai également apprécié dans ce projet ont été le développement de scripts d\'animations, comme par exemple la recompilation et également la création d\'UI comme l\'écran de défaite.</p><p>N\'hésitez pas à le tester sur itch avec le bouton ci-dessous !</p>'
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
    technologies: [
      'Leadership',
      'Problem Solving',
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
        link: 'https://soldatspectre76.itch.io/irma-rnak'
      }
    ],
    title: {
      en: 'Irma Rnark',
      fr: 'Irma Rnark'
    },
    date: {
      en: 'November-December 2024',
      fr: 'Novembre-Decembre 2024'
    },
    description: {
      en: '<p>During the amazing <strong>Unijam 2024</strong> event held from November 28th to December 1st, our talented team created <strong>Iram Rnark</strong>—the game that proudly won the Audience Choice Award! In this unique experience, players step into the role of Iram Rnark, a clairvoyant without any supernatural abilities, who strives to foresee her clients\' futures. Through engaging dialogues and keen observations of quirky and entertaining characters, she carefully selects the cards she believes will reveal their future stories.</p><p><strong>Iram Rnark</strong> was a very valuable experience for building teamwork and collaboration. As the lead developer during the event, I guided the team on the coding side with a supportive and approachable attitude. I made it a priority to ensure that everyone not only contributed but also felt comfortable with what they were doing. I was always available to help whenever someone had a question or faced a challenge with the technical or structural parts of the project.</p><p>The project was completed in a great atmosphere, and we all had a lot of fun working on it together.</p>',
      fr: '<p>Lors de l\'incroyable évènement <strong>Unijam 2024</strong> qui s\'est déroulé du 28 novembre au 1er décembre, notre talentueuse équipe a créé <strong>Iram Rnark</strong>—le jeu qui a fièrement remporté le Prix du Public ! Dans cette expérience unique, les joueurs se glissent dans la peau d\'Iram Rnark, une voyante sans aucun pouvoir surnaturel, qui s\'efforce de prévoir l\'avenir de ses clients. À travers des dialogues engageants et des observations aiguisées de personnages excentriques et divertissants, elle sélectionne soigneusement les cartes qu\'elle croit révéler leurs futurs récits.</p><p><strong>Iram Rnark</strong> a été une expérience très enrichissante pour la construction de l\'esprit d\'équipe et la collaboration. En tant que développeur principal durant l\'évènement, j\'ai guidé l\'équipe sur le côté codage avec une attitude de soutien et accessible. J\'ai fait en sorte que tout le monde contribue non seulement mais se sente également à l\'aise avec ce qu\'il faisait. J\'étais toujours disponible pour aider dès que quelqu\'un avait une question ou rencontrait un défi avec les parties techniques ou structurelles du projet.</p><p>Le projet a été mené à bien dans une superbe ambiance, et nous avons tous pris beaucoup de plaisir à travailler dessus ensemble.</p>'
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
    technologies: [
      'Encapsulation',
      'Flutter',
      'Flame',
      'Dart',
      'GIT',
      'CI/CD'
    ],
    actions: [
      {
        type: 'LINK-NT',
        link: 'https://adrikat2022.github.io/test_project/'
      },
      {
        type: 'LINK-NT',
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
    description: {
      en: '<p>This game is the result of a challenge I decided to take up during the month of November 2024: learn to use the <strong>new Flame game engine</strong> by creating a game in 2 weeks.</p><p>The main goal was to build a simple game while touching as many features as possible that <strong>Flame</strong> offers and notably understand its <em>components</em> structure that can fit into each other.</p><p>I was also able to put into practice continuous integration with GitHub to maintain a playable version on GitHub pages and automate deployment at each update.</p>',
      fr: '<p>Ce jeu est le fruit d\'un challenge que j\'ai décidé de relever durant le mois de novembre 2024 : apprendre à utiliser le <strong>nouveau moteur de jeu Flame</strong> en créant un jeu en 2 semaines.</p><p>Le principal but était de monter un jeu simple tout en touchant à un maximum de fonctionnalités qu\'offre <strong>Flame</strong> et notamment comprendre sa structure de <em>composants</em> pouvant s\'encastrer les uns les autres.</p><p>J\'ai aussi pu mettre en pratique l\'intégration continue avec GitHub pour maintenir une version jouable sur GitHub pages et automatiser le déploiement à chaque mise à jour.</p>'
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
    technologies: [
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
        link: 'https://github.com/AdriKat2022/SCHMUP/tree/burgerVer'
      }
    ],
    title: {
      en: 'The Kairi Invasion',
      fr: 'The Kairi Invasion'
    },
    date: {
      en: 'From October 2024',
      fr: 'Depuis Octobre 2024'
    },
    description: {
      en: '<p><strong>The Kairi Invasion</strong> was at first a simple school exercice. We were excpected to build a small SCHMUP project to warm up for the year. Once the project was completed I decided to continue the project just a bit to have better visuals (background, enemies, projectiles...).</p><p>In this project I mainly focused on the <em>game juice</em>, that includes for example a satisfaying and pleasant UI, player feedback and good user experience. All the animations you can see while playing the game was coded in Unity mainly with Coroutines</p>',
      fr: '<p><strong>The Kairi Invasion</strong> tient son origine d\'un simple travail pratique d\'école où nous étions attendu de faire un jeu de tir (SCHMUP). Une fois le projet terminé du point de vue scolaire, j\'ai voulu continuer à le paufiner afin d\'avoir de meilleurs images (fond d\'écran, ennemis, projectiles..).. Les animations que vous pouvez apercevoir en jouant ont été codé dans Unity, notamment grâce à des coroutines.</p>'
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
    technologies: [
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
        link: 'https://github.com/AdriKat2022/find-mocha'
      }
    ],
    title: {
      en: 'Find Mocha',
      fr: 'Find Mocha'
    },
    date: {
      en: 'From November 2023',
      fr: 'Depuis Novembre 2023'
    },
    description: {
      en: '<p><strong>Find Mocha</strong> has been my personal favourite project so far. In fact, the motivation for this project were at first to deliver it as a present to a very close friend. That may explain why the starting motivation I had for this one was that high.</p><p>In this little platformer all code home-made, you play as a little bear named Milk that explores sweet mountains to find his friend Mocha.</p><p>Different types of powerups will help you through your journey, but beware of the bad thoughts monsters !</p><p>You can play by downloading the game on GitHub.</p>',
      fr: '<p><strong>Find Mocha</strong> a été mon projet personnel préféré jusqu\'à présent. En effet, la motivation pour ce projet était au départ de le livrer en cadeau à un ami très proche. Cela explique d\'ailleurs pourquoi la motivation de départ que j\'avais pour celui-ci était si élevée.</p><p>Dans ce petit jeu de plateforme fait avec le moteur Unity, vous incarnez un petit ours nommé Milk qui explore des montagnes sucrées pour retrouver son ami Mocha.</p><p>Divers types de powerups vous aideront dans votre voyage, mais attention aux monstres de mauvaises pensées !</p><p>Vous pouvez y jouer en téléchargeant le jeu sur GitHub.</p>'
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
    technologies: [
      'Gameplay Programming',
      'Unreal Engine 5',
      'C++',
      'GIT',
      'GIT LFS'
    ],
    actions: [
      {
        type: 'LINK-NT',
        link: '/assets/doc/rupture-report.pdf'
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
    description: {
      en: '<p><strong>Rupture</strong> is a project carried out by a group of 4 students as part of a training as a digital engineer at Télécom SudParis.</p><p>In this narrative-style game, you embody the point of view of a humble robot observing the status of society in the near future. While your simple mission is to help a young couple, your task then unexpectedly metamorphoses into a much more important one than mere entertainment.</p><p>The primary objective of this project was notably to learn how to use the UnrealEngine 5 engine to create an impactful video game on the theme of Sustainable Development.</p><p>The report of the project is available.</p>',
      fr: '<p><strong>Rupture</strong> est un projet réalisé par un groupe de 4 étudiants dans le cadre d\'une formation d\'ingénieur du numérique à Télécom SudParis.</p><p>Dans ce jeu de type narratif, vous incarnez le point de vue d\'un modeste robot observant l\'état de la société dans un futur proche. Alors que votre mission simple est d\'aider un jeune couple, votre tâche se métamorphose alors de manière inattendue en une mission bien plus importante que de simple divertissement.</p><p>L\'objectif principal de ce projet était notamment d\'apprendre à utiliser le moteur UnrealEngine 5 pour créer un jeu vidéo impactant sur le thème du Développement Durable.</p><p>Le rapport du projet est disponible.</p>'
    }
  },
  {
    id: 'shipping-time',
    pinned: false,
    cover_img: getAssetUrl('shippingTimeCover.jpg'),
    imgs: [
      getAssetUrl('shippingTime.jpg')
    ],
    technologies: [
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
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
    description: {
      en: 'Developed in 48 hours during the <a href="https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/"><strong>INT Game Jam 2024</strong></a> event which was managed autonomously by a group of 9 students, <strong>Shipping Time</strong> was conceived and designed by a team of 5 jammers in this year\'s theme "Playing with time".<p class="mb-4">In this rhythm reaction game, you embody a boat that must control time as much as the weather to deliver packages on time.</p><p class="mb-4">Having had some technical difficulties, the game could not be completed as we wished, but despite some bugs, we were satisfied with a game having a completed gameplay loop and which corresponded globally to what we expected.</p>',
      fr: 'Développé en 48h durant l\'évènement <a href="https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/"><strong>INT Game Jam 2024</strong></a> qui a été géré de façon autonome par un groupe de 9 étudiants, <strong>Shipping Time</strong> a été pensé et conçu par une équipe de 5 jammeurs dans le thème de cette année "Jouer avec le temps".<p class="mb-4">Dans ce jeu de rythme à réaction, vous incarnez un bateau qui doit contrôler le temps autant que la météo pour livrer des colis à temps.</p><p class="mb-4">Ayant eu quelques difficultés techniques, le jeu n\'a pas pu être achevé comme nous l\'avons souhaité, mais malgré quelques bugs, nous avons été satisfaits d\'un jeu ayant une boucle de jeu terminée et qui correspondait au global à ce qu\'on attendait.</p>'
    }
  },
  {
    id: 'the-legend-of-blo',
    pinned: false,
    cover_img: getAssetUrl('theLegendOfBloCover.jpg'),
    imgs: [
      getAssetUrl('theLegendOfBlo.jpg')
    ],
    technologies: [
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
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
    description: {
      en: 'Developed in 48 hours during the <a href="https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/"><strong>Global Game Jam 2024</strong></a>, it is a team of 6 students who gave birth to <strong>The Legend Of Blo : the voice in your head</strong>. A game full of bugs (intentional ?) narrative-oriented where a rather special narrator accompanies you in your quest. This game was therefore created in the face of this year\'s theme "Make me laugh".<p class="mb-4">The project was very fun to produce, we laughed a lot with the whole team during the development of this game. From intentional to unintentional bugs, laughter circulated on the table. We therefore learned to recognize an important thing that day: it\'s not a bug, it\'s a feature !</p><p class="mb-4">We were very proud of the game in its final state. I am personally very proud to have managed to set up the modular dialogue system for this game.</p>',
      fr: 'Développé en 48h durant la <a href="https://gate.wp.telecom-sudparis.eu/projet/int-game-jam/"><strong>Global Game Jam 2024</strong></a>, c\'est une équipe de 6 étudiants qui a donné naissance à <strong>The Legend Of Blo : the voice in your head</strong>. Un jeu fourré de bugs (intentionnels ?) orienté narratif où un narrateur plutôt spécial vous accompagne dans votre quête. Ce jeu a été donc réalisé face au thème de l\'année "Make me laugh".<p class="mb-4">Le projet a été très amusant à produire, nous avons beaucoup rigolé avec toute l\'équipe durant le développement de ce jeu. Allant des bugs intentionnels aux non-intentionnels, les rires circulaient sur la table. Nous avons donc appris à reconnaître une chose importante ce jour là : ce n\'est pas un bug, c\'est une feature !</p><p class="mb-4">Nous avons été très fier du jeu à son état final. Je suis personnellement très fier d\'avoir réussi à monter le système de dialogue modulaire pour ce jeu.</p>'
    }
  },
  {
    id: 'magic-circus',
    pinned: false,
    cover_img: getAssetUrl('magicCircusCover.jpg'),
    imgs: [
      getAssetUrl('magicCircus.jpg')
    ],
    technologies:[
      'Nav-Mesh',
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
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
    description: {
      en: 'This project was carried out in pairs as part of our second year of digital engineering school, in the Game Architectures and Engines course at Télécom SudParis. The creation of this game allowed us to prove our skills in using the Unity engine to create a simple game with minimal quality. For its development, we had to combine our past experiences with Unity with the discovery of new tools made possible by the module offered by our school (notably the Nav-Mesh which allows the navigation of a computer on a terrain).',
      fr: 'Ce projet a été réalisé en duo dans le cadre de notre deuxième année d\'école d\'ingénieur du numérique, dans le cours d\'Architectures et Moteurs de Jeux Vidéos à Télécom SudParis. La création de ce jeu nous a permis de prouver nos compétences en matière d\'utilisation du moteur Unity pour créer un jeu simple présentant une qualité minimale. Pour son développement, nous avons du associer nos expériences passées avec Unity avec la découverte de nouveaux outils permise par le module proposé par notre école (notamment le Nav-Mesh qui permet la navigation d\'un ordinateur sur un terrain).'
    }
  },
  {
    id: 'translimation',
    pinned: false,
    cover_img: getAssetUrl('translimationCover.jpg'),
    imgs: [
      getAssetUrl('translimation.jpg')
    ],
    technologies: [
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
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
    description: {
      en: 'This game was created in 48 hours during the <a href="https://itch.io/jam/unijam2023"><strong>Unijam FR 2023</strong></a> event with this year\'s theme "Everything transforms". The idea we had was then to embody a small laboratory slime where its goal is to forge its own freedom by escaping from the lab. But a slime sticks, and doesn\'t jump high. Don\'t panic, there are sources of heat and cold that will alter your state. Each state has its advantages and disadvantages ! But be careful not to take too long: each room has its own temperature, and it will constantly bring you back to the same state after a certain time.',
      fr: 'Ce jeu a été réalisé en 48 heures à l\'occasion de l\'évènement <a href="https://itch.io/jam/unijam2023"><strong>Unijam FR 2023</strong></a> avec le thème de cette année "Tout se tranforme". L\'idée que nous avons eu a été alors d\'incarner un petit slime de laboratoire où son but est de se forger sa propre liberté en s\'échappant du labo. Mais un slime ça colle, et ça ne saute pas haut. Pas de panique, il existe des sources de chaleur et de froid qui altereront votre état. Chaque état a ses avantages et ses inconvénients ! Mais attention à ne pas prendre trop de temps : chaque salle a sa propre température, et elle vous ramènera constament au même état après un certain temps.'
    }
  },
  {
    id: 'exploding-tree',
    pinned: false,
    cover_img: getAssetUrl('explodingTreeCover.jpg'),
    imgs: [
      getAssetUrl('explodingTree.jpg')
    ],
    technologies: [
      'Unity',
      'C#',
      'GIT'
    ],
    actions: [
      {
        type: 'LINK-NT',
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
    description: {
      en: 'This game was created in 48 hours in a team of 6 during the <a href="https://itch.io/jam/unijam2023"><strong>Global Game Jam 2023</strong></a> with this year\'s theme "Roots". <p class="mb-4">This game jam was the first for the whole team. The use of GIT (file version management software, essential for working in a team) was also new at the time. It was at this moment that we started to take it in hand.</p><p class = "mb-4">The game finally could not be completed, because too many problems were encountered with GIT. Unfortunately, at that time, we did not know enough methods to get out of it, but it is interesting to note that, retrospectively to today, we could have corrected the previous problem with our current mastery.</p>',
      fr: 'Ce jeu a été réalisé en 48 heures dans une équipe de 6 à l\'occasion de la <a href="https://itch.io/jam/unijam2023"><strong>Global Game Jam 2023</strong></a> avec le thème de cette année "Roots". <p class="mb-4">Cette game jam a été la première pour toute l\'équipe. L\'utilisation de GIT (logiciel de gestion de version de fichier, indispensable pour travailler en équipe) était également nouvelle à ce temps. C\'est à ce moment là que nous avons commencé à le prendre en main.</p><p class = "mb-4\">Le jeu n\'a finalement pas pu aboutir, car trop de problèmes avaient été rencontrés avec GIT. Malheureusement, à cet époque, nous ne connaissions pas assez les méthodes pour s\'en sortir, mais il est intéressant de remarquer que, restrospectivement à aujourd\'hui, nous aurions pu corriger le problème d\'avant avec notre maîtrise actuelle.</p>'
    }
  }
];
