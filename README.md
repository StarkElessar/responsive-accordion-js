# Responsive Accordion

Адаптивный и **очень** простой аккордеон на чистом JavaScript, без сторонних библиотек

## Usage

### 1. Автозакрытие

Используй ```data``` атрибут ```data-auto-closing``` со значением ```"true"``` - если тебе нужно, чтобы каждая вкладка автоматически закрывалась при открытии следующей. Если тебе не нужно автоматическое закрытие прошлых вкладок, тогда поставь значение атрибута на ```"false"```.

```html
<div class="accordion" data-auto-closing="true"></div>
```

### или

```html
<div class="accordion" data-auto-closing="false"></div>
```

### 2. Установка по умолчанию открытой вкладки

```html
<article class="accordion__item" data-open></article>
```

Используй ```data``` атрибут ```data-open``` для нужной вкладки, чтобы при загрузке страницы она была **уже** открыта. Если данный функционал не требуется, просто **удали** этот атрибут ```data-open```.

### 3. Установка цвета для border и background

```html
<article class="accordion__item" data-color-back="#fff7f0" data-color-border="#ffd6b3"></article>
```

Установить цвета через ```data``` атрибут можно **только** для родителя вкладки. Для этого используй ```data``` атрибут ```data-color-back``` и ```data-color-border``` в значения атрибутов помести цвет, например ```data-color-back="#fff7f0"```.

### 4. Базовая HTML структура

```html
<div class="accordion" data-auto-closing="true">
  <article class="accordion__item" data-open data-color-back="#fff7f0" data-color-border="#ffd6b3">
    <div class="accordion__header">
      <h3 class="accordion__title">Помести сюда свой заголовок</h3>
      <div class="accordion__icon hide">Помести сюда иконку в формате svg</div>
    </div>
    <div class="accordion__content">
      <p class="accordion__content-text">Помести сюда своё описание</p>
    </div>
  </article>
</div>
```
