// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Nav, Modal, Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'; // Importar o CSS personalizado
import { NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/chamados'; // URL base do backend

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [showChamadoModal, setShowChamadoModal] = useState(false); 
    const [showAmpliachamado, setShowAmpliachamado] = useState(false);
    const [chamado, setChamado] = useState({
        titulo: '',
        descricao: '',
        prioridade: ''
    });
    const [chamados, setChamados] = useState([]);
    const [selectedChamado, setSelectedChamado] = useState(null);

    // Handlers para modais
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChamadoClose = () => setShowChamadoModal(false);
    const handleChamadoShow = () => setShowChamadoModal(true);

    const handleAmpliachamadoShow = () => setShowAmpliachamado(true);
    const handleAmpliachamadoClose = () => setShowAmpliachamado(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChamado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para buscar chamados do backend
    const fetchChamados = async () => {
        try {
            const response = await axios.get(API_URL);
            setChamados(response.data);
        } catch (error) {
            console.error('Erro ao buscar os chamados:', error);
        }
    };

    // Função para criar um novo chamado
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL, chamado);
            setChamados((prevChamados) => [...prevChamados, response.data]); // Atualiza a tabela
            setChamado({ titulo: '', descricao: '', prioridade: '' });
            handleChamadoClose(); // Fecha o modal
        } catch (error) {
            console.error('Erro ao criar chamado:', error);
        }
    };

    // Função para deletar um chamado
    const handleDeleteChamado = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setChamados((prevChamados) => prevChamados.filter((chamado) => chamado.id !== id));
        } catch (error) {
            console.error('Erro ao deletar chamado:', error);
        }
    };

    const handleRowClick = (chamado) => {
        setSelectedChamado(chamado);
        handleAmpliachamadoShow();
    };

    // useEffect para carregar chamados ao montar o componente
    useEffect(() => {
        fetchChamados();
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
                            <Nav.Link onClick={handleChamadoShow}>Abertura de Chamado</Nav.Link>
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
                    <footer className="p-3">
                        <Nav.Link className="text-danger d-flex align-items-center">
                            <FiLogOut className="me-2" /> Logout
                        </Nav.Link>
                    </footer>
                </nav>

                <main className="flex-fill p-3">
                    <section className="mt-5">
                        <h3>Chamados Abertos</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Título</th>
                                    <th>Descrição</th>
                                    <th>Prioridade</th>
                                    {/*<th>Ações</th>*/}
                                </tr>
                            </thead>
                            <tbody>
                                {chamados.length > 0 ? (
                                    chamados.map((chamado, index) => (
                                        <tr key={index} onClick={() => handleRowClick(chamado)}>
                                            <td>{index + 1}</td>
                                            <td>{chamado.titulo}</td>
                                            <td>{chamado.descricao}</td>
                                            <td>{chamado.prioridade}</td>
                                            {/* 
                                            <td>
                                                <Button variant="danger" onClick={(e) => { 
                                                    e.stopPropagation();
                                                    handleDeleteChamado(chamado.id);
                                                }}>Excluir</Button>
                                            </td>
                                            */}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">Nenhum chamado aberto</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </section>
                </main>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sobre o Software</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Software para Controle de Chamados:</strong> Gestão Eficiente de Demandas</p>
                    <p><strong>Feito por:</strong> Davy de Souza</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

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

            <Modal show={showAmpliachamado} onHide={handleAmpliachamadoClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes do Chamado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedChamado && (
                        <>
                            <p><strong>Título:</strong> {selectedChamado.titulo}</p>
                            <p><strong>Descrição:</strong> {selectedChamado.descricao}</p>
                            <p><strong>Prioridade:</strong> {selectedChamado.prioridade}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleAmpliachamadoClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Home;
