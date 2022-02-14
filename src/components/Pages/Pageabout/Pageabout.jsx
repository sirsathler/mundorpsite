import css from './Pageabout.css'

export default function Pageabout() {
    return (
        <div>
            <section className='about-banner' id="mundo-banner" > 
            </section>
            <section className='about-info'>
                <div className='about-text-wrapper'>
                    <p className='about-text'>UM NOVO JEITO DE JOGAR UNTURNED</p>
                    <p className='about-subtext'>TRABALHE, GANHE DINHEIRO, COMPRE CARROS, MOTOS, CASAS E MUITO MAIS!</p>
                </div>
            </section>

            <section className='about-banner' id="police-banner">
            </section>
            <section className='about-info'>
                <div className='about-text-wrapper'>
                    <p className='about-text'>siga uma vida como um oficial de justiça</p>
                    <p className='about-subtext'>alie-se à polÍcia militar e patrulhe a cidade, prendendo bandidos e impondo ordem</p>
                    {/* <p className='about-text'>Fuja das Regras! Torne-se o rei do crime!</p>
                    <p className='about-subtext'>participe das maiores organizações crimininosas da cidade e libere o caos !</p> */}
                </div>
            </section>

            <section className='about-banner' id="thief-banner">
            </section>
            <section className='about-info'>
                <div className='about-text-wrapper'>
                    <p className='about-text'>Fuja das regras! Torne-se rei do crime!</p>
                    <p className='about-subtext'>participe das maiores organizações criminiosas da cidade e libere o caos!</p>
                </div>
            </section>
            
        </div>
    )
}