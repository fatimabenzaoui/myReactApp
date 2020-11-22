import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import { highLightedStr } from '../../helpers';

class Tweet extends Component {
    
    static propTypes = {
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        date: PropTypes.string,
        avatar: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        remove: PropTypes.func.isRequired,
    };

    static defaultProps = {
        date: moment().format('DD/MM/YYYY'),
    };

    state = {
        isFocus: false,
    };

    handleFocus = ({ type }) => {
        this.setState({ isFocus: type === 'mouseenter' })
    };

    render() {
        const { avatar, fullname, content, username, date, index, remove } = this.props;
        const { isFocus } = this.state;

        return (
            <div className="tweet">
                <div className="container w-100 tweetbox p-3">
                    <img src={ avatar } alt="avatar" className="avatar" width="40px" height="40px" />
                    <strong>{ fullname }</strong>
                    <small className="gray"> - @{ username }</small>
                    <small className="gray date"> - { date } </small>
                    {username === "Pikachu" && (
                        <FontAwesome
                            className="gray trash"
                            name={ isFocus ? "trash" : "trash-o" }
                            onMouseEnter={ this.handleFocus }
                            onMouseLeave={ this.handleFocus }
                            onClick={ () => remove(index) }
                        />
                    )}
                    <div className="content">
                        <p className="contenutweet">{ highLightedStr(content) }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tweet;


