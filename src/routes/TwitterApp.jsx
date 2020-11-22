import React from 'react';

import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import PublishTweet from "../components/twitterApp/PublishTweet";

const TwitterApp = () => {

    return (
      <div className="mt-5 pt-2">
        <NavBar />
        <PublishTweet />
        <Footer />
      </div>
    );
}

export default TwitterApp;