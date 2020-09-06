# Installation

```shell
# Install dependencies
npm install

# Run development build
npm run dev

# Build for production
npm run build

# Serve production build
npm run start

# Generate static SPA without SSR
npm run export
```

## Commit syntax 

* :blue_book: Documentation
* :white_check_mark: Feature
* :hammer_and_wrench: Fix
* :corn: Miscellaneous
* :recycle: Refactor
* :art: Style
* :milky_way: Release

## TODO

- [X] Create skeleton structure
- [X] Fetch and display a table of users at `/users`
- [X] Edit/Delete said users through REST and display call status
    * (fake latency on server via setTimeout)
- [X] Display 5 latest user posts at `/users/[id]`

---

# Задание

Написать интерфейс для управления пользователями в рамках одного из публичных API,
например `jsonplaceholder.typicode.com`.

- [X] Организовать получение пользователей (`jsonplaceholder.typicode.com/users`) и их отображение
      на странице `/users` в виде таблицы. Обязательные колонки: `id`, `username`, `email`.
- [X] Пользователей можно удалять и/или редактировать. Данные на `jsonplaceholder` и в таблице не обновятся,
      но на бэкенд должны уйти соответствующие запросы. Интерфейс отображает статус запроса (успешен или ошибочен).
- [X] Можно посмотреть подробную информацию по пользователю -- ту, что также приходит с бэкенда.
      Отображать на отдельной странице с адресом `/users/{id}`.
- [X] На странице пользователя можно посмотреть его последние 5 постов (`jsonplaceholder.typicode.com/posts`).

## Дополнительно

- [X] Перенести запросы на MobX
- [X] Отключить SSR

# О коде

Данный каркас проекта является лишь примером того, как может выглядеть основа выполненного задания.
Можно как использовать его, так и взять что-то более привычное, например CRA.

Крайне желательным является использование следующих библиотек:

- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [MobX](https://mobx.js.org/)

Можно взять любой из компонентных фреймворков/библиотек.
Например, [Material-UI](https://material-ui.com/) или [Ant Design](https://ant.design/).
Лучше брать то, с чем имеется знакомство.

# О степени выполнения

Нет необходимости в доскональном и полном выполнении задания, это может потребовать серьёзного времени.
Задача заключается в том, чтобы показать, с какими технологиями Вы знакомы, использовали ли их
или можете быстро научиться использовать. Понять, как в целом обстоят дела с культурой написания (React-)приложений.

Даже если Вы с чем-то не знакомы, все из вышеприведённых библиотек обладают отличной документацией,
и данная задача покажет способность к обучению. В таком случае лучше потратьте время на написание
качественного кода, опустив некоторую часть функционала.
