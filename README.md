# Ангуляр приложение с графиком Chart.js

## Описание

Проект представляет Angular-приложение, с интеграцией библиотеки Chart.js для визуализации данных о населении США по годам. Приложение загружает данные из открытого API и отображает их в виде интерактивного графика, который можно настроить по типу отображения.

## Цель проекта

Создать Angular-приложение, позволяющее визуализировать с помощью Chart.js данные о населении США по годам, получаемых из Data USA API.

## Используемые технологии

- Angular v18 — основа для построения структуры приложения.
- Chart.js — библиотека для визуализации данных.
- RxJS — библиотека для реактивного программирования.
- Taiga UI — библиотека компонентов.
- SCSS - CSS-препроцессор.

## Функциональные возможности

- Отображение графика данных по полю Year с использованием последней версии Angular и библиотеки Chart.js.
- Возможность выбора типа графика.
- Возможность выделения точек на графике.
- Отображение дополнительной информации об источнике данных.
- Интерактивное взаимодействие с графиком.

## Настройка и запуск

1. Используйте node версии `20.x` или выше.
2. Установите `Git` на ваш компьютер.
3. Установите редактор кода на ваш выбор.
4. Клонируйте этот репозиторий на ваш компьютер.
5. Установите все зависимости с помощью `npm ci`.
6. Запустите сервер для разработки: `npm start`.
7. Откройте браузер и перейдите по адресу http://localhost:4200.

## Доступные скрипты

- **start**: Запускает Angular-приложение локально с помощью `ng serve` по адресу `http://localhost:4200/`.

- **build**: Компилирует Angular-приложение с помощью `ng build`, создавая готовый к производству бандл в папке `dist`.

- **watch**: Запускает `ng build --watch --configuration development` для сборки проекта в режиме разработки и отслеживания изменений.

- **format**: Форматирует файлы проекта в папке `src` с помощью `prettier --write .`, чтобы обеспечить единый стиль кода.

- **test**: Выполняет тесты с помощью `ng test --browsers ChromeHeadless --watch=false`, предоставляя подробный вывод результатов тестов.

- **lint**: Проверяет форматирование файлов в папке `src` с помощью `eslint lint`.

- **lint:fix**: Автоматически исправляет ошибки форматирования в файлах с помощью `eslint lint --fix`.
