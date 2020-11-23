import React from 'react';

const sections = [{
    id: 1,
    title: "Environment",
    body: 
        <div className="div-sections">
            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Télécharger Node</a><br/>
            Tester : node --version<br/><br/>

            <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=fr" target="_blank" rel="noopener noreferrer">Installer React Developer Tools sur Chrome</a><br/><br/>

            Installer des extensions sur VSCode :<br/>
            Simple React Snippets<br/>
            Prettier - Code formatter (+ Paramètres/Cocher FormatOnSave)<br/>
            ESLint<br/><br/>

            <a href="https://fr.reactjs.org/" target="_blank" rel="noopener noreferrer">Se documenter sur React</a><br/>
            <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Se documenter sur create-react-app</a><br/>
            npx create-react-app my-app<br/>
            npm start
        </div>
},
{
    id: 2,
    title: "Dependencies",
    body: 
        <div className="div-sections">
            npm i bootstrap@4.5.2<br/>
            npm i react-fontawesome<br/>
            npm i @fortawesome/fontawesome-svg-core<br/>
            npm i @fortawesome/free-solid-svg-icons<br/>
            npm i @fortawesome/react-fontawesome<br/>
            npm i moment<br/>
            npm i react-flip-move<br/><br/>
            

            import 'bootstrap/dist/css/bootstrap.css';<br/>
            import FontAwesome from 'react-fontawesome';<br/>
            import &#123; library &#125; from '@fortawesome/fontawesome-svg-core';<br/>
            import &#123; faTrash &#125; from '@fortawesome/free-solid-svg-icons';<br/>
            import &#123; FontAwesomeIcon &#125; from '@fortawesome/react-fontawesome';<br/>
            library.add(faTrash);<br/>
            import moment from 'moment';<br/>
            import FlipMove from 'react-flip-move';<br/>
        </div>
},
{
    id: 3,
    title: "BrowserRouter et Route",
    body:
        <div className="div-sections">
            import React from 'react';<br/>
            import <span className="text-primary">&#123; BrowserRouter as Router, Route &#125;</span> from "react-router-dom";<br/>
            import "bootstrap/dist/css/bootstrap.css";<br/>
            import './App.css';<br/>
            import StellarApp from './routes/StellarApp';<br/>
            import TodoListApp from './routes/TodoListApp';<br/>
            import TwitterApp from './routes/TwitterApp';<br/>
            import Bases from './routes/Bases';<br/>
            import NavBar from './components/NavBar';<br/>
            import Footer from './components/Footer';<br/><br/>

            const App = () =&gt; &#123;<br/>
            return (<br/>
                <span className="text-primary">&lt;Router&gt;</span><br/>
                    &lt;NavBar /&gt;<br/>
                    <span className="text-primary">&lt;Route component=&#123;StellarApp&#125; path="/myReactApp/" exact /&gt;<br/>
                    &lt;Route component=&#123;TodoListApp&#125; path="/myReactApp/todolistapp" /&gt;<br/>
                    &lt;Route component=&#123;TwitterApp&#125; path="/myReactApp/twitterapp" /&gt;<br/>
                    &lt;Route component=&#123;Bases&#125; path="/myReactApp/bases" /&gt;</span><br/>
                    &lt;Footer /&gt;<br/>
                <span className="text-primary">&lt;/Router&gt;</span><br/>
            );<br/>
            &#125;;<br/><br/>

            export default App;
        </div>
},
{
    id: 4,
    title: "Link",
    body:
        <div className="div-sections">
            import React from "react";<br/>
            import <span className="text-primary">&#123; Link &#125;</span> from "react-router-dom";<br/><br/>

            const Navbar = () =&gt; &#123;<br/>
                return (<br/>
                    &lt;nav className="navbar navbar-expand-lg fixed-top" id="mainNav"&gt;<br/>
                        &lt;img className="logofatimabenzaoui" src="/myReactApp/logofatimabenzaoui.png" alt="Logo Fatima Benzaoui"&gt;&lt;/img&gt;<br/>
                        &lt;span className="navbar-brand text-primary mr-auto"&gt;myReactApp&lt;/span&gt;<br/>
                        &lt;div className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation"&gt;<br/>
                            &lt;i className="fa fa-bars text-primary"&gt;&lt;/i&gt;<br/>
                        &lt;/div&gt;<br/>
                        &lt;div className="collapse navbar-collapse" id="navbarResponsive"&gt;<br/>
                            &lt;ul className="navbar-nav ml-auto" id="navbar"&gt;<br/>
                                &lt;li className="nav-item"&gt;<span className="text-primary">&lt;Link className="nav-link" to="/myReactApp/"&gt;nasaStellarApp&lt;/Link&gt;</span>&lt;/li&gt;<br/>
                                &lt;li className="nav-item"&gt;<span className="text-primary">&lt;Link className="nav-link" to="/myReactApp/todolistapp"&gt;todoListApp&lt;/Link&gt;</span>&lt;/li&gt;<br/>
                                &lt;li className="nav-item"&gt;<span className="text-primary">&lt;Link className="nav-link" to="/myReactApp/twitterapp"&gt;twitterApp&lt;/Link&gt;</span>&lt;/li&gt;<br/>
                                &lt;li className="nav-item"&gt;<span className="text-primary">&lt;Link className="nav-link" to="/myReactApp/bases"&gt;Bases&lt;/Link&gt;</span>&lt;/li&gt;<br/>
                            &lt;/ul&gt;<br/>
                        &lt;/div&gt;<br/>
                    &lt;/nav&gt;<br/>
                );<br/>
            &#125;;<br/>
            export default Navbar;
        </div>
},
{
    id: 5,
    title: "useState",
    body:
        <div className="div-sections">
            import React, <span className="text-primary">&#123; useState &#125;</span> from "react";<br/>
            import &#123; Link &#125; from "react-router-dom";<br/><br/>

            const Navbar = () =&gt; &#123;<br/>
                <span className="text-primary">const [isNavCollapsed, setIsNavCollapsed] = useState(true);<br/>
                const handleNavCollapse = () =&gt; setIsNavCollapsed(!isNavCollapsed);</span><br/>
                return (<br/>
                    &lt;nav className="navbar navbar-expand-lg fixed-top" id="mainNav"&gt;<br/>
                        &lt;img className="logofatimabenzaoui" src="/myReactApp/logofatimabenzaoui.png" alt="Logo Fatima Benzaoui"&gt;&lt;/img&gt;<br/>
                        &lt;span className="navbar-brand text-primary mr-auto"&gt;myReactApp&lt;/span&gt;<br/>
                        &lt;div className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" <span className="text-primary">aria-expanded=&#123;!isNavCollapsed ? true : false&#125;</span> aria-label="Toggle navigation" <span className="text-primary">onClick=&#123;handleNavCollapse&#125;</span>&gt;<br/>
                            &lt;i className="fa fa-bars text-primary"&gt;&lt;/i&gt;<br/>
                        &lt;/div&gt;<br/>
                        &lt;div className=<span className="text-primary">&#123;`$&#123;isNavCollapsed ? 'collapse' : ''&#125; navbar-collapse`&#125;</span> id="navbarResponsive"&gt;<br/>
                            &lt;ul className="navbar-nav ml-auto" id="navbar"&gt;<br/>
                                &lt;li className="nav-item"&gt;&lt;Link className="nav-link" to="/myReactApp/"&gt;nasaStellarApp&lt;/Link&gt;&lt;/li&gt;<br/>
                                &lt;li className="nav-item"&gt;&lt;Link className="nav-link" to="/myReactApp/todolistapp"&gt;todoListApp&lt;/Link&gt;&lt;/li&gt;<br/>
                                &lt;li className="nav-item"&gt;&lt;Link className="nav-link" to="/myReactApp/twitterapp"&gt;twitterApp&lt;/Link&gt;&lt;/li&gt;<br/>
                                &lt;li className="nav-item"&gt;&lt;Link className="nav-link" to="/myReactApp/bases"&gt;Bases&lt;/Link&gt;&lt;/li&gt;<br/>
                            &lt;/ul&gt;<br/>
                        &lt;/div&gt;<br/>
                    &lt;/nav&gt;<br/>
                );<br/>
            &#125;;<br/>
            export default Navbar;
        </div>
},
{
    id: 6,
    title: "Deploy",
    body: 
        <div className="div-sections">
            <span className="text-primary">Installer gh-pages</span><br/>
            npm i gh-pages<br/><br/>

            <span className="text-primary">Modifier le package.json</span><br/>
            &#123;<br/>
                "homepage": "https://fatimabenzaoui.github.io/myReactApp"<br/>
            &#123;,<br/>
            "scripts": &#123;<br/>
                "predeploy": "npm run build",<br/>
                "deploy": "gh-pages -d build"<br/>
            &#125;<br/><br/>

            <span className="text-primary">Lancer les commandes :</span><br/>
            npm run predeploy (création du dossier "build")<br/>
            npm run deploy (publication sur gh-pages)
        </div>
},

];

export default sections;
