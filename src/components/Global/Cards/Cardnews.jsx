import css from './Cardnews.css'

export default function Cardnews(props){
    return(
        <a href="">
            <div className='card-news'>
                <div className="info-news">
                    <h3>Teste</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam voluptatum praesentium nostrum cumque at? Provident necessitatibus voluptatibus dolor saepe totam tempore blanditiis laborum. Quos alias aliquam eveniet delectus eligendi.</p>
                </div>
                <div className="image-news">
                    <img src={props.image} alt="" />
                </div>
            </div>
        </a>
    )
}