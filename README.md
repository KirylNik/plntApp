## Explanation

Привет MOBYRIX! ;-)

Так как в задании не было каких-то дополнительных деталей/требований/ограничений я сделал несколько допущений:

Касательно технологий я использовал несколько дополнительных,
но далеко не обязательных для такого маленького приложеня вещей,
которые скорее удобны мне и немного демонстрируют то, с чем я работаю каждый день:

1. Typescript
2. CSS modules
3. SCSS

Так же я исходил из того, что переносы текста в макетах не являются строгими бизнес-требованиями.
Хотя я нередко встречал и обратное, представляю как это реализовать.

В силу ограниченного у меня колличества времени я не успел сделать несколько плюшек которые, вероятно,
следовало бы сделать в продакшене, например веб-доступность (A11Y) или адаптивные размеры шрифтов и отсутоп на rem.
Так же следовало бы причесать стили (вероятно некоторые из них избыточны) + на реальных проектах
старась всё в разумных пределах покрывать комментариями (хотя тут и комментировать особо нечего).
Некоторые вещи можно было бы сделать компактнее, но я старался использовать более абстрактный подход
(для гибкости и теоретического переиспользования в будущем).

SourceMap из build не удалял.
На устройстах Apple, к сожалению, проверить возможности не было (помимо devTools).

Приложение на хостинге: https://plnt.netlify.app/

*netlify отдаёт картинки неспещно (локально всё шустро).

Если что мои контакты:

`Кирилл Николайчук`

`+375 29 8667001`

Telegram: `@NKirk`

Skype: `ksenofon_g`

email: `kiryl.nik@gmail.com`

Спасибо!)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
