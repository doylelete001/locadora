import axios from "axios";
import { useState } from "react";
import ClienteList from "./Cliente";
import ClienteEditForm from "./Cliente";

const ClientesPage =() => {
    const [isEditing, setIsEditing] = useState(false);
    const [editClienteId,setClienteId]= useState(null);

    const handleDeleteClick = (id) => {
        try{
            await axios.delete('/api/clietes/${id}');
            console.log('cliente com Id ${id} foi excluido com sucesso. ');
            fetchClientes();
        }catch (error) {
            console.error(' Erro ao excluir cliente com Id ${id}:', error );
        }
    };

    const handleEditClick = (id) => {
        setIsEditing(true);
        setEditingClienteId(id);
    }
}