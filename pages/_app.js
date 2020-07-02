import App from 'next/app';
import 'animate.css';
import 'normalize.css';
import '../styles/main.scss';

// let authInitialized = false;
// TODO: think about using React context to pass down auth state instead of prop
export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <span id="theme-site">
                <span id="main">
                    <Component {...pageProps} />
                </span>

                <span id="footer">

                </span>
            </span>
        );
    }
}
