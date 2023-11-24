import './Header.css'
import SlideoutMenu from './SlideoutMenu'
import InlineMenu from './InlineMenu'

function Header () {
    return (
        <header>
            <h1>Mona's Diner</h1>
            <InlineMenu />
            <SlideoutMenu />
        </header>
    )
}

export default Header