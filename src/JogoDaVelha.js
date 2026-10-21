import { useState } from 'react';

function Quadrado({quadrado, handleClick}) {
    const classe = quadrado === 'X' ? 'quadrado x' : quadrado === 'O' ? 'quadrado o' : 'quadrado';
    return (
        <button className={classe}
            onClick={handleClick}>
            {quadrado}
        </button>
    )
}
function Tabuleiro({vezDoX, quadrados, alterneJogador}) {
    function handleClick(indice) {
        if (verificarVencedor(quadrados) || quadrados[indice]) {
            return;
        }
        const proximaRodada = quadrados.slice();

        proximaRodada[indice] = vezDoX ? 'X' : 'O';
        alterneJogador(proximaRodada);
    }

    const vencedor = verificarVencedor(quadrados);

    let informativo;
    let statusClass = 'status';
    if (vencedor) {
        informativo = "🏆 Vencedor: " + vencedor;
        statusClass = 'status vencedor';
    } else {
        informativo = 'Agora é a vez de ' + (vezDoX ? 'X' : 'O');
    }
    return (
        <>
            <h2 className={statusClass}>{informativo}</h2>
            <div className="tabuleiro">
                <div className="linha">
                    <Quadrado quadrado={quadrados[0]} handleClick={() => handleClick(0)}/>
                    <Quadrado quadrado={quadrados[1]} handleClick={() => handleClick(1)}/>
                    <Quadrado quadrado={quadrados[2]} handleClick={() => handleClick(2)}/>
                </div>
                <div className="linha">
                    <Quadrado quadrado={quadrados[3]} handleClick={() => handleClick(3)}/>
                    <Quadrado quadrado={quadrados[4]} handleClick={() => handleClick(4)}/>
                    <Quadrado quadrado={quadrados[5]} handleClick={() => handleClick(5)}/>
                </div>
                <div className="linha">
                    <Quadrado quadrado={quadrados[6]} handleClick={() => handleClick(6)}/>
                    <Quadrado quadrado={quadrados[7]} handleClick={() => handleClick(7)}/>
                    <Quadrado quadrado={quadrados[8]} handleClick={() => handleClick(8)}/>
                </div>
            </div>
        </>
    )
}

function verificarVencedor(quadrados) {
    const combinacoesPremiadas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i=0; i < combinacoesPremiadas.length; i++) {
        const [p1, p2, p3] = combinacoesPremiadas[i];
        if (quadrados[p1] && quadrados[p1] === quadrados[p2] && quadrados[p2] === quadrados[p3]) {
            return quadrados[p1];
        }
    }

    return null;
}

function Jogo() {
    const [rodada, setRodada] = useState(0);
    const vezDoX = rodada % 2 === 0;
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const quadradosAtuais = historico[rodada];

    function alterneJogador(quadrados) {
        const proximaRodada = [...historico.slice(0, rodada + 1), quadrados];
        setHistorico(proximaRodada);
        setRodada(proximaRodada.length - 1);
    }

    function voltarSegundaRodada(rod) {
        setRodada(rod);
    }

    return (
        <div className="jogo-container">
            <h1>Jogo da Velha</h1>
            <div className="rodada-info">Rodada {rodada}</div>
            <Tabuleiro vezDoX={vezDoX} quadrados={quadradosAtuais} alterneJogador={alterneJogador}/>
            <div className="historico">
                <button className="reiniciar" onClick={() => voltarSegundaRodada(0)}>↺ Reiniciar</button>
                <button onClick={() => voltarSegundaRodada(1)}>1</button>
                <button onClick={() => voltarSegundaRodada(2)}>2</button>
                <button onClick={() => voltarSegundaRodada(3)}>3</button>
                <button onClick={() => voltarSegundaRodada(4)}>4</button>
                <button onClick={() => voltarSegundaRodada(5)}>5</button>
                <button onClick={() => voltarSegundaRodada(6)}>6</button>
                <button onClick={() => voltarSegundaRodada(7)}>7</button>
                <button onClick={() => voltarSegundaRodada(8)}>8</button>
            </div>
        </div>
    )

}

export default Jogo;
