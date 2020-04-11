import React from "react";
import {NextPage} from "next";
import PostsContainer from "../components/Posts/PostsContainer";


const Home: NextPage = () => {

    return (
        <>
            <PostsContainer/>
        </>)
};

// Home.getInitialProps = ({ store, isServer }) => {
//     if (isServer) {
//         // Do some staff
//     }
//     return { }; // You can pass some custom props to the component from here
// };

export default Home;
