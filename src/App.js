import css from './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Pageprofile from './Pages/Pageprofile'

function App(){
    return(
        <Router>
            <div className="App">
                <Switch> 
                    <Route path="/" exact/>
                    <Route path="/profile"  component={Pageprofile}/>
                </Switch>
            </div>
        </Router>
    )
}
export default App