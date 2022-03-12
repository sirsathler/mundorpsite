import css from './Pageblog.css'

export default function Pageblog(){
    return(
        <div className='page-blog'>
            <section className= 'blog-banner'>
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