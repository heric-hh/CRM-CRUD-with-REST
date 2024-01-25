const url = "http://localhost:3000/clientes";

export const newClient = async client => {
    
    try {
        await fetch( url , { 
            method: "POST", 
            body: JSON.stringify(client),
            headers: {
                "Content-Type": "application/json"
            } 
        } );
        
        window.location.href = "index.html";

    } catch (error) {
        console.log( error );
    }
};

export const getClients = async () => {

    try {  
        const results = await fetch( url );
        const clients = await results.json();
        return clients;

    } catch (error) {
        console.log( error ); 
    }

};

export const deleteClient = async id => {
    
    try {
        await fetch( `${url}/${id}`  , {
            method: "DELETE"
        }) 
    } catch ( error ) {
        console.log( error );
    }
    
};


export const getClientById = async id => {
    try {
        const result = await fetch( `${url}/${id}` );
        const client = await result.json();
        return client; 
    } catch (error) {
        console.log( "Error: " + error );
    }
}

export const updateClient = async client => {
    try {
        await fetch( `${url}/${client.id}` , {
            method: "PUT",
            body: JSON.stringify( client ),
            headers: {
                "Content-Type": "application/json"
            }
        } )
        window.location.href = "index.html";
    } catch (error) {
        console.log( error );
    }
};