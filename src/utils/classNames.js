import classnames from 'classnames';

// Простая обертка вокруг classNames для возврата null, если классы не были созданы
// Иначе исходный classNames возвращает пустую строку, что вызывает class="" генерироваться
export default function classNames(...args) {
    return classnames.call(this, ...args) || null;
}
