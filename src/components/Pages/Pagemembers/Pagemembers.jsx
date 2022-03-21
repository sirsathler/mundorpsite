import css from './Pagemembers.scss'
import MemberCard from './MemberCard/MemberCard'

export default function Pagemembers() {
    return (
        <div className='page-members'>
            <section className='project-owners'>
                <div className='page-members__title page-members__title--main'>
                    <p className='members-text highlight'>NOSSO TIME</p>
                    <p className='members-subtext'>CONHEÇA AQUELES RESPONSÁVEIS PELO PROJETO ESTAR NO AR!</p>
                </div>
                <div className='cards-container'>
                    <div className='cards-wrapper'>
                        <MemberCard name="Matheus Sathler" description="UM EXÍMIO GAROTO DE PROGRAMA" job="DONO DO PROJETO" image="https://imgur.com/btE03lj.png" />
                        <MemberCard name="Rivaldo Cardoso" description="NÃO VIRE PROGRAMADOR" job="LÍDER DE FRONT-END" image="https://imgur.com/WG97vq0.png" />
                        <MemberCard name="Luiz Fernando" description="Água Dura Pedra Mole tanto fura até que bate" job="LÍDER DE BACK-END" image="https://imgur.com/rCVBwEF.png" />
                    </div>
                </div>
            </section>
            <section className='project-employees'>
                <div className='page-members__title'>
                    <p className='members-text highlight'>DEVS</p>
                </div>
                <div className='cards-container'>
                    <div className='cards-wrapper'>
                        <MemberCard name="Marcus Vinicius " description="VOCÊ NÃO É CSS MAS É PURO ESTILO" job="desenvolvedor Front-end" image="https://imgur.com/3nHLNG5.png" />
                        <MemberCard name="Débora Toledo" description="PALMEIRAS CONTINUA SEM MUNDIAL" job="desenvolvedor Front-end" image="https://imgur.com/beFx37D.png" />
                        <MemberCard name="Pedro Marabisa" description="MALANDRO É MALANDRO, MANÉ É MANÉ" job="desenvolvedor Back-end" image="https://imgur.com/VE2oFMy.png" />
                        <MemberCard name="Guilherme Faglioni" description="SEPARAMOS OS SERES EM DOIS TIPOS: OS AVESTRUZES E OS NÃO-AVESTRUZES" job="desenvolvedor back-end" image="https://imgur.com/ZAYDDDV.png" />
                        <MemberCard name="Julia Ayres" description="QUALQUER MERDA AÍ" job="desenvolvedor Front-end" image="https://imgur.com/bIw9srs.png" />
                        <MemberCard name="Arthur Tavares" description="MALANDRO NÃO PARA, MALANDRO DÁ UM TEMPO" job="desenvolvedor Front-end" image="https://imgur.com/fEJ3mDz.png" />
                        <MemberCard name="Lara Faglioni" description="SE AMAR FOR UM CRIME, ME PRENDA POR TAL DELITO" job="desenvolvedor Front-end" image="https://imgur.com/1bR8kPL.png" />
                        <MemberCard name="Gabrielly Vasques" description="FÉ NO PAI QUE O SITE SAI" job="desenvolvedor Front-end" image="https://imgur.com/slbSlGy.png" />
                        <MemberCard name="Júlia Torres" description="'...'" job="MUDA" image="https://imgur.com/uzrIbRr.png" />
                    </div>
                </div> 
            </section>
        </div >
    )
}