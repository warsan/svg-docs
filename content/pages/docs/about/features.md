---
title: Свойства
weight: 2
seo:
  title: Features
  description: This is the features page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Features
      keyName: property
    - name: 'og:description'
      value: This is the features page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Features
    - name: 'twitter:description'
      value: This is the features page
layout: docs
---

<div class="note">
  <strong>Примечание:</strong>  
  Более подробное объяснение есть в разделе <strong>Начало работы</strong>.
</div>

## Блоки кода

Блоки кода либо огораживаются `строками с тремя обратными знаками`, либо отступают на четыре пробела.

<pre>
```
body {
  background: #fff;
  color: #666;
  line-height: 1.66667; }

a {
  color: #d4a259;
  text-decoration: underline;
  -webkit-transition: background .3s ease, color .3s ease;
  transition: background .3s ease, color .3s ease; }

a:hover {
  color: #1d1d1d;
  text-decoration: none; }
```
</pre>

Отрисованный результат выглядит следующим образом:

```
body {
  background: #fff;
  color: #666;
  line-height: 1.66667; }

a {
  color: #d4a259;
  text-decoration: underline;
  -webkit-transition: background .3s ease, color .3s ease;
  transition: background .3s ease, color .3s ease; }

a:hover {
  color: #1d1d1d;
  text-decoration: none; }
```

## Вызовы

В этой теме доступны два типа выносок: **важно** и **примечание**.

<div class="important">
  <strong>Important:</strong> 
  This is an "Important" callout block of text. 
  This block indicates a warning or caution.
  Use it for an important message. 
</div>

<div class="note">
  <strong>Note:</strong> 
  This is a "Note" callout block of text. 
  This block signifies a general note or tip.
</div>

## Таблицы

Вы можете создавать таблицы с помощью markdown, чтобы помочь вам организовать информацию. Чтобы добавить таблицу, используйте три или более дефиса (---) для создания заголовка каждой колонки, а также используйте трубы (|) для разделения каждой колонки, как в примере ниже.

| Имя | Требуется | Тип | Описание |
| ---- | --- | --- | --- |
| type | Required | `enum` | Тип модели. Должно быть, один из - `page`, `config`, `data`, `object` |
| label | Required | `string` | Ярлык модели |
| description | | `string` | Описание модели. Используется некоторыми CMS. |
| fields | | `list` of `objects` | Список моделей месторождений |

## Начните использовать тему Libris

Мы оснастили эту тему мощными функциями, которые помогут вам создать потрясающую документацию для вашего текущего или следующего проекта.

<br>

**Почему бы не начать использовать эту тему уже сегодня?**

<a href="https://www.stackbit.com/" class="button">Join Stackbit</a>
