import React from "react";
import axios from 'axios';

const ClienteEditForm = ({cliente, onSave}) =>{
    const[nome,setNome]= useState(cliente.nome);
    const[cpf, setCpf]= useState(cliente.cpf);
    const handleSave= async () =>{
        try{
            const updatedCliente = {id: cliente.id, mome, cpf};
            await axios.put('/api/clientes/${clientes.id}', updatedCliente);
            console.log('cliente com Id ${clientes.id} atualizado com sucesso.');
            onSave();
        }catch (error){
            console.error ('Erro ao atualizar cliente com id ${cliente.id}:', error);
        }
    };

return (
    <div>
        <h3>Editando O Cliente</h3>
        <input  
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="CPF"
        />
        <button onClick={handleSave}>Salvar</button>
    </div>
);

};