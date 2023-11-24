import './SlideoutMenu.css'
import { useState, useEffect } from 'react';

function SlideoutMenu () {
    const [open, setOpen] = useState(false)
    const [viewWidth, setViewWidth] = useState(0)

    function toggleOpen (e) {
        e.preventDefault();
        setOpen(!open)
    }

    useEffect(() => {
        function handleResize () {
            if (viewWidth < 1024) {
                if (window.innerWidth >= 1024) {
                    setOpen(false)
                }
            }

            setViewWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    })

    return (
        <div className="slideout-menu">
            <button className="hamburger" title="Open navigation" onClick={toggleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>
            <div
                className={"menu-escape-hatch" + (open ? " open" : "")}
                onClick={toggleOpen}
            />
            <nav className={open ? "open" : ""}>
                <ul>
                    <li>
                        <button title="Close navigation" onClick={toggleOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                            </svg>
                        </button>
                    </li>
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
        </div>
    )
}

export default SlideoutMenu