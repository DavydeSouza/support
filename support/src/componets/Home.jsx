// src/components/Home.jsx
import React, { useState } from 'react';
import {Nav, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'; // Importar o CSS personalizado
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <div className="d-flex">
               
                <nav className="bg-light border-right" id="sidebar">
                    <ul className="list-unstyled components">
                        <li>
                            <Nav.Link href='/home'>Principal</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#home">Abertura de Chamado</Nav.Link>
                        </li>
                        <li>
                            {/* Texto adicionado para o botão de modal */}
                            <Nav.Link onClick={handleShow}>Sobre o Software</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#services">Serviços</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#contact">Contato</Nav.Link>
                        </li>
                    </ul>
                </nav>

                {/* Main Content */}
                <main className="flex-fill p-3">
                    <h2>Página Inicial</h2>
                    <h1>Bem-vindo ao meu aplicativo!</h1>
                </main>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sobre o Software</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Software para Controle de Chamados:</strong> Gestão Eficiente de Demandas</p>
                    <p>Nos dias de hoje, a eficiência no atendimento ao cliente é fundamental para o sucesso de qualquer organização. Um software de controle de chamados é uma ferramenta essencial que permite a abertura, acompanhamento e fechamento de solicitações de forma organizada e transparente.</p>

                    <p><strong>Principais Recursos:</strong></p>
                    <ul>
                        <li>Abertura de Chamados: Interface intuitiva para que os usuários possam registrar suas demandas de maneira rápida e fácil, incluindo informações detalhadas sobre o problema.</li>
                        <li>Rastreamento em Tempo Real: Acompanhe o status de cada chamado em tempo real, garantindo que nada seja esquecido ou atrasado.</li>
                        <li>Prioridade e Classificação: Classifique os chamados por prioridade e categoria, permitindo que a equipe se concentre nas demandas mais urgentes.</li>
                        <li>Respostas Automatizadas: Crie respostas automáticas para as perguntas frequentes, otimizando o tempo da equipe de suporte.</li>
                        <li>Relatórios e Análises: Gere relatórios detalhados sobre o desempenho do atendimento, identificando áreas para melhoria e tendências nas solicitações.</li>
                        <li>Integração com Outros Sistemas: Conecte-se facilmente a outras ferramentas e sistemas utilizados pela empresa, promovendo uma gestão ainda mais integrada.</li>
                    </ul>

                    <p><strong>Benefícios:</strong></p>
                    <ul>
                        <li>Aumento da Satisfação do Cliente: Um atendimento ágil e organizado resulta em clientes mais satisfeitos e leais.</li>
                        <li>Melhoria na Produtividade da Equipe: Com processos automatizados, a equipe pode se concentrar em resolver problemas complexos em vez de tarefas administrativas.</li>
                        <li>Visibilidade e Transparência: Todos os envolvidos têm acesso às informações dos chamados, promovendo uma cultura de transparência.</li>
                    </ul>
                    <p>A adoção de um software para controle de chamados não apenas melhora a eficiência operacional, mas também fortalece a relação com os clientes, contribuindo para o crescimento sustentável da sua empresa.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Home;
