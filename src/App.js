import css from './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Pageprofile from './components/Pages/Pageprofile/Pageprofile.jsx'
import Pageshop from './components/Pages/Pageshop/Pageshop.jsx'
import Pageproduct from './components/Pages/Pageproduct/Pageproduct.jsx'
import Footer from './components/Footer/Footer'
import Pagevehicle from './components/Pages/Pagevehicle/Pagevehicle'
import Pagelogin from './components/Pages/Pagelogin/Pagelogin'
import Pagepremium from './components/Pages/Pagepremium/Pagepremium'


export default function App(){
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact/>
                    <Route path="/player" component={Pageprofile}/>
                    <Route path="/shop" component={Pageshop}/>
                    <Route path="/product" component={Pageproduct}/>
                    <Route path="/premium" component={Pagepremium}/>
                    <Route path="/vehicle" component={Pagevehicle}/>
                    <Pagelogin path="/login" component={Pagelogin}/>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
