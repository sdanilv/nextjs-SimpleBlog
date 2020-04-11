import Head from 'next/head'
import React from "react";
import Header from "../components/Headers/Headers";
import PostsComponent from "../components/Posts/Posts";
import { RootState} from "../reducers/store";
import {NextPage} from "next";
import {useDispatch, useSelector} from "react-redux";
import GlobalStyle from "./GlobalStyle";


const Home: NextPage<{ foo: string }> = (props) => {
    const dispatch = useDispatch();
    const triggerChange = () => {
        // Dispatch a redux action with redux hooks
        dispatch({ type: 'POST_ADD', payload: 'foo' })
    };

    const foo = useSelector<RootState, RootState['foo']>((state) => state.foo);

    return (
        <div className="container">
            <GlobalStyle/>
            <Head >
                <title>Simple Blog {props.foo&& "Hello"} H {foo} </title>
                <link rel="icon" href="/logo.ico"/>
            </Head>
            <Header/>
            <button onClick={triggerChange}>DO FOO</button>
           {foo}
            <PostsComponent posts={foo}/>
        </div>)
};

// Home.getInitialProps = ({ store, isServer }) => {
//     if (isServer) {
//         // Do some staff
//     }
//
//    // store.dispatch({ type: 'POST_ADD', payload: 'foo' }); // The component can read from the store's state when rendered
//
//     return { foo: ""}; // You can pass some custom props to the component from here
// };

export default Home;
