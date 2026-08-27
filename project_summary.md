# Résumé de la Création du Portfolio / Portfolio Creation Summary

Ce document retrace l'ensemble des étapes et des choix techniques réalisés depuis le début pour construire ce portfolio bilingue (Français/Anglais) orienté Cybersécurité.

## 1. Analyse du Profil et Extraction du CV
- **Action** : Extraction et analyse du contenu du fichier `Imad_IRAKI_CVFR.pdf`.
- **Résultat** : Identification du profil de Junior Cybersecurity Engineer & SOC Analyst, actuellement en PFE chez BlueSec. Extraction des expériences, compétences (Réseaux, Systèmes, Cybersécurité) et certifications.

## 2. Choix de l'Architecture et du Design
- **Technologies** : Suite à votre demande de créer quelque chose d'impressionnant, l'architecture a basculé vers **React + Vite** pour des performances optimales et des transitions fluides.
- **Esthétique ("SOC / Hacker Theme")** : Mise en place d'un design premium avec un mode sombre profond (`#09090b`), des accents néon (cyan et vert), des effets "Glassmorphism" (verre dépoli) et des animations de terminal et de texte "glitch".

## 3. Configuration du Projet React + Vite
- Création du `package.json` et de la configuration `vite.config.js`.
- Mise en place de `index.html` et du point d'entrée `src/main.jsx`.
- Définition des variables CSS globales dans `src/index.css`.

## 4. Système Multilingue (i18n)
- **Action** : Création d'un Context React personnalisé (`src/context/LanguageContext.jsx`).
- **Résultat** : Les visiteurs peuvent basculer instantanément entre l'anglais et le français sans recharger la page. Les textes sont stockés dynamiquement dans `src/locales/en.json` et `src/locales/fr.json`.

## 5. Développement des Composants (src/components/)
- **Navbar** : Barre de navigation fixe avec effet de flou au défilement, menu responsive pour mobile, et bouton de basculement de langue.
- **Hero** : Section d'accueil avec votre photo (`picture.png`), un effet de texte "glitch" sur votre nom, et une animation de frappe au clavier dans une fenêtre de terminal.
- **About** : Présentation courte de votre passion pour la détection de menaces et l'architecture SIEM.
- **Experience** : Une timeline visuelle mettant en avant votre PFE chez BlueSec et vos stages précédents (Sogertel, CCIS).
- **Skills** : Des barres de progression lumineuses pour évaluer vos compétences en Cybersécurité, Réseaux, Systèmes et Développement.
- **Projects** : Intégration de vos 3 dépôts GitHub avec des liens directs :
  - Architecture Zero Trust pour réseau 5G
  - Supervision et détection d'intrusions (Wazuh + Elasticsearch)
  - Monitoring réseau avec Nagios
- **Contact & Footer** : Liens directs vers votre LinkedIn, GitHub, Email et Téléphone.

## 6. Déploiement et Nom de Domaine (irakiimad.me)
- **Action** : Rédaction des instructions de déploiement dans le Walkthrough.
- **Résultat** : Les étapes détaillées ont été fournies pour héberger le site sur Vercel et le lier à votre nom de domaine Namecheap (`irakiimad.me`) en configurant les enregistrements DNS (A Record et CNAME).

## 7. Optimisation, Mise à Jour et Migration vers GitHub Pages
- **Migration** : Transition de l'hébergement initial vers **GitHub Pages** pour un déploiement continu et automatisé (via GitHub Actions).
- **Correction des Assets** : Résolution des erreurs 404 et des problèmes de type MIME (MIME type errors) en déplaçant les assets (images) vers le dossier `public/` pour garantir des chemins corrects en production.
- **Amélioration UI/UX** : 
  - Affinage des composants (`Experience.jsx`, `Skills.jsx`, `Contact.jsx`) pour une meilleure présentation du contenu.
  - Optimisation des styles globaux et spécifiques (`index.css`, `Hero.css`) pour consolider le thème "Hacker / SOC" (effets glitch, glassmorphism, scan lines).
- **Configuration** : Ajustement de `vite.config.js` et des workflows CI/CD pour s'adapter à l'environnement GitHub Pages.

## 8. Refonte du Profil & Nouvelles Fonctionnalités (Août 2026)
- **Nouveau Positionnement** : Transition du profil orienté "SOC Analyst" vers **Ingénieur Systèmes & Réseaux / Network & Infrastructure Engineer**, tout en conservant une forte spécialisation en Cybersécurité.
- **Mise à Jour du Contenu (CV)** : 
  - Restructuration des compétences en 6 catégories (Systèmes, Réseaux, Sécurité, Supervision, Virtualisation, Programmation).
  - Ajout d'expériences détaillées (stages PFA et expérience Freelance).
  - Ajustement des titres et sections pour correspondre précisément au nouveau CV LaTeX.
- **Améliorations Esthétiques et Techniques** :
  - **Background Animé (Canvas)** : Ajout d'un composant global interactif `AnimatedBackground` (effet de nœuds réseau interconnectés avec parallax au scroll).
  - **Mode Clair / Sombre (Dark/Light Mode)** : Implémentation d'un `ThemeContext` complet avec gestion de variables CSS globales, persistance locale et un toggle dans la barre de navigation.
  - **Design & Layout** : Centrage des contacts, justification du texte "À propos", ajustement des niveaux de flou et de la colorimétrie pour le thème clair.

---
*Ce projet a été construit pour être facilement maintenable : si vous souhaitez modifier un texte à l'avenir, il suffit de changer les fichiers JSON dans `src/locales/` !*
