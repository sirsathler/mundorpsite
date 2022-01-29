import css from './Pagepremium.css'

import Bannerpremium from './Bannerpremium'
import Brindes from './Brindes'
import Vantagens from './Vantagens'

export default function Pagepremium(){
    return(
        <div className='page-premium'>

            <Bannerpremium />
            <Brindes />
            <Vantagens />

        </div>

    )
}