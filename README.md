# Bettenbelegungsmonitoring für Krankenhäuser

Gerade bei dem aktuellen Notstand ist es sehr unübersichtlich zu Erfahren in welchem Krankenhaus gerade Betten frei sind. Auch ist es schwierig, die Entwicklung der Belegung dieser Betten über die Zeit genau zu erfassen und auszuwerten. Hier soll unser Projekt ansetzen.


![Demo](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/968/606/datas/original.png)

## Devpost Projekt

* [Link](https://devpost.com/software/0_24_krankenhauser_bettenverfugbarkeitsvisualisierung) zum Devpost-Projekt


## Dependencies

* nodejs / npm
* yarn
* python3
* python3-pip


## Build

```bash
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..
npm install

```
## Start

### `yarn start-api`

Starts the python based flask backend api on localhost:5000.

### `yarn start`

Starts the main app on localhost:3000.

## Production

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
