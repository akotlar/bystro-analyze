import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link
                        rel='stylesheet'
                        href="https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,500"
                    />
                    <link
                        rel='stylesheet'
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                </Head>
                <body style={{ margin: 0 }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;