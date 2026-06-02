# Brainstorm : Design du Site Zig-Zag Transformer Calculator

## Contexte
Un site destiné à présenter et calculer les paramètres d'un transformateur Zig-Zag. Le contenu est hautement technique avec des formules mathématiques, des tableaux comparatifs et des sections théoriques. L'audience est composée d'ingénieurs et de techniciens qui valorisent la précision et la clarté.

---

<response>
<probability>0.08</probability>
<text>

### Approche 1 : Minimalisme Technique Scandinave

**Design Movement:** Scandinavian Minimalism avec influences de design suisse (grille, typographie précise)

**Core Principles:**
1. Clarté absolue : chaque élément a une fonction précise
2. Espace blanc généreux : respiration visuelle entre sections
3. Typographie hiérarchique : contraste fort entre titres et corps
4. Palette neutre avec accent technique : gris, blanc, bleu acier

**Color Philosophy:**
- Fond : Blanc pur (#FFFFFF) ou gris très clair (#F8F9FA)
- Texte principal : Gris foncé (#2C3E50)
- Accent : Bleu acier (#1E5A8E) pour les formules et éléments interactifs
- Secondaire : Gris moyen (#95A5A6) pour les annotations
- Intention : Confiance, rigueur, professionnalisme

**Layout Paradigm:**
- Grille 12 colonnes stricte, alignement parfait
- Sections empilées verticalement avec séparation claire
- Sidebar gauche pour navigation (table des matières)
- Contenu principal centré avec max-width 900px
- Cartes distinctes pour chaque cas (Standard vs Optimisé)

**Signature Elements:**
1. Ligne verticale fine (1px) à gauche de chaque section majeure
2. Badges de couleur pour les cas (bleu pour Standard, vert pour Optimisé)
3. Icônes minimalistes (formule, graphique, tableau) en gris acier

**Interaction Philosophy:**
- Transitions douces (200ms) au survol
- Surlignage subtil des formules au survol
- Pas d'animations spectaculaires, juste de la fluidité
- Tooltips au survol sur les symboles mathématiques

**Animation:**
- Entrée des sections : fade-in + slide-up (300ms, ease-out)
- Survol des cartes : légère élévation (box-shadow) + changement de couleur d'accent
- Transitions de contenu : cross-fade (200ms)

**Typography System:**
- Titres : IBM Plex Sans Bold (700) pour structure, 32px/28px/24px
- Sous-titres : IBM Plex Sans SemiBold (600), 18px
- Corps : IBM Plex Sans Regular (400), 16px
- Formules : IBM Plex Mono (code), 14px
- Annotations : IBM Plex Sans (400), 13px

</text>
</response>

<response>
<probability>0.07</probability>
<text>

### Approche 2 : Néo-Brutalism Technique

**Design Movement:** Néo-Brutalism avec influences de design industriel (formes géométriques, textures brutes)

**Core Principles:**
1. Honnêteté structurelle : les éléments révèlent leur fonction
2. Géométrie forte : carrés, rectangles, lignes épaisses
3. Contraste maximal : noir/blanc avec rouge accent
4. Texture et matérialité : bordures épaisses, ombres dures

**Color Philosophy:**
- Fond : Noir profond (#0A0E27) ou très foncé
- Texte : Blanc pur (#FFFFFF)
- Accent primaire : Rouge-orange (#E74C3C) pour les valeurs critiques
- Accent secondaire : Gris clair (#ECF0F1) pour les éléments secondaires
- Intention : Puissance, clarté, impact visuel

**Layout Paradigm:**
- Grille asymétrique avec blocs de tailles variées
- Bordures épaisses (3-4px) séparant les sections
- Colonnes décalées pour dynamisme
- Formules dans des boîtes avec bordure rouge épaisse
- Tableaux avec fond alternant noir/gris foncé

**Signature Elements:**
1. Bordures épaisses rouges autour des formules principales
2. Blocs de couleur pleine pour les cas (noir + accent)
3. Typographie en majuscules pour les titres de section

**Interaction Philosophy:**
- Interactions directes et visibles
- Changement de couleur au survol (inversion partielle)
- Pas de subtilité, l'interaction doit être évidente
- Clics produisent des feedbacks visuels forts

**Animation:**
- Entrée : slide-in depuis les côtés (400ms, ease-in-out)
- Survol : inversion de couleur ou changement de bordure
- Transitions : cut (changement immédiat) ou fade (100ms)
- Aucune animation douce, juste des changements directs

**Typography System:**
- Titres : Courier New Bold ou Space Mono Bold (700), 40px/32px/24px
- Sous-titres : Space Mono SemiBold (600), 20px
- Corps : Courier New Regular (400), 16px
- Formules : IBM Plex Mono (monospace), 15px
- Annotations : Space Mono (400), 13px

</text>
</response>

<response>
<probability>0.09</probability>
<text>

### Approche 3 : Design Système Moderne Gradient

**Design Movement:** Contemporary Design System avec gradients subtils et profondeur (inspiré par Material Design 3 et Apple)

**Core Principles:**
1. Hiérarchie par profondeur : gradients et ombres créent la perspective
2. Fluidité : transitions douces entre états
3. Accessibilité : contraste élevé mais élégant
4. Modularité : composants réutilisables et cohérents

**Color Philosophy:**
- Fond : Gradient subtil de blanc (#FFFFFF) à bleu très clair (#F0F7FF)
- Texte : Bleu-noir (#1A2332)
- Accent primaire : Bleu vibrant (#0066FF) avec gradient
- Accent secondaire : Vert menthe (#00D084) pour les résultats optimisés
- Intention : Modernité, clarté, optimisme technique

**Layout Paradigm:**
- Grille fluide avec colonnes responsives
- Cartes flottantes avec ombres graduées
- Sections avec fond semi-transparent (glassmorphism)
- Formules dans des conteneurs avec gradient subtil
- Comparaison côte-à-côte avec séparation visuelle douce

**Signature Elements:**
1. Cartes avec gradient de fond (blanc → bleu clair)
2. Icônes avec dégradé de couleur
3. Lignes de séparation avec gradient (transparent → couleur → transparent)

**Interaction Philosophy:**
- Interactions fluides et prévisibles
- Feedback immédiat au survol
- Animations qui guident l'attention
- États clairs (normal, hover, active, disabled)

**Animation:**
- Entrée des sections : scale-up + fade-in (350ms, cubic-bezier(0.34, 1.56, 0.64, 1))
- Survol des cartes : élévation + changement de gradient (200ms)
- Transitions de contenu : dissolve (250ms)
- Pulse subtil sur les éléments importants

**Typography System:**
- Titres : Poppins Bold (700) ou Sora Bold, 36px/28px/24px
- Sous-titres : Poppins SemiBold (600), 20px
- Corps : Inter Regular (400), 16px
- Formules : IBM Plex Mono (400), 14px
- Annotations : Inter (400), 13px

</text>
</response>

---

## Sélection

**Approche retenue : Minimalisme Technique Scandinave (Approche 1)**

Cette approche est la plus adaptée au contexte technique et à l'audience d'ingénieurs. Elle privilégie la clarté, la précision et la confiance, tout en offrant une expérience utilisateur professionnelle et agréable. La palette neutre avec accent bleu acier renforce la crédibilité technique, tandis que l'espace blanc généreux facilite la lecture de contenu complexe.

**Justification :**
- Les formules mathématiques et tableaux demandent une présentation claire et organisée
- L'audience valorise la rigueur et la précision, pas la fantaisie visuelle
- La navigation latérale (sidebar) facilite l'accès aux différentes sections
- Les transitions douces créent une expérience fluide sans distraire
- La typographie hiérarchique guide naturellement le lecteur

