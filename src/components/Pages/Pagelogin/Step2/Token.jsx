import css from './Token.css'

export default function Token(){
    return(
        <div className='token'>
            <h2>token de acesso</h2>
            <div className="content-token">
                <p>token incorreto!</p>
                <div className="token-inputs">
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                    <input type="text" maxLength='1'/>
                </div>
            </div>
        </div>
    )
}