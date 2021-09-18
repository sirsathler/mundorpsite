import css from './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Pageprofile from './Pages/Pageprofile.jsx'
import Pageshop from './Pages/Pageshop.jsx'
import Header from './components/Header/Header.jsx'

function App(){
    return(
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact/>
                    <Route path="/player" component={Pageprofile}/>
                    <Route path="/shop" component={Pageshop}/>
                </Switch>
            </div>
        </Router>
    )
}
export default App