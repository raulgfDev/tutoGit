(function(){

    let contador = 0;
    const p = document.querySelector("#p");
    const btn = document.querySelector( "#btn" );
    btn.addEventListener(() => {

        if ( contador === 0 ){
            p.innerHTML = "Raúl";
            contador = 1;
        } else if ( contador === 1 ) {
            p.innerHTML = "Raúl González";
            contador = 2;
        } else if ( contador === 2 ) {
            p.innerHTML = "Raúl González Fernández";
            contador = 3;
        } else {
            p.innerHTML = "";
            contador = 0;
        }
    });

})();