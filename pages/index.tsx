import Head from 'next/head'
import React from "react";
import Header from "../components/Headers/Headers";
import {NextPage} from "next";
import GlobalStyle from "./GlobalStyle";
import PostsContainer from "../components/Posts/PostsContainer";
import {getPost} from "../reducers/PostsReducer";


const Home: NextPage = () => {

    return (
        <div className="container">
            <GlobalStyle/>
            <Head >
                <title>Simple Blog </title>
                <link rel="icon" href="/logo.ico"/>
            </Head>
            <Header/>
            <PostsContainer/>
        </div>)
};

Home.getInitialProps = ({ store, isServer }) => {
    if (isServer) {
        // Do some staff
    }

    // @ts-ignore
 store.dispatch(getPost());

    return { }; // You can pass some custom props to the component from here
};

export default Home;
