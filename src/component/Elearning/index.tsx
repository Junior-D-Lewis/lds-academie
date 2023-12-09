import React from "react";
import avatar from "../../assets/avatar.png";
import ChatBox from "./ChatBox";

export default function index() {
  return (
    <div className="grid grid-cols-4 p-6 gap-5">
      <div className="h-screen grid-rows-2 p-6">
        <div>
          Introduction à Power BI Qu'est-ce que Power BI ? Composants de Power
          BI (Power BI Desktop, Power BI Service, Power BI Mobile) Cas d'usage
          et avantages Prise en Main de Power BI Desktop Installation et
          configuration de Power BI Desktop Navigation dans l'interface
          utilisateur Concepts de base des rapports et visualisations Connexion
          aux Sources de Données Importation de données à partir de fichiers
          Excel et CSV Connexion à des bases de données SQL Utilisation de
          connecteurs pour des services en ligne et Big Data Modélisation de
          Données Principes de la modélisation de données Création de tables et
          relations Utilisation de DAX (Data Analysis Expressions) pour créer
          des calculs et des mesures Création de Visualisations Exploration des
          différents types de graphiques et visualisations Personnalisation des
          graphiques pour la clarté et l'impact Meilleures pratiques pour la
          conception de tableaux de bord Exploration des Données avec Power BI
          Utilisation des filtres et des slicers Drill-down et drill-through
          pour des analyses détaillées Création de rapports interactifs
        </div>
        <div>
          Publication et Partage de Rapports Publication de rapports depuis
          Power BI Desktop vers Power BI Service Configuration des
          actualisations de données Partage de rapports et de dashboards avec
          des utilisateurs Power BI Service et Collaboration Collaboration dans
          Power BI Service Utilisation des applications mobiles Power BI Gestion
          de la sécurité et des accès Automatisation et Actualisation des
          Données Automatisation des actualisations de données avec des gateways
          Paramétrage des actualisations programmées Traitement des erreurs
          d'actualisation Avancée avec Power BI Utilisation avancée de DAX et
          création de modèles complexes Techniques avancées de visualisation
          Introduction à Power BI Embedded et à l'API Power BI Meilleures
          Pratiques et Conseils Gestion des performances de Power BI Astuces
          pour un storytelling efficace avec les données Ressources pour une
          autoformation continue Projet Final Création d'un rapport interactif
          de bout en bout sur un cas d'usage réel
        </div>
      </div>
      <div className="col-span-2 h-72">
        <video width="100%" height="100%" autoPlay controls>
          <source src="" type="mp4" />
          Unsupportable media
        </video>
        <div>
          Introduction à Power BI Objectif : Comprendre les bases de Power BI et
          ses applications. Contenu : Historique de Power BI et son
          positionnement dans le marché des outils BI. Tour d'horizon de Power
          BI Desktop, Service, et Mobile. Cas d'usage courants dans différents
          secteurs d'activité. Prise en Main de Power BI Desktop Objectif :
          Installer Power BI Desktop et se familiariser avec l'interface.
          Contenu : Étapes d'installation de Power BI Desktop. Exploration de
          l'interface utilisateur : rubans, menus, zones de travail. Création
          d'un rapport simple pour se familiariser avec l'outil. Connexion aux
          Sources de Données Objectif : Apprendre à connecter Power BI à
          différentes sources de données. Contenu : Importation de données
          depuis Excel et CSV. Connexion à des bases de données SQL. Utilisation
          de connecteurs pour des services cloud et big data. Modélisation de
          Données Objectif : Comprendre les fondements de la modélisation de
          données dans Power BI. Contenu : Principes de base de la modélisation
          de données. Création et gestion des relations entre tables.
          Introduction aux expressions DAX pour des calculs simples. Création de
          Visualisations Objectif : Maîtriser la création de visualisations de
          données dans Power BI. Contenu : Présentation des différents types de
          graphiques disponibles. Personnalisation des visualisations pour
          améliorer l'expérience utilisateur. Bonnes pratiques de conception de
          rapports et dashboards. Exploration des Données avec Power BI Objectif
          : Utiliser les fonctions avancées de Power BI pour l'analyse de
          données. Contenu : Utilisation de filtres et slicers pour affiner les
          analyses. Techniques de drill-down et drill-through pour explorer les
          données en détail. Création de rapports interactifs.
        </div>
      </div>
      <div className="h-screen grid-rows-2 p-6">
        <img className="w-[30rem] h-[25rem]" src={avatar} alt="" />
        <div className=" mt-12">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
