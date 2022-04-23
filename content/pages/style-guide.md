---
title: Руководство по стилю
subtitle: Руководство по стилям предоставляет вам чертеж стилей по умолчанию для постов и страниц.
image: images/5.jpg
seo:
  title: Theme Style Guide
  description: Ссылка на предлагаемые типографские обработки и стили для вашего контента
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Theme Style Guide
      keyName: property
    - name: 'og:description'
      value: >-
        Ссылка на предлагаемые типографские обработки и стили для вашего контента
      keyName: property
    - name: 'og:image'
      value: images/5.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Theme Style Guide
    - name: 'twitter:description'
      value: >-
        Ссылка на предлагаемые типографские обработки и стили для вашего контента
    - name: 'twitter:image'
      value: images/5.jpg
      relativeUrl: true
layout: page
---

**Это абзац**. Pellentesque habitant morbi *tristique senectus et netus et malesuada* fames ac turpis egestas. Vestibulum [tortor quam](https://www.google.com), feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit <mark>amet est et sapien ullamcorper</mark> pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.

# Это H1

Quisque facilisis erat a dui. Nam malesuada ornare dolor. Cras gravida, this is marked text ornare, erat elit consectetuer erat, id egestas pede nibh eget odio. Proin tincidunt, velit vel porta elementum, magna diam molestie sapien, non aliquet massa pede eu diam. Aliquam iaculis. Fusce et ipsum et nulla tristique facilisis.

## Это H2

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.

### Это H3

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.

#### Это H4

Quisque facilisis erat a dui. Nam malesuada ornare dolor. Cras gravida, diam sit amet rhoncus ornare, erat elit consectetuer erat, id egestas pede nibh eget odio. Proin tincidunt, velit vel porta elementum, magna diam molestie sapien, non aliquet massa pede eu diam. Aliquam iaculis.

## Цитирование

Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

>Творчество - это разрешение себе совершать ошибки. Дизайн - это знание того, какие из них оставить. - Скотт Адамс

Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.

<hr />

## Неупорядоченные списки

+ Donec non tortor in arcu mollis feugiat
+ Lorem ipsum dolor sit amet, consectetuer adipiscing elit
+ Donec id eros eget quam aliquam gravida
+ Vivamus convallis urna id felis
+ Nulla porta tempus sapien

## Упорядоченные списки

1. Donec non tortor in arcu mollis feugiat
2. Lorem ipsum dolor sit amet, consectetuer adipiscing elit
3. Donec id eros eget quam aliquam gravida
4. Vivamus convallis urna id felis
5. Nulla porta tempus sapien

## Видео вставки

<iframe width="640" height="360" src="https://www.youtube.com/embed/8uuFIi-ghPI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Блоки кода

Блоки кода либо огораживаются `строками с тремя обратными знаками`, либо отступают на четыре пробела.

```
<!-- Некоторые примеры кода CSS -->
body {
  color:red;
}
```

```
window.$docsify = {
  coverpage: true,

  // Пользовательское имя файла
  coverpage: 'cover.md',

  // многослойные покрытия
  coverpage: ['/', '/zh-cn/'],

  // несколько обложек и пользовательское имя файла
  coverpage: {
    '/': 'cover.md',
    '/zh-cn/': 'cover.md'
  }
};
```

## Таблицы

<div class="responsive-table">
  <table>
    <caption>Таблица с thead, tfoot и tbody</caption>
    <thead>
      <tr>
        <th>Содержание заголовка 1</th>
        <th>Содержание заголовка 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Содержание тела 1</td>
        <td>Содержание тела 2</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Содержание нижнего колонтитула 1</td>
        <td>Содержание нижнего колонтитула 2</td>
      </tr>
    </tfoot>
  </table>
</div>

<div class="note"><strong>Примечание:</strong> Обе функции, которые вы использовали выше, являются частью API Document Object Model (DOM), который позволяет манипулировать документами.</div>

<div class="important"><strong>Важно:</strong> В этой статье попробуйте ввести строки кода примера в консоль JavaScript и посмотреть, что произойдет. Более подробную информацию о консолях JavaScript см. в разделе Знакомство с инструментами разработчика браузера.</div>
