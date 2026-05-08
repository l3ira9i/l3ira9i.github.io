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

---
*Ce projet a été construit pour être facilement maintenable : si vous souhaitez modifier un texte à l'avenir, il suffit de changer les fichiers JSON dans `src/locales/` !*
