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
            ESLint<br/>
            env-cmd-file-syntax<br/><br/>

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
    id:3,
    title: "Components",
    body:
       <div className="div-sections">
            <span className="text-primary">Function Component (FC) = stateless component</span><br/>
            import React, &#123; FunctionComponent &#125; from 'react';<br/>
            const App: FunctionComponent = () =&gt; &#123;<br/>
                const name = 'toto';<br/>
                return (&lt;h1&gt;Hello &#123; name &#125;&lt;/h1&gt;);<br/>
            &#125;<br/>
            export default App;<br/><br/>

            <span className="text-primary">Class Component (CC) = statefull component</span><br/>
            import React, &#123; Component &#125; from 'react';<br/>
            class App extends Component &#123;<br/>
                const name = 'toto';<br/>
                render( return (&lt;h1&gt;Hello &#123; name &#125;&lt;/h1&gt;);)<br/>
            &#125;<br/>
            export default App;
       </div> 
},
{
    id: 4,
    title: "State",
    body:
        <div className="div-sections">
            import React, &#123; Component &#125; from 'react';<br/>
            class App extends Component &#123;<br/>
                state = &#123; message: 'hello world'; &#125;;<br/><br/>

                UpdateMessage = () =&gt; &#123;<br/>
                    this.setState(&#123; message: 'hello friends' &#125;);<br/>
                &#125;<br/><br/>

                render(<br/>
                    return(<br/>
                        &lt;div&gt;<br/>
                            &lt;h1&gt;&#123; this.state.message &#125;&lt;/h1&gt;<br/>
                            &lt;button onClick=&#123; this.UpdateMessage &#125;&gt;UPDATE&lt;/button&gt;<br/>
                        &lt;/div&gt;<br/>
                    );<br/>
                )<br/>
            &#125;<br/>
            export default App;
        </div>
},
{
    id: 5,
    title: "Hooks",
    body:
        <div className="div-sections">
            <span className="text-primary">useState</span><br/>
            import React, &#123; FunctionComponent, useState &#125; from 'react';<br/>
            const App: FunctionComponent = () =&gt; &#123;<br/>
                const [message, setMessage] = useState("hello world");<br/>               
                UpdateMessage = () =&gt; &#123;<br/>
                    setMessage('hello friends');<br/>
                &#125;<br/><br/>
                
                return (<br/>
                &lt;div&gt;<br/>
                    &lt;h1&gt;&#123; message &#125;&lt;/h1&gt;<br/>
                    &lt;button onClick=&#123; UpdateMessage &#125;&gt;UPDATE&lt;/button&gt;<br/>
                &lt;/div&gt;<br/>
            );<br/>
            &#125;<br/>
            export default App;<br/><br/>

            <span className="text-primary">useState et useEffect</span><br/>
            import React, &#123; FunctionComponent, useState, useEffect &#125; from 'react';<br/>
            import users from './constants/users';<br/>            
            const App: FunctionComponent = () =&gt; &#123;<br/>    
                const [users, setUsers] = useState([]);<br/>
                useEffect(() =&gt; &#123;<br/>
                    setUsers(users);<br/>
                &#125;, []);<br/><br/>
                
                return (<br/>
                    &lt;div&gt;<br/>
                        Nbre de users : &#123; users.length &#125;<br/>
                    &lt;/div&gt;<br/>
                );<br/>
            &#125;<br/>           
            export default App;
        </div>
},
{
    id: 6,
    title: "JSX",
    body:
        <div className="div-sections">
            import React, &#123; FunctionComponent, useState &#125; from 'react';<br/> <br/> 

            const user = &#123;<br/> 
                avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",<br/> 
                name: "toto",<br/> 
                twitter: "toto"<br/> 
            &#125;;<br/> <br/> 

            const App: FunctionComponent = () => &#123;<br/> 
                const url = `https://twitter.com/$&#123;user.twitter&#125;`;<br/><br/> 

                const [age, setAge] = useState(22);<br/><br/>

                return (<br/>
                    &lt;div&gt;<br/>
                        <span className="text-primary">afficher des données</span><br/> 
                        &lt;img src=&#123; user.avatar &#125; alt=&#123; user.name &#125; /&gt;<br/>           
                        &lt;h2&gt;&#123; user.name &#125;&lt;/h2&gt;<br/>
                        &lt;a href=&#123; url &#125;&gt;@&#123; user.twitter &#125;&lt;/a&gt;<br/><br/>

                        <span className="text-primary">écrire une condition</span><br/>             
                        &lt;p&gt;&#123; age &gt; 18 &amp;&amp;&lt;p&gt;Vous êtes majeur&lt;/p&gt; &#125;&lt;/p&gt;<br/>
                        &lt;p&gt;&#123; age &gt; 18 ? (Vous êtes majeur) : (Vous êtes mineur) &#125;&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                );<br/>
            &#125;<br/>
            export default App;
        </div>
},
{
    id: 7,
    title: "TSX",
    body:
        <div className="div-sections">
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Se documenter sur TypeScript</a><br/>
            npm install -g typescript
        </div>
},
{
    id: 8,
    title: "props",
    body:
        <div className="div-sections">
            const Tweet = props =&gt; (<br/>
            &lt;div&gt;<br/>
                &lt;img src=&#123; props.avatar &#125; alt="avatar" /&gt;<br/>
                &lt;strong&gt;&#123; props.fullname &#125;&lt;/strong&gt;<br/>                
                &lt;p&gt;&#123; props.content &#125;&lt;/p&gt;<br/>
            &lt;/div&gt;<br/>
        );<br/>
        =<br/>
        const Tweet = (&#123; avatar, fullname, content &#125;) =&gt; (<br/>
            &lt;div&gt;<br/>
                &lt;img src=&#123; avatar &#125; alt="avatar" /&gt;<br/>
                &lt;strong&gt;&#123; fullname &#125;&lt;/strong&gt;<br/>               
                &lt;p&gt;&#123; content &#125;&lt;/p&gt;<br/>
            &lt;/div&gt;<br/>
        );<br/><br/>

        &lt;Tweet<br/>
            avatar=&#123; tweets[0].avatar &#125;<br/>
            fullname=&#123; tweets[0].fullname &#125;<br/>
            content=&#123; tweets[0].content &#125;<br/>
        /&gt;
        </div>
},
{
    id: 9,
    title: "map()",
    body:
        <div className="div-sections">
            <span className="text-primary">parcourir un tableau</span><br/> 
            &#123; users.map((&#123; id, avatar, name, email &#125;) =&gt; ( <br/>
            &lt;tr key=&#123; id &#125;&gt;<br/>
                &lt;td&gt;&#123; id + 1 &#125;&lt;/td&gt;<br/>
                &lt;td&gt;&lt;img src=&#123; avatar &#125; alt=&#123; name &#125; /&gt;&lt;/td&gt;<br/>
                &lt;td&gt;&#123; name &#125;&lt;/td&gt;<br/>
                &lt;td&gt;&#123; email &#125;&lt;/td&gt;<br/>
            &lt;/tr&gt;<br/>                             
        )) &#125;<br/>
        </div>
},
{
    id: 10,
    title: "fetch()",
    body:
        <div className="div-sections">
            <span className="text-primary">parcourir une API</span><br/> 
            import React, &#123; useState, useEffect &#125; from "react";<br/>
            import moment from "moment";<br/><br/>

            const apiKey = process.env.REACT_APP_NASA_KEY;<br/><br/>

            const ApiApodNasa = () =&gt; &#123;<br/>
                const [media, setMedia] = useState(null);<br/>

                useEffect(() =&gt; &#123;<br/>
                    fetchMedia();<br/><br/>

                    async function fetchMedia() &#123;<br/>
                        const url = `https://api.nasa.gov/planetary/apod?api_key=$&#123;apiKey&#125;`;<br/>
                        const res = await fetch(url);<br/>
                        const data = await res.json();<br/>
                        setMedia(data);<br/>
                        console.log(data);<br/>
                    &#125;<br/>
                &#125;, []);<br/><br/>

                if (!media) return &lt;div /&gt;;<br/><br/>

                return (<br/>
                    &lt;div className="api-apod-nasa container text-center mt-5"&gt;<br/>
                    &#123; media.media_type === "image" ? (<br/>
                        &lt;img src=&#123; media.url &#125; alt=&#123; media.title &#125; className="w-100" /&gt;<br/>
                    ) : (<br/>
                        &lt;iframe<br/>
                        style=&#123; &#123; height: 650 &#125; &#125;<br/>
                        title="space-video"<br/>
                        src=&#123; media.url &#125;<br/>
                        frameBorder="0"<br/>
                        allow="encrypted-media"<br/>
                        allowFullScreen<br/>
                        className="w-100 border"<br/>
                        /&gt;<br/>
                    ) &#125;<br/>
                    &lt;div&gt;<br/>
                        &lt;h2&gt;&#123; media.title &#125;&lt;/h2&gt;<br/>
                        &lt;p className="text-center"&gt;<br/>
                        &#123; moment(media.date).format("DD - MM - YYYY") &#125;<br/>
                        &lt;/p&gt;<br/>
                        &lt;p className="text-justify"&gt;&#123; media.explanation &#125;&lt;/p&gt;<br/>
                    &lt;/div&gt;<br/>
                &lt;/div&gt;<br/>
            );<br/>
            &#125;;<br/><br/>

            export default ApiApodNasa;
        </div>
},
{
    id: 11,
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
    id: 12,
    title: "Link",
    body:
        <div className="div-sections">
            import React, <span className="text-primary">&#123; useState &#125;</span> from "react";<br/>
            import <span className="text-primary">&#123; Link &#125;</span> from "react-router-dom";<br/><br/>

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
    id: 13,
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
