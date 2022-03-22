const sourcebit = require('sourcebit');

const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = {
    trailingSlash: true,
    devIndicators: {
        autoPrerender: false
    },
    webpack: (config, { webpack }) => {
        // Скажите webpack игнорировать просмотр файлов содержимого в папке content.
        // В противном случае webpack перекомпилирует приложение и обновит всю страницу.
        // Вместо этого в src/pages/[...slug].js используется функция "withRemoteDataUpdates".
        // функция для обновления содержимого страницы без обновления всей страницы
        
        config.plugins.push(new webpack.WatchIgnorePlugin([[/\/content\//]]));
        return config;
    }
};
