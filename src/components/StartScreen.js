import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Palavra Secreta</h1>
        <p>Clique no botão para iniciar o jogo</p>
        <button onClick={startGame}>Começar a jogar</button>
    </div>
  )
}

export default StartScreen;