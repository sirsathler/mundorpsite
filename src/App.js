import css from './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Pageprofile from './components/Pages/Pageprofile/Pageprofile.jsx'
import Pageshop from './components/Pages/Pageshop/Pageshop.jsx'
import Pageproduct from './components/Pages/Pageproduct/Pageproduct.jsx'
import Footer from './components/Footer/Footer'
import Headerstick from './components/Header/Headerstick'
import Pagevehicle from './components/Pages/Pagevehicle/Pagevehicle'
import PageHome from "./components/Pages/Pagehome/Pagehome"

function App(){
    return(
        <Router>
            <div className="App">
                <Header />
                <Headerstick />
                <Switch>
                    <Route path="/" exact component={PageHome}/>
                    <Route path="/player" component={Pageprofile}/>
                    <Route path="/shop" component={Pageshop}/>
                    <Route path="/product" component={Pageproduct}/>
                    <Route path="/vehicle" component={Pagevehicle}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
export default App