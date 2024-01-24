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