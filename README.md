# ✨ Libris Nextjs Theme ✨

Это тема "Libris" Стэкбита, построенная с использованием [Next.js](https://nextjs.org/) и
на основе содержимого, хранящегося в файлах.

Нажмите кнопку ниже, чтобы создать новый сайт на основе этой темы с помощью Stackbit:

<p align="center">
  <a href="https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/libris-nextjs&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes"><img alt="Create with Stackbit" src="https://assets.stackbit.com/badge/create-with-stackbit.svg"/></a>
</p>

[Live Site Demo](https://themes.stackbit.com/demos/libris/)

<img src="https://themes.stackbit.com/images/libris-demo-1024x768.png" width="600">

Тему можно использовать для создания статического веб-сайта, который размещается на платформе бессерверного развертывания [Netlify](https://www.netlify.com).
Содержимое сайта хранится в git вместе с остальным кодом сайта.

При развертывании сайта [Sourcebit](https://github.com/stackbithq/sourcebit) считывает содержимое сайта из файлов и предоставляет его Next.js.
Как только Next.js завершает генерацию статического веб-сайта, [Netlify](https://www.netlify.com) размещает статические файлы в своей CDN.

[Sourcebit](https://github.com/stackbithq/sourcebit) и его плагины, в частности [`sourcebit-source-filesystem`](https://github.com/stackbithq/sourcebit-source-filesystem) и [`sourcebit-target-next`](https://github.com/stackbithq/sourcebit-target-next), используются для чтения содержимого сайта из файлов, его нормализации и предоставления страницам Next.js.
Он также устанавливает живые обновления в режиме разработки, позволяя вам обновлять файлы контента и мгновенно видеть обновления в браузере.

## Быстрый старт 🏎

[Создать сайт](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/libris-nextjs&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes) из этой темы с помощью Stackbit.

Stackbit выполнит для вас следующие действия

- Создаст новый репозиторий GitHub с содержимым этого репозитория.
- Создаст сайт [Netlify](https://www.netlify.com), подключенный к репозиторию GitHub
- Развернёт сайт Netlify.
- Создаст "фиксацию" webhook в GitHub, который будет запускать развертывание Netlify как только новый коммит будет опубликован на GitHub.
- Создаст проект Stackbit, который позволит вам редактировать ваш сайт с помощью опыта визуального редактирования on-page.

## Редактирование контента 📝

После того как Stackbit создаст сайт, вы можете начать редактировать контент, используя бесплатные возможности редактирования страниц, предоставляемые [Stackbit Studio](https://stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes).

[![](https://i3.ytimg.com/vi/zd9lGRLVDm4/hqdefault.jpg)](https://stackbit.link/project-readme-lead-video)

Вот несколько ресурсов, которые помогут вам начать:

- 📺 &nbsp; [Редактирование контента](https://stackbit.link/project-readme-editing-video)
- 📺 &nbsp; [Добавление, изменение порядка и удаление элементов](https://stackbit.link/project-readme-adding-video)
- 📺 &nbsp; [Сотрудничество](https://stackbit.link/project-readme-collaboration-video)
- 📺 &nbsp; [Издательство](https://stackbit.link/project-readme-publishing-video)
- 📚 &nbsp; [Документация по стекбиту](https://stackbit.link/project-readme-documentation)

Если вам нужна помощь, обязательно загляните на [страницу поддержки Stackbit](https://stackbit.link/project-readme-support).

## Развиваться локально

1.  [Создать сайт](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/libris-nextjs&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes) из этой темы с помощью Stackbit.

1.  После завершения вы будете перенаправлены в Stackbit Studio, где вы сможете отредактировать содержимое с помощью бесплатной функции редактирования страниц и опубликовать новые версии вашего сайта.

1.  Для дальнейшего развития вашего сайта клонируйте созданный репозиторий.

1.  Install dependencies

    npm install

1.  Запустите локальный сервер разработки Next.js:

        npm run develop

1.  Откройте [http://localhost:3000/](http://localhost:3000/) в браузере, чтобы увидеть свой сайт. Теперь вы можете редактировать содержимое сайта, а браузер будет обновлять ваши изменения в реальном времени. 🎉

## Здание для производства 🏗

Чтобы создать статический сайт для производства или проверить его работу на месте, выполните следующую команду:

    npm run build

Экспортированный сайт будет записан в папку `out`. Содержимое этой папки может быть развернуто с помощью платформы бессерверного развертывания, такой как [Netlify](https://www.netlify.com).
Вы можете запустить локальный сервер, обслуживающий статические файлы из папки `out`, например, установив и запустив `http-server`:

    npm install http-server -g
    http-server out
