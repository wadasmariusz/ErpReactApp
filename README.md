# PigeonManager App

### Table of ontent:
***
1. Installation & usage:
    - Pre-requirements,
    - [`IMPORTANT!`] Configuration of the new environment,
    - Build environment,
    - Development environment,
2. Project details:
    - Commonly used libraries
    - Filesystem
3. GIT - branches & commits model


## 1. Installation & usage: 

### Pre-requirements:
- node.js
- `npm` OR `yarn` package manager

### [IMPORTANT] Configuration of the new environment:

1. Create .env files:
    ```
   // using single command...:
   // Linux:
   cp .env.example .env && echo "" >> .env.development && echo "" >> .env.stage && echo "" >> .env.production
   // Windows:
   copy .env.example .env && echo "" >> .env.development && echo "" >> .env.stage && echo "" >> .env.production
   
   // ...or multiple commands:
   // Linux:
   cp .env.example .env
   echo "" >> .env.development
   echo "" >> .env.stage
   echo "" >> .env.production
   // Windows:
   copy .env.example .env
   echo "" >> .env.development
   echo "" >> .env.stage
   echo "" >> .env.production
    ```
2. Setup configuration of .env (you can use any other editor):
    ```
    nano .env
    ```
    **REACT_APP_API_URL** - is the most important config option

### Build environment:

1. Install new packages:
    ```
    // using npm:
    npm install
    
    // using yarn:
    yarn install
    ```
2. Choose one of 3 configs:
    
    **Using NPM...:**
    ```
    // uses only .env config
    npm run build
   
    // uses .env that can be overwritten by .env.development
    npm run install:development
   
    // uses .env that can be overwritten by .env.stage
    npm run install:stage
   
    // uses .env that can be overwritten by .env.production
    npm run install:production
    ```
    **...or YARN:**
    ```
    yarn run build
    yarn run install:development
    yarn run install:stage
    yarn run install:production
    ```

### Development environment:

1. Install new packages:
    ```
    // using npm:
    npm install
    
    // using yarn:
    yarn install
    ```
2. Run your environment:

    ```
    // using npm:
    npm start
    
    // using yarn:
    yarn start
    ```
   
   
## 2. Project details:

### Commonly used libraries:

- [VUEXY](https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/landing/) - template (**NOTE:** TODO: remove FeatherIcons, use bootstrap icons instead)
- [React Query](https://react-query.tanstack.com/guides/queries) - Auto fetch, cache and update data from API (incl. paginate & infinite scroll)
- [React Hook Form](https://react-hook-form.com/api) - form & validation
- [React Input_Select](https://react-select.com) - advanced selects
- [React Beautiful Dnd](https://github.com/atlassian/react-beautiful-dnd) - advanced drag&drop system
- [React Cropper](https://www.npmjs.com/package/react-cropper) - cropping images
- [React Meta Tags](https://www.npmjs.com/package/react-meta-tags) - \<head\> meta tags
- [Reactstrap](https://reactstrap.github.io/components/alerts/) - bootstrap components for React
    
### Filesystem:

   - (this list doesn't include all files & folders)


```
    - /
    - @assets/   // from vuexy
    - app/
        - config/
            - enums/
        - context/
        - crud/   // GET, POST, DELETE, PUT & ReactQuery fetch hooks
        - hooks/
        - redux/
            - <reducerName>/
                - reducers/
                - actions/
                - selectors/
                - utils/
                - <name>Reducer.js
                - <name>Types.js
        - router/
            - components/
            - urls/
        - sockets/
        - utils/
    - components/
        - form/
    - layouts/
    - views/
        - <groupName>/
            // ...without subcatogeory...:
            - Routes/
                - Routes_<name>.js     
            - View_<viewName>/       // "View_Item", "View_Items", "View_Item_Edit", etc...
                - modals/
                    - Modal_<modalName>.js
                - forms/
                    - Form_<formName>.js
                - cards/
                    - <cardName>.js
                - components/
                    - <componentName>.js
                - View_<viewName>.js
            // ... or with subcategory...:
            - <subCategory>/
                - [...same as above...]
```
