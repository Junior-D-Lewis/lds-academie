import React from "react";
import avatar from "../../assets/avatar.png";
import ChatBox from "./ChatBox";
import powerBILogo from "../../assets/pwi.jpg";

export default function index() {
  return (
    <div className="h-full grid grid-cols-4 p-6 gap-5">
      <div className=" grid-rows-2 p-6">
        <img src={powerBILogo} alt="Power BI Logo" />
        <div className="py-3">
          <h1 className="font-semibold text-2xl"> TABLE DE MATIERE </h1>
          <div className="mt-4 h-[40rem] overflow-scroll 2">
            <ol>
              <li>
                <h2 className="font-semibold text-2xl">
                  Introduction à Power BI
                </h2>
                <ul>
                  <li>Qu'est-ce que Power BI ?</li>
                  <li>
                    Composants de Power BI (Power BI Desktop, Power BI Service,
                    Power BI Mobile)
                  </li>
                  <li>Cas d'usage et avantages</li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Prise en Main de Power BI Desktop
                </h2>
                <ul>
                  <li>Installation et configuration de Power BI Desktop</li>
                  <li>Navigation dans l'interface utilisateur</li>
                  <li>Concepts de base des rapports et visualisations</li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Connexion aux Sources de Données
                </h2>
                <ul>
                  <li>
                    Importation de données à partir de fichiers Excel et CSV
                  </li>
                  <li>Connexion à des bases de données SQL</li>
                  <li>
                    Utilisation de connecteurs pour des services en ligne et Big
                    Data
                  </li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Modélisation de Données
                </h2>
                <ul>
                  <li>Principes de la modélisation de données</li>
                  <li>Création de tables et relations</li>
                  <li>
                    Utilisation de DAX (Data Analysis Expressions) pour créer
                    des calculs et des mesures
                  </li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Création de Visualisations
                </h2>
                <ul>
                  <li>
                    Exploration des différents types de graphiques et
                    visualisations
                  </li>
                  <li>
                    Personnalisation des graphiques pour la clarté et l'impact
                  </li>
                  <li>
                    Meilleures pratiques pour la conception de tableaux de bord
                  </li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Exploration des Données avec Power BI
                </h2>
                <ul>
                  <li>Utilisation des filtres et des slicers</li>
                  <li>
                    Drill-down et drill-through pour des analyses détaillées
                  </li>
                  <li>Création de rapports interactifs</li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Publication et Partage de Rapports
                </h2>
                <ul>
                  <li>
                    Publication de rapports depuis Power BI Desktop vers Power
                    BI Service
                  </li>
                  <li>Configuration des actualisations de données</li>
                  <li>
                    Partage de rapports et de dashboards avec des utilisateurs
                  </li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Power BI Service et Collaboration
                </h2>
                <ul>
                  <li>Collaboration dans Power BI Service</li>
                  <li>Utilisation des applications mobiles Power BI</li>
                  <li>Gestion de la sécurité et des accès</li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Automatisation et Actualisation des Données
                </h2>
                <ul>
                  <li>
                    Automatisation des actualisations de données avec des
                    gateways
                  </li>
                  <li>Paramétrage des actualisations programmées</li>
                  <li>Traitement des erreurs d'actualisation</li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Avancée avec Power BI{" "}
                </h2>
                <ul>
                  <li>
                    Utilisation avancée de DAX et création de modèles complexes
                  </li>
                  <li>Techniques avancées de visualisation</li>
                  <li>Introduction à Power BI Embedded et à l'API Power BI</li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">
                  Meilleures Pratiques et Conseils
                </h2>
                <ul>
                  <li>Gestion des performances de Power BI</li>
                  <li>
                    Astuces pour un storytelling efficace avec les données
                  </li>
                  <li>Ressources pour une autoformation continue</li>
                </ul>
              </li>
              <li>
                <h2 className="font-semibold text-2xl">Projet Final </h2>
                <ul>
                  <li>
                    Création d'un rapport interactif de bout en bout sur un cas
                    d'usage réel
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col-span-2 ">
        <video width="100%" height="100%" autoPlay controls>
          <source src="" type="mp4" />
          Unsupportable media
        </video>
        <div className="grid mt-10  grid-flow-row">
          <div className="flex justify-center ">
            <h1 className="text-3xl font-bold uppercase">
              Ce que vous allez apprendre
            </h1>
          </div>
          <div className="grid grid-cols-2 p-2 gap-2 text-sm">
            <div className="border-2 w-full">
              <ol>
                <li>
                  <h4>Introduction à Power BI</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>
                      Comprendre les bases de Power BI et ses applications.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>
                          Historique de Power BI et son positionnement dans le
                          marché des outils BI
                        </li>
                        <li>
                          Tour d'horizon de Power BI Desktop, Service, et
                          Mobile.
                        </li>
                        <li>
                          Cas d'usage courants dans différents secteurs
                          d'activité.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Prise en Main de Power BI Desktop</h4>
                  <li>
                    <strong>Objectif: </strong>
                    Installer Power BI Desktop et se familiariser avec
                    l'interface.
                  </li>
                  <li>
                    <strong>Contenu</strong>
                    <ul>
                      <li>Étapes d'installation de Power BI Desktop.</li>
                      <li>
                        Exploration de l'interface utilisateur : rubans, menus,
                        zones de travail.
                      </li>
                      <li>
                        Création d'un rapport simple pour se familiariser avec
                        l'outil.
                      </li>
                    </ul>
                  </li>
                </li>
                <li>
                  <h4>Connexion aux Sources de Données</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>
                      Apprendre à connecter Power BI à différentes sources de
                      données.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>Importation de données depuis Excel et CSV.</li>
                        <li>Connexion à des bases de données SQL.</li>
                        <li>
                          Utilisation de connecteurs pour des services cloud et
                          big data.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Modélisation de Données</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>
                      Comprendre les fondements de la modélisation de données
                      dans Power BI.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>
                          Principes de base de la modélisation de données.
                        </li>
                        <li>Création et gestion des relations entre tables.</li>
                        <li>
                          Introduction aux expressions DAX pour des calculs
                          simples.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Création de Visualisations</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>Maîtriser la création de
                      visualisations de données dans Power BI.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>
                          Présentation des différents types de graphiques
                          disponibles.
                        </li>
                        <li>
                          Personnalisation des visualisations pour améliorer
                          l'expérience utilisateur.
                        </li>
                        <li>
                          Bonnes pratiques de conception de rapports et
                          dashboards.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Exploration des Données avec Power BI</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>Utiliser les fonctions avancées
                      de Power BI pour l'analyse de données.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>
                          Utilisation de filtres et slicers pour affiner les
                          analyses.
                        </li>
                        <li>
                          Techniques de drill-down et drill-through pour
                          explorer les données en détail.
                        </li>
                        <li>Création de rapports interactifs.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="border-2 w-full">
              <ol>
                <li>
                  <h4>Publication et Partage de Rapports</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>Apprendre à publier et partager
                      des rapports et dashboards.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>
                          Processus de publication des rapports de Power BI
                          Desktop vers Power BI Service.
                        </li>
                        <li>Configuration des actualisations de données.</li>
                        <li>Options de partage et gestion des accès.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Power BI Service et Collaboration</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>Explorer les fonctionnalités de
                      collaboration de Power BI Service.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>
                          Présentation des outils collaboratifs dans Power BI
                          Service.
                        </li>
                        <li>Utilisation des applications mobiles Power BI.</li>
                        <li>
                          Gestion des paramètres de sécurité et de partage.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Automatisation et Actualisation des Données</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>Mettre en place
                      l'automatisation et l'actualisation des données dans Power
                      BI.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>Configuration des gateways de données.</li>
                        <li>Planification des actualisations programmées.</li>
                        <li>
                          Gestion et résolution des erreurs d'actualisation.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Avancée avec Power BI</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>Développer des compétences
                      avancées en Power BI.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>
                          Utilisation avancée de DAX pour des analyses
                          complexes.
                        </li>
                        <li>Techniques avancées de visualisation.</li>
                        <li>
                          Introduction aux fonctionnalités de Power BI Embedded
                          et de l'API Power BI.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Meilleures Pratiques et Conseils</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong>Appliquer les meilleures
                      pratiques pour optimiser l'utilisation de Power BI.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>
                          Conseils sur la gestion des performances de Power BI.
                        </li>
                        <li>Techniques de storytelling avec les données.</li>
                        <li>
                          Ressources pour l'autoformation continue en Power BI.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Projet Final</h4>
                  <ul>
                    <li>
                      <strong>Objectif: </strong> Appliquer les compétences
                      acquises pour créer un projet complet.
                    </li>
                    <li>
                      <strong>Contenu</strong>
                      <ul>
                        <li>Directives pour le projet final.</li>
                        <li>Critères d'évaluation.</li>
                        <li>Exemples de projets réussis.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full grid-rows-2 p-6">
        <img className="w-[30rem] h-[25rem]" src={avatar} alt="" />
        <div className=" mt-12">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
