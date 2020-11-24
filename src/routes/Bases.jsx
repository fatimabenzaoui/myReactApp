import React from 'react';
import Accordion from '../components/Accordion';
import { sections } from '../constants';

const BasesPage = () => {
    return ( 
        <div className="mb-3">
            <h1 className="mt-5 pt-5 mb-5">Les bases de React</h1>
            { sections.map(({ id, title, body }) => (
                <Accordion
                    key={id} 
                    title={title}
                    body={body}
                />
            ))}
        </div>
     );
}
 
export default BasesPage;