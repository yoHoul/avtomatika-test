[![Netlify Status](https://api.netlify.com/api/v1/badges/8915a79a-9242-48c5-b4aa-0f8144b3b85e/deploy-status)](https://app.netlify.com/sites/avtomatika-test/deploys)

### Запуск:

- Установите node modules: `npm i`
- Запустите проект: `ng serve`

### Личный кабинет ИТР
#### Стек:
Angular,RXJS,Prizm
#### Откуда брать данные:
можно просто от API-сервиса отправлять просто json-моки
Будет плюсом использование MSW (Mock Service Worker - API mocking library for browser and Node.js (mswjs.io))
#### Описание:
Необходимо создать личный кабинет инженерно-технических работников на заводе. На интерфейсе необходимо создать 
возможность выбора персонала. При переходе на каждую карточку реализовать форму запроса пароля. На карточке должны быть 
отображена сначала основная информация (Верхние карточки). Далее при прокручивании появляется более подробная аналитика 
по месту работы. Ниже идет журнал смен с возможностью выгрузки в Excel
####Макет:
https://www.figma.com/file/uC9FG28WeeGIkThy6xhFo3/%D0%98%D1%82%D0%BE%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_-%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82-2
?node-id=0%3A1&t=vRrVqrEnv6rlKgO4-1

### Примечание
Проект развернут на Netlify по ссылке: https://avtomatika-test.netlify.app
