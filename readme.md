# Week 2 Bootacamp

Ejercicios semana 2 . Bootcamp Madrid

## Configuracion

- .editorconfig
- .gitignore
- package.json (Add Prettier)
- Instalar dependecias desde package.json `npm i`
- Crear repo `git init`
- Instal de eslint `npm i -D eslint`
- Configuracion del eslint `npx eslint --init`
- Añadir `npm i -D eslint-config-prettier`
- Incluir en eslint.json "prettier" como ultima extension


## jest unstall / setup

- 'npm i -D jest @types/jest  @babel/plugin-transform-modules-commonjs'

- .elintrc.json

``` json
  "env": {
    "jest": true
  },


  ``` jsconfig.json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}

``` packjson

"babel": {
    "env": {
      "test": {
        "plugins": [
          "@babel/plugin-transform-modules-commonjs"
        ]
      }
    }
  }

-
