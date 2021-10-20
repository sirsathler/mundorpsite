import css from './Pagination.css'

export default function Pagination(){
    return(
        <div className="pagination">
            <button>Anterior</button>
            <div className='page-now'>1</div>
            <button>Proximo</button>
        </div>
    )
}