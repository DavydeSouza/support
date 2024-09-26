// src/components/Home.jsx
import React, { useState } from 'react'; // Importando useState
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap'; // Importando Modal e Button
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'; // Importar o CSS personalizado

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <Navbar className='menunav' expand="lg">
                <Container>
                    <Navbar.Brand href="/home">Support Soft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home"></Nav.Link>
                            <Nav.Link href="#about"></Nav.Link>
                            <Nav.Link href="#services"></Nav.Link>
                            <Nav.Link href="#contact">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="d-flex">
                {/* Sidebar */}
                <nav className="bg-light border-right" id="sidebar" style={{ width: '250px' }}>
                    <ul className="list-unstyled components">
                        <li>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link onClick={handleShow}>Sobre</Nav.Link>
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
                    <p>Bem-vindo ao meu aplicativo!</p>
                </main>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sobre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Software para Controle de Chamados: Gestão Eficiente de Demandas

Nos dias de hoje, a eficiência no atendimento ao cliente é fundamental para o sucesso de qualquer organização. Um software de controle de chamados é uma ferramenta essencial que permite a abertura, acompanhamento e fechamento de solicitações de forma organizada e transparente.

Principais Recursos:

Abertura de Chamados: Interface intuitiva para que os usuários possam registrar suas demandas de maneira rápida e fácil, incluindo informações detalhadas sobre o problema.

Rastreamento em Tempo Real: Acompanhe o status de cada chamado em tempo real, garantindo que nada seja esquecido ou atrasado.

Prioridade e Classificação: Classifique os chamados por prioridade e categoria, permitindo que a equipe se concentre nas demandas mais urgentes.

Respostas Automatizadas: Crie respostas automáticas para as perguntas frequentes, otimizando o tempo da equipe de suporte.

Relatórios e Análises: Gere relatórios detalhados sobre o desempenho do atendimento, identificando áreas para melhoria e tendências nas solicitações.

Integração com Outros Sistemas: Conecte-se facilmente a outras ferramentas e sistemas utilizados pela empresa, promovendo uma gestão ainda mais integrada.

Benefícios:

Aumento da Satisfação do Cliente: Um atendimento ágil e organizado resulta em clientes mais satisfeitos e leais.
Melhoria na Produtividade da Equipe: Com processos automatizados, a equipe pode se concentrar em resolver problemas complexos em vez de tarefas administrativas.
Visibilidade e Transparência: Todos os envolvidos têm acesso às informações dos chamados, promovendo uma cultura de transparência.
A adoção de um software para controle de chamados não apenas melhora a eficiência operacional, mas também fortalece a relação com os clientes, contribuindo para o crescimento sustentável da sua empresa.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Home;
