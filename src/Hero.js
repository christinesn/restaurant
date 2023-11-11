import './Hero.css'
import dining from './images/outside-dining.jpg'

function Hero () {
    return (
        <div className="hero">
            <img src={dining} alt="People sitting at a round table with an abundance of food." />
        </div>
    )
}

export default Hero