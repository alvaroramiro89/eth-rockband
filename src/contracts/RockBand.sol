// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RockBand {
    string[] public members; // Array dinámico para almacenar miembros de la banda
    uint8 private maxMembers = 5; // Número máximo de miembros de la banda (por defecto 5)

    // Evento que se emite cuando un miembro es agregado
    event MemberAdded(string name);

    // Función para agregar un miembro a la banda
    function addMember(string memory _name) public {
        require(members.length < maxMembers, "Band is full");
        members.push(_name);
        emit MemberAdded(_name); // Emitir evento después de agregar el miembro
    }

    // Función para eliminar al miembro más antiguo de la banda
    function deleteMember() public {
        require(members.length > 0, "No members, please add new");
        
        // Desplazar los miembros a la izquierda para eliminar al miembro más antiguo
        for (uint8 i = 1; i < members.length; i++) {
            members[i - 1] = members[i];
        }
        
        // Eliminar el último elemento
        members.pop();
    }

    // Función para obtener la lista de miembros
    function getMembers() public view returns (string[] memory) {
        return members;
    }

    // Función para establecer el número máximo de miembros
    function setMaxMembers(uint8 _maxMembers) public {
        require(_maxMembers >= members.length, "New max members must be greater than or equal to current members count");
        maxMembers = _maxMembers;
    }

    // Función para obtener el número máximo de miembros
    function getMaxMembers() public view returns (uint8) {
        return maxMembers;
    }
}
