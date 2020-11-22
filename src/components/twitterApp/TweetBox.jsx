import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TweetBox extends Component {

    static propTypes = {
        publish: PropTypes.func.isRequired,
    };
    state = {
        value: '',
    };
    handleChange = ({ target: { value } }) => {
        this.setState({ value });
    };
    handleSubmit = () => {
        const { value } = this.state;
        let { publish } = this.props;

        if (value.length && value.length <= 140){
            publish(value);

            this.setState({ value: '' });
        }
    };
    handleFocus = ({ type }) => {
        this._textarea.placeholder = type === 'focus' ? '' : 'Composez votre tweet';
    };

    render() {
        const { value } = this.state;

        return (
            <>
            <div className="container w-100 tweetbox bg-light p-3 pb-5">
                <textarea
                    rows={3}
                    placeholder="Composez votre tweet"
                    value={value}
                    onChange={this.handleChange}
                    // className={value.length > 140 && 'alert'}
                    className={value.length > 140 ? 'alert' : value}
                    ref={t => this._textarea = t}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                />
                {/* Création d'un compteur qui se décrémente */}
                <div className="action">
                    
                    {/* Création d'un bouton désactivé si textarea vide ou > 140 caractères */}
                    <button
                        type="button"
                        className="btn btn-secondary btn-small float-right"
                        disabled={!value.length || value.length > 140}
                        onClick={this.handleSubmit}
                    >
                    Tweet
                    </button>
                    <small><span className="count mt-2 float-right">{140 - value.length}</span></small>                   
                </div>
            </div>
        </>
        );
    }
}
export default TweetBox;





