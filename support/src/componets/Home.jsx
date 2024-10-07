// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Nav, Modal, Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'; // Importar o CSS personalizado
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [showChamadoModal, setShowChamadoModal] = useState(false); // Modal para abertura de chamado
    const [chamado, setChamado] = useState({
        titulo: '',
        descricao: '',
        prioridade: ''
    });
    const [chamados, setChamados] = useState([]); // Estado para armazenar os chamados

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChamadoClose = () => setShowChamadoModal(false);
    const handleChamadoShow = () => setShowChamadoModal(true);

    // Atualiza o estado do chamado conforme o usuário digita
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChamado(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Simulando o envio do formulário para uma API
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simular o envio de dados para uma API
        console.log('Chamado enviado:', chamado);

        // Aqui você pode usar fetch ou axios para enviar o chamado para uma API

        // Adicionando o chamado ao estado (simulando o retorno da API)
        setChamados(prevChamados => [...prevChamados, chamado]);

        // Resetando o formulário após o envio
        setChamado({ titulo: '', descricao: '', prioridade: '' });
        handleChamadoClose(); // Fecha o modal
    };

    // Simulação de recuperação dos chamados (usando useEffect para simular uma chamada à API)
    useEffect(() => {
        // Simulação de uma API que retorna os chamados
        const chamadosSimulados = [
            { titulo: "Problema no sistema", descricao: "Erro ao acessar", prioridade: "Alta" },
            { titulo: "Solicitação de suporte", descricao: "Não consigo acessar o e-mail", prioridade: "Média" }
        ];
        setChamados(chamadosSimulados);
    }, []);

    return (
        <>
            <div className="d-flex">
                <nav className="bg-light border-right" id="sidebar">
                    <ul className="list-unstyled components">
                        <li>
                            <Nav.Link href='/home'>Principal</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link onClick={handleChamadoShow}>Abertura de Chamado</Nav.Link> {/* Botão para abrir o modal de chamado */}
                        </li>
                        <li>
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
                    {/* Exibindo a lista de chamados */}
                    <section className="mt-5">
                        <h3>Chamados Abertos</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Título</th>
                                    <th>Descrição</th>
                                    <th>Prioridade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chamados.length > 0 ? (
                                    chamados.map((chamado, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{chamado.titulo}</td>
                                            <td>{chamado.descricao}</td>
                                            <td>{chamado.prioridade}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">Nenhum chamado aberto</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </section>
                </main>
            </div>

            {/* Modal Sobre o Software */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sobre o Software</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Aqui vai o conteúdo do software */}
                    <p><strong>Software para Controle de Chamados:</strong> Gestão Eficiente de Demandas</p>
                    <p>Nos dias de hoje...</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de Abertura de Chamado */}
            <Modal show={showChamadoModal} onHide={handleChamadoClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Abertura de Chamado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="titulo">
                            <Form.Label>Título do Chamado</Form.Label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                value={chamado.titulo}
                                onChange={handleInputChange}
                                required
                                placeholder="Digite o título do chamado"
                            />
                        </Form.Group>

                        <Form.Group controlId="descricao" className="mt-3">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="descricao"
                                value={chamado.descricao}
                                onChange={handleInputChange}
                                required
                                rows={3}
                                placeholder="Descreva o problema"
                            />
                        </Form.Group>

                        <Form.Group controlId="prioridade" className="mt-3">
                            <Form.Label>Prioridade</Form.Label>
                            <Form.Select
                                name="prioridade"
                                value={chamado.prioridade}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Selecione a prioridade</option>
                                <option value="Baixa">Baixa</option>
                                <option value="Média">Média</option>
                                <option value="Alta">Alta</option>
                            </Form.Select>
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleChamadoClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" type="submit">
                                Abrir Chamado
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Home;
