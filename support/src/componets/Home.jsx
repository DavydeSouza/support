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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">Support Soft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#about">Sobre</Nav.Link>
                            <Nav.Link href="#services">Serviços</Nav.Link>
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
                    Software para controle, abertura e fechamento de chamado
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
