---
title: Обзор примеров
weight: 1
seo:
  title: Overview
  description: This is the overview page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Overview
      keyName: property
    - name: 'og:description'
      value: This is the overview page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Overview
    - name: 'twitter:description'
      value: This is the overview page
layout: docs
---

<div class="note">
  <strong>Примечание переводчика:</strong> 
   в данной справке множество ссылок, которые выглядят вот так: 
       <span onclick="showClick('ссылка')">
       <a href="#" onclick="return false" onblur="hideClick()" onmouseover="show('ссылка')" onmouseout="hide()">ссылка</a></span>.  
   При наведении на неё курсора мышки появится всплывающая подсказка. При клике левой кнопкой мышки на ней либо появится ещё одна всплывающая подсказка, либо будет сделан переход в другое место данной справки или на какое-нибудь место в сети Интернет.  
Проект перевода на  <a href="https://github.com/customizer/svg.js-ru" target="_blank">github.com</a>.
</div>

<hr>

## Начало

Начало

### Подготовка

Создайте базовую разметку Html и включите скрипт svg.js:

 ```html
<!DOCTYPE html>
<html>
<head>
<title>SVG.js</title>
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@3.0/dist/svg.min.js">
</script>
</head>
<body>

</body>
</html>
```

Или просто импортируйте svg.js в свое приложение javascript:

```js
import { SVG } from '@svgdotjs/svg.js'
```

<div class="note">
  <strong>Примечание:</strong>
  Все свойства, которые ранее были доступны для глобального объекта SVG, теперь необходимо импортировать, см. Пример ниже:
</div>

```js
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'
```

### Создать документ SVG

Затем используйте SVG()функцию, чтобы создать документ SVG и добавить его на страницу html:

```js
var draw = SVG().addTo('body').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' })
```

Вы можете передать любой селектор CSS `addTo` или просто узел.

```js
<body>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
       xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300">
    <rect width="100" height="100" fill="#f06"></rect>
  </svg>
</body>
```

SVG.js не устанавливает размер документа автоматически. Поэтому убедитесь, что звоните `size()` с соответствующими значениями.  
Например, чтобы установить размер в соответствии с размерами его родителя, используйте это:

```js
var draw = SVG().addTo('#someId').size('100%', '100%')
```

## Подождите, пока загрузится DOM

Многим это может показаться очевидным, но все же стоит упомянуть. Если вы включаете свои js-файлы в заголовок документа, дождитесь загрузки DOM:

```js
SVG.on(document, 'DOMContentLoaded', function() {
  var draw = SVG().addTo('body')
})
```

Это не проблема, если вы включите js внизу.

## Чистый SVG

SVG.js также работает вне HTML DOM, внутри документа SVG, например:
```js
<?xml version="1.0" encoding="utf-8" ?>
<svg id="drawing" xmlns="http://www.w3.org/2000/svg" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" >
  <script type="text/javascript" xlink:href="svg.min.js"></script>
  <script type="text/javascript">
    <![CDATA[
      var draw = SVG('#drawing')
      draw.rect(100,100).animate().fill('#f03').move(100,100)
    ]]>
  </script>
</svg>
```

## Функция SVG ()

Эта функция не только создает новые документы, но также может извлекать объекты svg.js из dom или создавать новые из фрагмента svg:

```js
// новый документ
var draw = SVG()
// получить прямоугольник из DOM
var rect = SVG('#myRectId')
// или
var rect = SVG('rect')
// подойдет любой селектор css
var path = SVG('#group1 path.myClass')
// создать новый объект из фрагмента
var circle = SVG('<circle>')
// преобразование node в объект svg.js
var obj = SVG(node)
```

## Песочница

Вот базовая настройка. Присутствует все, чтобы начать возиться.

<div>
<script async src="//jsfiddle.net/Fuzzy/nc15b2tg/embed/js,result/"></script>
</div>


<hr>
<hr>

## Tables

You can build tables with markdown to help you organize information. To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column like in the example below.

<pre>
| Title | Title |
| ------| ----- |
| Text  | Text  |
| Text  | Text  |
</pre>

| Title | Title |
| ------| ----- |
| Text  | Text  |
| Text  | Text  |

<div class="note">
  <strong>Note:</strong> 
  Creating tables with hyphens and pipes can be time-consuming. To speed up the process, try using the <a href="http://www.tablesgenerator.com/markdown_tables" >Markdown Tables Generator</a>.
</div>

<hr>
