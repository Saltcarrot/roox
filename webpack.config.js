const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const miniCSS = require('mini-css-extract-plugin')

module.exports = {
  // Приложение в разработке и выходные файлы не нужно сжимать
  mode: 'development',
  entry: {
    // Корневой tsx файл
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    // Компилировать в папку build
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    // Чтобы после обновления компонентов, стилей и пр. не вылезала ошибка 404 и
    // чтобы не перебивать каждый раз ссылку в браузере
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    // Откуда брать корневой html
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    // В какой файл компилировать все стили
    new miniCSS({
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        // Компиляция TS в JS
        test: /\.tsx?$/,
        use: 'ts-loader',
        // Отслеживаем изменения только своих файлов
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // Создание CSS файлов для каждого JS, который имеет CSS
          miniCSS.loader,
          // Импорт css в js
          {
            loader: 'css-loader',
            options: {
              modules: {
                // Чтобы компилировалось в класс с некоторым хэшированным именем: .alert_123ab.
                // Однако происходит компиляция всех классов по данному шаблону,
                // поэтому, чтобы вложенные классы нормально отображались,
                // нужно добавлять :global(.class):
                // .alert_123ab .error вместо .alert_123ab .error_45ih
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          // Компиляция s(a|c)ss файлов css
          'sass-loader',
        ],
      },
    ],
  },
}
