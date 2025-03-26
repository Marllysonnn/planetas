import './scss/card.scss'

function Cards (
    { titleName, info}: 
    { titleName: string, info: string }
) {
    return (
        <div className='info'>
            <h3>{ titleName }</h3>
            <h1>{ info }</h1>
        </div>
    );
}

export default Cards;