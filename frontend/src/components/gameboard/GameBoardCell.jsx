import './GameBoardCell.css'

const GameBoardCell  = ({children}) => {
    return (
        <div className="cell">{children}</div>
    )
}

export default GameBoardCell