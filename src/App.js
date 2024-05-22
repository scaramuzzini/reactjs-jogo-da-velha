import { useState } from 'react';


const user = {
  name: "Ricky",
  imageUrl:
    "https://sm.ign.com/ign_br/news/r/rick-and-m/rick-and-morty-season-7-gets-rick-heavy-first-look-fall-rele_d9gq.jpg",
  imageSize: 300,
};


const userMorty = {
  name: "Morty",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-2kTBLNLYJRQgj5FW_mSp5an063znmmocx7D06X180A&s",
  imageSize: 300,
};

function MeuComponente() {
  const [numCliques, setNumCliques] = useState(0);

  function handleClick() {
    setNumCliques(numCliques + 1)
    console.log('Oi, isto é uma mensagem no console.')
  }
  
  return (
    <button onClick={handleClick}>
      Clique aqui! Já clicou {numCliques} vezes
    </button>
  )
}

function MeuPainel() {
  
  return (
    <>
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
      <MeuComponente />
    </>
  )
}

function Profile() {
  return (
    <>
      <h1>Nome: {userMorty.name}</h1>
      <MeuComponente />
      <img
        className="avatar"
        src={userMorty.imageUrl}
        alt={"Foto de " + userMorty.name}
        style={{
          width: userMorty.imageSize,
          height: userMorty.imageSize,
        }}
      />
    </>
  );
}

const products = [
  { title: 'Repolho', isFruit: false, id: 1 },
  { title: 'Alho', isFruit: false, id: 2 },
  { title: 'Maçã', isFruit: true, id: 3 },
  { title: 'qualquer fruta', isFruit: true, id: 4 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}



export default MeuPainel;
