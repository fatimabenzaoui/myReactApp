import React from 'react';

const Footer = () => {
    return ( 
        <div className="row">
            <div className="col-md-12 mt-5 divfooter">
                <footer>
                    <div className="partie-footer">
                        <ul className="reseauxsociaux">
                            <li><a href="https://github.com/fatimabenzaoui" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/fatima-benzaoui" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="https://www.facebook.com/benzaouifatima" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a></li>
                            <li><a href="https://www.instagram.com/fatimabenzaoui" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/fatimabenzaoui" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square"></i></a></li>
                        </ul>
                        <div className="copyright text-primary">&copy; 2020 | Fatima Benzaoui | All Rights Reserved</div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
 
export default Footer;