import css from './Pageprofile.css'
import Infosprofile from './Infosprofile/Infosprofile.jsx'
import Garage from './Garage/Garage.jsx'
import Heatmap from './Heatmap/Heatmap.jsx'
import Footer from '../../Footer/Footer.jsx'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Pageprofile() {
    const {user} = useParams();
    const getProfile = () => {
        axios.get('http://localhost:4000/player/'+user)
            .then(response => {
                setUsername( response.data[0].Username)
                setLevel(response.data[0].Level)
                setUserjob(response.data[0].Job)
                setUserRp(response.data[0].Rp)
                setUsermp(response.data[0].Mp)
            })
    }

    getProfile()
   
    const [username, setUsername]=useState('')
    const [level, setLevel]=useState('')
    const [job, setUserjob]=useState('')
    const [userRp, setUserRp]=useState('')
    const [usermp, setUsermp]=useState('')
    
    return (
        <div className="page-profile">
            <div className="container">
                <Infosprofile level={level} username={username} job={job} rp={userRp} mp={usermp} id={'wip'}/>
            </div>
        </div>
    )
}