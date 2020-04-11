import React from "react";
import App, {AppContext} from "next/app";
import withRedux, {MakeStore, ReduxWrapperAppProps} from "next-redux-wrapper";
import {DefaultTheme, ThemeProvider} from "styled-components";
import {createStore} from "redux";
import {reducer, RootState} from "../reducers/store";
import {Provider} from "react-redux";

/**
 * @param initialState The store"s initial state (on the client side, the state of the server-side store is passed here)
 */
const makeStore: MakeStore = (initialState: RootState) => {
    return createStore(reducer, initialState);
};

const theme: DefaultTheme = {
    colors: {
        main: "#0070f3",
        secondary: "#0070f3"
    },
    borderRadius: "5px"
};

class MyApp extends App<ReduxWrapperAppProps<RootState>> {
    static async getInitialProps({Component, ctx}: AppContext) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        )
    }
}

export default withRedux(makeStore)(MyApp);