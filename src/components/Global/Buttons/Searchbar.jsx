import css from './Searchbar.css'

export default function Searchbar(){
    return(
        <div className="search-bar">
            <input type="text" placeholder='procurar por produto'/>
            <span class="material-icons-outlined">search</span>
        </div>
    )
}