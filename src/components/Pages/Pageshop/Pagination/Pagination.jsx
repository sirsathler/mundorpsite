import css from './Pagination.css'

export default function Pagination(){
    return(
        <div className="pagination">
            <button><p>Anterior</p></button>
            <div className='page-now'><p>1</p></div>
            <button><p>Proximo</p></button>
        </div>
    )
}