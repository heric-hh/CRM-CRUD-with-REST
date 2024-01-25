import { showAlert , validate } from "./funciones.js";
import { getClientById , updateClient } from "./API.js";

(function() {
    
    const nameInput = document.querySelector( "#nombre" );
    const emailInput = document.querySelector( "#email" );
    const phoneInput = document.querySelector( "#telefono" );
    const enterpriseInput = document.querySelector( "#empresa" );
    const idInput = document.querySelector( "#id" );

    document.addEventListener( "DOMContentLoaded" , async () => {
        const paramsURL = new URLSearchParams( window.location.search );
        const idClient = parseInt( paramsURL.get( "id" ) );
        const client = await getClientById( idClient );
        showClient( client );
        
        const form = document.querySelector( "#formulario" );
        form.addEventListener( "submit" , validateClient );
    });


    function showClient( client ) {
        const { name , email , phone , enterprise , id } = client;
        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        enterpriseInput.value = enterprise;
        idInput.value = id;
    }


    function validateClient( e ) {
        e.preventDefault();

        const client = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            enterprise: enterpriseInput.value,
            id: parseInt( idInput.value )
        };

        if ( validate( client ) ) {
            showAlert( "Todos los campos son obligatorios" );
            return;
        }

        updateClient( client );


    }

})();