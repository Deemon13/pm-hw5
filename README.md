# HW5
Homework HW5 consists of the one task.
Topics : JS, Classes, OOP, Modules, HTML5, CSS3.


## Getting started
We will use Parcel for the local depelopment. Follow [the link](https://parceljs.org/getting-started/webapp/) for getting more details

0. Make sure you've installed nodeJS on your system
1. run command `npm install`
2. run command `npm run start`
3. open http://localhost:1234/ in your browser to see the result


### Source files explanation
- `scripts/app.js` is your main JS file. The other js files will be imported into it
- `styles/app.css` is your main CSS file. All styles should be put into this file
- `index.html` includes basic markup you need for developing the app. Normally you don't need to change the file

## Задание
Создать рендерер
на входе получает массив с данными для компонентов
обрабатывает его
на выходе выдает билдер контент страницы

## Требования
HTML/CSS: минимальные, но достаточные для комфортного просмотра результата
JS: программа построена на классах, использовано прототипное подражание, функционал разнесен по модулям  

### Input sources
<details>
    <summary>db.json</summary>

- `COMPONENTS_LIST` массив с объектами Components
- Component item:
  - заголовок
  - данные для компонента
- Types of components
  - TITLE
  - RICH_TEXT
  - IMAGE
  - GALLERY
  - ACTION_BUTTON
</details> 

<details>
   <summary>Дизайн</summary>
  <img src="./assets/design.png" style="width: 100%; height: auto">
</details> 

<details>
  <summary>Орієнтовна структура класів</summary>
  <img src="./assets/classes.png" style="width: 100%; height: auto">

- `Renderer` - entry point, принимает на вход массив
- `Component` резолвет конкретный тип компонента
- `[COMPONENT_TYPE]` имплементация рендеринга конкретного компонента
- `Container` - враппер с кнопками DELETE и SORT и заголовком

- Поля для компонентов
  - TITLE
    - text: input, type=text
  - RICH_TEXT
    - text: textarea
  - IMAGE
    - path: input, type=file
  - GALLERY
    - images: multi IMAGE
  - ACTION_BUTTON
    - name: input, type=text
    - url: input, type=url
</details>


### Info sources
- [learn.javascript.ru](https://learn.javascript.ru/import-export)
- [developer.mozilla.org modules guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)



