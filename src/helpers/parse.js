import React from 'react';
import { Link } from 'react-router-dom';

const shouldBeHighLighted = (str) =>
    str.match(/((@)|(#)|(https?:\/\/))[\w.]+/gi);

const highLightedStr = (str) =>
    str
    .split(/\s/g)
    .map((word, index) => {
        if (shouldBeHighLighted(word)) {
            if (word.includes('@')) {
                return (
                    <Link
                        className="highLight"
                        to={`/tweets/${word.substring(1)}`}
                        key={index}
                        >{word} </Link>
                );
            }
        return <a key={index} className="highLight" href="{word}">{word} </a>
        }
        return <span key={index}>{word} </span>
    });

export {
    shouldBeHighLighted,
    highLightedStr,
};
