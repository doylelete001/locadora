import axios from 'axios';
import React, { useState, useEffect } from 'react';


const ClienteList = ({ onDeleteClick, onEditClick }) => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchCientes();
    }, []);
    const fetchCientes = async () => {
        try {
            const response = await axios.get('/api/patients');
            setClientes(response.data);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }

    };


    return (
        <div>
            <h2>lista de Clientes </h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        {cliente.nome} - {cliente.cpf}
                        <button onClick={() => onEditClick(cliente.id)}>Excluir</button>
                        <button onClick={() => onDeleteClick(cliente.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ClienteList;

