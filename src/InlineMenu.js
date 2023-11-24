import './InlineMenu.css'

function InlineMenu () {
    return (
        <nav className="inline-menu">
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>About</button>
                </li>
                <li>
                    <button>Menu</button>
                </li>
                <li>
                    <button>Book a Table</button>
                </li>
            </ul>
        </nav>
    )
}

export default InlineMenu