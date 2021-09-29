import css from './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Pageprofile from './components/Pages/Pageprofile/Pageprofile.jsx'
import Pageshop from './components/Pages/Pageshop/Pageshop.jsx'
import Pageproduct from './components/Pages/Pageproduct/Pageproduct.jsx'

function App(){
    return(
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact/>
                    <Route path="/player" component={Pageprofile}/>
                    <Route path="/shop" component={Pageshop}/>
                    <Route path="/product" component={Pageproduct}/>
                </Switch>
            </div>
        </Router>
    )
}
export default App