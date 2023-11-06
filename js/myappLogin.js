$(document).ready(function () {
    $('#login').submit(function (event) {
        event.preventDefault(); 
        const username = $('#nombre').val();
        const password = $('#contraseña').val();

        $.ajax({
            url: 'json/Login.json',
            dataType: 'json',
            success: function (users) {
                let loginSuccessful = false;
                $.each(users, function (index, user) {
                    if (user.username === username && user.password === password) {
                        loginSuccessful = true;
                        return false; 
                    }
                });

                if (loginSuccessful) {                    
                    window.location.href = 'ClientePerfil.html'; 
                } else {
                    alert('Credenciales incorrectas. Inténtalo de nuevo.');
                }
            },
            error: function () {
                alert('Hubo un error al iniciar sesión. Inténtalo de nuevo más tarde.');
            }
        });
    });
});
