import React from 'react';

const BannerContato = () => {
  return (
    <div
      style={{
        height: '250px',
        backgroundColor: '#25492a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        paddingTop: '5px',
      }}
    >
      <h1 style={{ fontSize: '2.9rem', fontWeight: 'bold', marginBottom: '10px' }}>QUEM SOMOS</h1>
      <p>Apoiar agricultores familiares e promover a agricultura sustentável.</p>
      <button
        style={{
          backgroundColor: 'white',
          color: '#25492a',
          border: 'none',
          padding: '10px 100px',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px 0',
        }}
      >
        Clique Aqui
      </button>
      <p>Se precisar de algo a mais, procure-nos.</p>
    </div>
  );
};

export default BannerContato;
