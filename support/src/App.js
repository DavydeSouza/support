import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form' // Importando o componente Button do React Bootstrap

function App() {
  // Definindo o estado para os campos de entrada e a mensagem de erro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simples validação
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Limpar a mensagem de erro se os campos estiverem preenchidos
    setError('');

    // Lógica para autenticação
    console.log('Email:', email);
    console.log('Senha:', password);

    // Aqui você pode adicionar sua lógica para enviar os dados para uma API
  };

  return (
    <main>
      <section>
        <div>
          <h2 className='login_title'>Suporte SOFT</h2>
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <form onSubmit={handleSubmit}>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>

            <div>
              <label className='login_label'>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                maxLength={12}
              />
            </div>

            {/* Usando o componente Button do React Bootstrap */}
            <Button type="submit" className='input' variant="primary">
              Entrar
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
