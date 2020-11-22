import React, { Component } from 'react';
import moment from 'moment';

import { tweets } from '../../constants';
import Tweet from './Tweet';
import TweetBox from './TweetBox';

import './PublishTweet.css';

class PublishTweet extends Component {
    state = {
        tweets,
    };

    publish = (tweet) => {
        const { tweets } = this.state;

        this.setState({
            tweets: [{
                avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
                username: 'Pikachu',
                fullname: 'Toto Zapatta',
                content: tweet,
                date: moment().format('DD/MM/YYYY'),
            },
            ...tweets,
        ],
        });
    };

    remove = (index) => {
        const { tweets } = this.state;

        this.setState({ tweets: tweets.filter((tweet, i) => i !== index) });
    };

    render() {
        const { tweets } = this.state;

        return (
            <div className="container-fluid text-center mt-3 w-100">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
                        <TweetBox publish={this.publish} />
                        <div className="tweets">
                            {tweets.map((tweet, index) => (
                                <Tweet
                                    key={index}
                                    index={index}
                                    remove={this.remove}
                                    {...tweet}                       
                                />
                            ))}
                        </div>
                    </div>                   
                </div>
            </div>
        );
    }
}

export default PublishTweet;