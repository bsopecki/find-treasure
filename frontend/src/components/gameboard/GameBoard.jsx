import './GameBoard.css'

const GameBoard = () => {
  const dimension = {
    width: 5,
    height: 5,
  };

  const cellsArray = Array(dimension.width)
    .fill()
    .map((_, indexH) =>
      Array(dimension.height)
        .fill()
        .map((_, indexW) => indexW)
    );

  return (
    <div className="Gameboard">
      <div className="gameboard-cell-wrapper">
        {cellsArray.map((row, i) =>
          row.map((col, j) => (
            <div className='gameboard-cell'
              style={{
                
              }}
              data-dimension={`${i}-${j}`}
              key={Math.random().toString()}
            >
              {col}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameBoard;
