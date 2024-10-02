# 📋 TodoList - Projet Django & React

Bienvenue dans mon premier projet de développement web combinant **Django** et **React** ! Ce projet est une application de liste de tâches (Todo List) permettant aux utilisateurs de gérer leurs tâches quotidiennes de manière efficace.

## 🚀 **Fonctionnalités**

- **Ajouter une tâche** : Créez de nouvelles tâches à accomplir.
- **Modifier une tâche** : Mettez à jour les détails de vos tâches existantes.
- **Supprimer une tâche** : Enlevez les tâches que vous avez terminées ou qui ne sont plus nécessaires.
- **Marquer comme complétée** : Indiquez quelles tâches ont été réalisées.

## 🛠 **Technologies Utilisées**

- **Backend** : [Django](https://www.djangoproject.com/) - Framework Python pour le développement rapide de sites web.
- **Frontend** : [React](https://reactjs.org/) - Bibliothèque JavaScript pour la création d'interfaces utilisateur interactives.
- **Base de données** : SQLite (par défaut avec Django)
- **Gestion de l'état** : Redux (si applicable)
- **Autres** : Axios pour les requêtes HTTP, etc.

## 📦 **Installation**

### Prérequis

- **Python** (version 3.6 ou supérieure)
- **Node.js** et **npm** (version 12 ou supérieure)
- **Git**

### Étapes

1. **Cloner le repository**
    ```bash
    git clone https://github.com/VOTRE_USERNAME/TodoList.git
    cd TodoList
    ```

2. **Configurer le backend Django**
    ```bash
    cd backend
    python -m venv env
    source env/bin/activate  # Sur Windows : env\Scripts\activate
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver
    ```

3. **Configurer le frontend React**
    ```bash
    cd ../frontend
    npm install
    npm start
    ```

4. **Accéder à l'application**
    - Backend : [http://localhost:8000](http://localhost:8000)
    - Frontend : [http://localhost:3000](http://localhost:3000)

## 📝 **Usage**

Une fois l'application lancée, vous pouvez :

- Ajouter de nouvelles tâches en remplissant le formulaire et en cliquant sur "Ajouter".
- Modifier une tâche existante en cliquant sur le bouton "Modifier" à côté de la tâche.
- Supprimer une tâche en cliquant sur le bouton "Supprimer".
- Marquer une tâche comme complétée en cochant la case correspondante.

## 🛡 **Licence**

Ce projet est sous licence [MIT](LICENSE).

## 🙏 **Remerciements**

Merci d'avoir visité mon projet ! N'hésitez pas à ouvrir des issues ou à proposer des améliorations via des pull requests.
