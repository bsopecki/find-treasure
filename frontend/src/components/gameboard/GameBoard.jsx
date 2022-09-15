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
    <div className="center">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${dimension.width}, 100px)`,
          gridTemplateRows: `repeat(${dimension.height}, 100px)`,
          border: "#6034AD 2px solid",
        }}
      >
        {cellsArray.map((row, i) =>
          row.map((col, j) => (
            <div
              style={{
                border: "#6034AD 1px solid",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "inherit",
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
