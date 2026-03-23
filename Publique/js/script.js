    function supprimerMembre(id) {
        const routeComplete = '/api/equipe/' + id;
        
        fetch(

            routeComplete,{method: "DELETE"}

        ).then(

            (reponse) => reponse.json()

        ).then(

            (donne) => window.location.href = donnee.routeAccueil

        ).catch(

            (erreur) => console.log(erreur)
        )
        

    }