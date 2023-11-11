import './Blocks.css'
import pizza from './images/pizza-maker.jpg'
import dining from './images/dining-table.jpg'
import drinks from './images/drinks.jpg'

const blocks = [{
    heading: 'Mediterranean cuisine made with passion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed orci mi. Nullam mollis massa eget lacus pretium ornare. Aenean quis turpis ac augue laoreet malesuada ut sed urna.',
    image: pizza,
    imageAlt: ""
}, {
    heading: 'Contemporary fine dining',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed orci mi. Nullam mollis massa eget lacus pretium ornare. Aenean quis turpis ac augue laoreet malesuada ut sed urna.',
    image: dining,
    imageAlt: ""
}, {
    heading: 'Happy hour every weekday',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed orci mi. Nullam mollis massa eget lacus pretium ornare. Aenean quis turpis ac augue laoreet malesuada ut sed urna.',
    image: drinks,
    imageAlt: ""
}]

function Blocks () {
    return (
        <section className="blocks">
            {blocks.map((block, i) => (
                <article className="block" key={i}>
                    <div className="image-container">
                        <img src={block.image} alt={block.imageAlt} />
                    </div>
                    <div className="content">
                        <h3>{block.heading}</h3>
                        <p>{block.description}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default Blocks;