#**Formation Typescript avec la DOC et GRAFIKAR.FR**

##I- *Installation et utilisation*

###1- Nous avons initié un projet avec la commande : 
```
npm init -y
```
>On a maintenant un fichier package.json

###2- Instalation de la depandance typescript : 
```
npm install typescript --save-dev
```
>Cela va creer un dossier node_modules, et dans le fichier package.json , on a trouer typescript et sa version installé, 

###3- Creer un fichier index.html pour le point d entré de notre projet et la ou nous allons creer notre squelette 

###4- Creation de notre premier fichier "app.ts" pour le compiler en javascrit on utiliser la commande : 
```
npx tsc app.ts //car notre fichier se trouve a la racine de notre projet
```
>cela va generer automatiquement un fichier app.js a la racine ,puis charger le fichier dans notre "index.html"

###5- creation du dossier "src" et deplacement de notre "app.ts" la dedans , dans ce cas nous allons re-specifier un dossier dist pour mettre notre "app.js" pour la compilation pour cela donc on execute la commande : 
```
npx tsc src/app.ts --outDir dist // copilation du app.ts dans le dossier externe qui a s'appeler dist
```

###6- creation d un fichier de configuration pour faciliter le travail en equipe , un fichier appelé : 
```
tsconfig.json //voir ce fichier pour plus d'explication
```
###7- comment on run notre fichier app.ts ? 
```
npx tsc //pour run une seule fois 
npx tsc --watch //run en mode web server, relance autmatiquement la compilation
```
