export default function MainCards(){
    return(
        <main>
            <div className='mainCards'>
                <div className='cardA'>
                    <img src={require('../../assets/green-arrow.png')}/>
                    <h4>PLAN</h4>
                    <p>Map out your monthly spending ahead of time.</p>
                </div>
                <div className='cardB'>
                    <img src={require('../../assets/green-arrow.png')}/>
                    <h4>TRACK</h4>
                    <p>Log your expenditures and keep them organized.</p>
                </div>
                <div className='cardC'>
                    <img src={require('../../assets/green-arrow.png')}/>
                    <h4>SAVE</h4>
                    <p>Set aside extra money for when you need it.</p>
                </div>
            </div>
        </main>
    )
};