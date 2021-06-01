const btnSwitch = document.querySelector('#switch');


btnSwitch.addEventListener('click', () => {

    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');



    //Guardando modo en localStorage




    if (document.body.classList.contains('dark')) {

        localStorage.setItem('modo-dark', 'true');
    } else {

        localStorage.setItem('modo-dark', 'false')
    }

});


//obtenemos el modo actual

if (localStorage.getItem('modo-dark') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');


} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}