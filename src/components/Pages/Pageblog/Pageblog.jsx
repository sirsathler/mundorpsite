import css from './Pageblog.css'

export default function Pageblog(){
    return(
        <div className='page-blog'>
            <section className= 'blog-banner'>
                <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/779ae9dc3318503f9abc9ea6804b2f31d0fd84e807eb8a8851185cb2b6092af2._V_SX1080_.jpg" alt="" />
            </section>
            
            <section className= 'blog-post'>
                <div className="container">
                    <h1 className= 'blog-title'>TÍTULO</h1>
                    <h2 className= 'blog-subtitle'>SUBTÍTULO</h2>
                    <p className= 'blog-text'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Omnis, recusandae, cumque doloremque corporis est repellendus blanditiis 
                        dolorem possimus quaerat qui exercitationem voluptatem nemo sit, eius 
                        consectetur velit magnam illo? Magni.
                    </p>
                    <p className= 'blog-author'>AUTOR</p>
                    <p className= 'blog-date'>00/00/0000</p>
                </div>
            </section>
        </div>
    )
}