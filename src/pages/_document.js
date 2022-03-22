import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Helmet } from 'react-helmet';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        // см. https://github.com/nfl/react-helmet#server-usage для получения дополнительной информации
        // 'head' был занят 'renderPage().head', мы не можем его использовать
        return { ...initialProps, helmet: Helmet.renderStatic() };
    }

    // должен быть визуализирован на <html>
    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent();
    }

    // должна быть визуализирована на <body>
    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent();
    }

    // должен быть визуализирован на <head>
    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
            .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
            .map((el) => this.props.helmet[el].toComponent());
    }

    render() {
        // if you don't like Helmet but you still want to set properties on body use this const pageProps = _.get(this.props, '__NEXT_DATA__.props.pageProps');
        // const pageProps = _.get(this.props, '__NEXT_DATA__.props.pageProps');
        return (
            <Html {...this.helmetHtmlAttrComponents}>
                <Head>{this.helmetHeadComponents}</Head>
                <body {...this.helmetBodyAttrComponents}>
                    <Main />
                    <script src="/js/plugins.js" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
