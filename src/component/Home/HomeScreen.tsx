import React from "react";
import { Carousel, initTE } from "tw-elements";

import info1 from "../../assets/info-1.png";
import info2 from "../../assets/info-2.png";
import reseau from "../../assets/reseaux.png";
import telecom from "../../assets/telecom.png";
import ia from "../../assets/ia.png";
initTE({ Carousel });

export default function HomeScreen() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={info1} className="block h-[28rem] w-full" alt="" />
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={info2} className="block h-[28rem] w-full" alt="" />
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={ia} className="block h-[28rem] w-full" alt="" />
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={reseau} className="block h-[28rem] w-full" alt="" />
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={telecom} className="block h-[28rem] w-full" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-4 p-6 gap-5 text-xl font-semibold">
        <div className="h-72 grid-rows-2 p-6">
          <h2 className="ml-[5rem]">ACTUALITES</h2>
          <div className="border-2 ">
            <p>
              Une récente actualité dans le domaine du réseau informatique
              concerne la découverte d'une faille de sécurité importante dans le
              protocole Bluetooth. Cette vulnérabilité, identifiée sous le nom
              CVE-2023-45866, affecte des millions de systèmes fonctionnant sous
              Android, Linux, MacOS et iOS. Elle permet à un attaquant de
              contourner le processus d'authentification Bluetooth et d'injecter
              des frappes clavier, ce qui pourrait entraîner l'installation
              d'applications malveillantes, l'exécution de commandes arbitraires
              ou le transfert de messages sans la confirmation de l'utilisateur.
              La faille a été rapportée aux fournisseurs impactés durant l'été
              2023, et des correctifs ont été publiés depuis début décembre
              2023. Il est vivement conseillé aux utilisateurs de mettre à jour
              leurs systèmes pour se protéger contre cette vulnérabilité. Cela
              touche en particulier les smartphones Google Pixel, diverses
              distributions d'Ubuntu, certains modèles de MacBooks et l'iPhone
              SE, entre autres. Il est à noter que les appareils Android
              fonctionnant sur des versions antérieures à Android 11 pourraient
              ne pas recevoir de correctif pour cette faille.
            </p>
          </div>
        </div>
        <div className="col-span-2 h-full py-20">
          <p>
            Chers Participants, Bienvenue à LDS académie, où notre mission est
            de vous ouvrir les portes d'un apprentissage innovant et impactant.
            En tant que fondateur, je suis ravi de vous accueillir dans notre
            communauté dédiée à l'excellence éducative. Votre décision de
            rejoindre notre programme marque le début d'un voyage passionnant
            dans le monde de la connaissance et du développement professionnel.
            Chez LDS académie, nous croyons fermement que l'éducation est un
            levier puissant de transformation personnelle et professionnelle.
            C'est pourquoi nous nous engageons à vous fournir une expérience
            d'apprentissage de la plus haute qualité, encadrée par des experts
            reconnus dans leur domaine. Nos formations sont conçues pour
            répondre aux défis et opportunités du monde moderne. Que vous
            cherchiez à acquérir de nouvelles compétences, à approfondir votre
            expertise, ou à explorer de nouveaux horizons professionnels, notre
            objectif est de vous accompagner à chaque étape de votre parcours.
            Nous sommes fiers de vous proposer un environnement d'apprentissage
            immersif, inclusif, dynamique et stimulant, où chaque participant
            peut s'épanouir et réaliser son potentiel. Votre succès est notre
            plus grande récompense, et nous sommes impatients de voir ce que
            vous allez accomplir. Je vous encourage à profiter pleinement des
            ressources, des supports et des opportunités de networking que nous
            offrons. N'hésitez pas à partager vos idées, vos questions et vos
            aspirations - votre participation active est essentielle à la
            richesse de l'expérience d'apprentissage pour tous. Bienvenue dans
            cette aventure éducative. Ensemble, explorons, apprenons et
            grandissons. Cordialement, Cyrille COSTA Fondateur de LDS académie
          </p>
          <div>
            <h1>Temoignage</h1>
            <p>
              Témoignage sur la Qualité de la Formation "J'ai été impressionné
              par la qualité et la profondeur du programme de formation. Chaque
              module était bien structuré, pertinent et immédiatement applicable
              à mon travail. C'était une expérience d'apprentissage vraiment
              enrichissante qui a dépassé mes attentes." Témoignage sur
              l'Expertise des Formateurs "Les formateurs étaient exceptionnels -
              non seulement experts dans leur domaine, mais aussi incroyablement
              passionnés et engageants. Ils ont su rendre les concepts complexes
              accessibles et intéressants, ce qui a grandement facilité mon
              apprentissage." Témoignage sur l'Impact Professionnel "Cette
              formation a eu un impact significatif sur ma carrière. Les
              compétences et connaissances que j'ai acquises m'ont permis de
              prendre des initiatives plus audacieuses dans mon travail et
              d'obtenir une promotion peu de temps après avoir terminé le
              cours." Témoignage sur l'Expérience Globale "Du début à la fin,
              mon expérience avec cet organisme de formation a été
              exceptionnelle. L'attention portée aux besoins des apprenants, le
              contenu de qualité, et le soutien continu m'ont vraiment aidé à
              maximiser mon apprentissage." Témoignage sur les Ressources et
              Matériels de Formation "Les ressources fournies étaient de premier
              ordre. Des supports de cours détaillés aux études de cas
              pratiques, tout était bien pensé et extrêmement utile. Ces
              matériels sont devenus une référence précieuse dans mon travail
              quotidien." Témoignage sur le Réseau et les Opportunités
              Professionnelles "En plus d'une formation de qualité, j'ai eu
              l'opportunité de rencontrer des professionnels de divers horizons.
              Le réseau que j'ai construit durant cette formation est
              inestimable et a ouvert de nombreuses portes dans ma carrière."
              Témoignage sur l'Innovation et les Méthodes Pédagogiques
              "L'approche pédagogique de l'organisme était innovante et
              engageante. Les méthodes interactives et les projets de groupe ont
              non seulement facilité l'apprentissage, mais ont aussi rendu
              l'expérience très agréable." Témoignage sur la Flexibilité et
              l'Accessibilité "La flexibilité offerte par l'organisme pour
              suivre les cours en ligne à mon propre rythme a été un facteur clé
              pour moi. Cela m'a permis de concilier formation professionnelle
              et obligations personnelles sans stress."
            </p>
          </div>
        </div>
        <div className="h-72 grid-rows-2 p-6">
          <h2 className="ml-[5rem]">FORUMS: A la une</h2>
          <div className="border-2">
            <p>
              Les dernières nouvelles dans le domaine de l'informatique
              annoncent l'arrivée prévue de Windows 12 en juin 2024. Cette
              nouvelle version du système d'exploitation de Microsoft mettra
              fortement l'accent sur l'intégration de l'intelligence
              artificielle (IA) dans presque tous les aspects du système. On
              attend de cette mise à jour qu'elle inclue des modèles
              linguistiques étendus et qu'elle utilise l'IA pour accélérer et
              optimiser le fonctionnement de nombreux logiciels embarqués.
              Windows 12 devrait également améliorer le support natif de
              l'architecture ARM et inclure le SoC Qualcomm Snapdragon Elite X,
              ce qui laisse présager des performances accrues et une intégration
              plus poussée des fonctionnalités basées sur l'IA. Les fabricants
              de composants, comme Intel avec ses processeurs Meteor Lake et AMD
              avec ses Ryzen 8000, se préparent à intégrer les instructions
              spécifiques à cette nouvelle version de Windows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
