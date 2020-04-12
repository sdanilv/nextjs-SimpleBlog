import React from "react";
import App, {AppContext} from "next/app";
import withRedux, {ReduxWrapperAppProps} from "next-redux-wrapper";
import {makeStore, RootState} from "../reducers/store";
import {Provider} from "react-redux";
import GlobalStyle from "./GlobalStyle";
import Head from "next/dist/next-server/lib/head";
import Header from "../components/Headers/Headers";

/**
 * @param initialState The store"s initial state (on the client side, the state of the server-side store is passed here)
 */


class MyApp extends App<ReduxWrapperAppProps<RootState>> {
    static async getInitialProps({Component, ctx}: AppContext) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (

                <Provider store={store}>
                    <GlobalStyle/>
                    <Head >
                        <title>Simple Blog </title>
                        <link rel="icon" href="/logo.ico"/>
                    </Head>
                    <Header/>
                    <Component {...pageProps} />
                </Provider>

        )
    }
}

export default withRedux(makeStore)(MyApp);