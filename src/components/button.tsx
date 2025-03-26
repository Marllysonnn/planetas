import './scss/button.scss'

function Button({ nameButton, onClick, className }: 
                { nameButton: string, onClick: () => void, className: string }) {
    return (
        <button className={className} onClick={onClick}>
            { nameButton }
        </button>
    );
} 

export default Button;