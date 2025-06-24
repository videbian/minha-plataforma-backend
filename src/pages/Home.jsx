import React from 'react';
import AdminDashboard from './AdminDashboard'; // Pode estar importando o AdminDashboard

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Bem-vindo à Minha Plataforma!</h1>
      <p>Esta é a página inicial da sua aplicação.</p>
      <p>Use o menu de navegação para explorar as funcionalidades.</p>

      {/* Exemplo: Se a Home estiver renderizando o AdminDashboard diretamente */}
      {/* <div style={{ marginTop: '40px' }}>
        <h2>Visão Geral Rápida</h2>
        <AdminDashboard />
      </div> */}
    </div>
  );
}

export default Home;
