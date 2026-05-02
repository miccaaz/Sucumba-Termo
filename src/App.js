
function App() {
  return (
    <div className="App">
      <h1>Subumba "Termo"</h1>
    </div>
  );
}

export default App

/* 

dados que precisamos rastrear:
  -- solução:
    -- string de 5 letras, ex: 'chuva'
  -- tentativas passadas:
    -- um array de tentativas anteriores
    -- cada tentativa é um array de objetos de letras [{}, {}, {}, {}, {}]
    -- cada objeto representa uma letra da palavra tentada {letra: 'a', cor: 'amarelo'}
  -- tentativa atual:
    -- string 'raios'
  -- letras do teclado:
    -- array de objetos de letras [{tecla: 'a', cor: 'verde'}, {}, {} ...]
  -- número de tentativas:
    -- um inteiro de 0 a 6

processo do jogo:
  -- inserindo palavras:
    -- o usuário digita uma letra e um espaço é preenchido com essa letra;
    -- ao pressionar delete, a letra anterior é apagada;
    -- ao pressionar enter, a palavra é enviada:
      -- se nem todos os espaços estiverem preenchidos, a palavra não é enviada;
      -- se a palavra já tiver sido usada em uma tentativa anterior, ela não é enviada.
  -- verificando palavras enviadas:
    -- cada letra é verificada para ver se corresponde à solução;
    -- cada letra recebe uma cor com base na sua presença na solução:
      -- correspondência exata (posição correta) é verde;
      -- correspondência parcial (existe na palavra, mas em posição diferente) é amarelo;
      -- sem correspondência (não existe na palavra) é cinza.
    -- a tentativa é adicionada à grade com as cores corretas;
    -- a tentativa atual avança para a próxima linha;
    -- as letras do teclado são atualizadas (cores).
  -- encerrando o jogo:
    -- quando a palavra tentada corresponde totalmente à solução:
      -- exibir modal dizendo 'muito bem'.
    -- quando o usuário fica sem tentativas:
      -- exibir modal dizendo 'que pena'.

*/