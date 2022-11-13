import '../styles/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/style.css';
import '../styles/responsive.css';

import { RecoilRoot } from 'recoil'
import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/_App/Layout';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <RecoilRoot>
                <Layout>
                    <Head>
                        <meta 
                            charSet="utf-8" 
                        />
                        <meta 
                            name="viewport" 
                            content="width=device-width, initial-scale=1" 
                        />
                    </Head>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        );
    }
}