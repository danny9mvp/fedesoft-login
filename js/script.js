function mostrarContainerRegistro(){
	var containerLogin=document.getElementById('containerLogin');
	var containerRegistro=document.getElementById('containerRegistro');
	var body = document.getElementsByTagName('body')[0];
	if(containerRegistro.style.display == "none"){
		containerLogin.style.display = "none";
		containerRegistro.style.display = "block";
		body.style.backgroundImage="url('https://images4.alphacoders.com/104/104026.jpg')";
		body.style.backgroundSize="cover";
	}
	else{
		containerRegistro.style.display = "none";
	}
}
function mostrarContainerLogin(){
	var containerLogin=document.getElementById('containerLogin');
	var containerRegistro=document.getElementById('containerRegistro');
	var body = document.getElementsByTagName('body')[0];
	if(containerLogin.style.display == "none"){
		containerRegistro.style.display = "none";
		containerLogin.style.display = "block";
		body.style.backgroundImage="url('https://orig00.deviantart.net/a712/f/2010/172/4/d/kisuke_urahara_by_asfalothgem.jpg')";
		body.style.backgroundSize="cover";	
	}
	else{
		containerLogin.style.display = "none";
	}
}

function validarPasswords(pass, confirmPass){
	if(pass != confirmPass)
		return false;
	else
		return true;
}

function validarMail(email){
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	return regex.test(email);
}

function validarTelefono(telefono){	
	var regex=/^\d{7}$/;
	return regex.test(telefono);
}
function validarLogin(){
	var user=document.getElementById('txtUser');
	var lblErrUser=document.getElementById('lblErrUser');
	var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!regex.test(user.value)){
		user.focus();
		lblErrUser.innerHTML='¡El email de usuario no es correcto!'
		lblErrUser.style.color="#d64161";
	}
}
function validarRegistro(){
	//Campos input
	var pass=document.getElementById('txtNewPass');
	var confirmPass=document.getElementById('txtConfirmPass');
	var email=document.getElementById('txtNewEmail');
	var telefono=document.getElementById('txtNewPhone');
    //Labels para mensajes de validación
    var lblErrConfirmPass=document.getElementById('lblErrConfirmPass');
    var lblErrMail=document.getElementById('lblErrMail');
    var lblErrPhone=document.getElementById('lblErrPhone');
    var p1=pass.value;
    var p2=confirmPass.value;
    var e=email.value;
    var t=telefono.value;
	if(!validarPasswords(p1,p2)){
		confirmPass.focus();
		lblErrConfirmPass.innerHTML='¡Las contraseñas no coinciden!';
		lblErrConfirmPass.style.color="#d64161";
	}
	if(!validarMail(e)){
		email.focus();
		lblErrMail.innerHTML='¡La dirección de correo no es válida!';
		lblErrMail.style.color="#d64161";		
	}
	if(!validarTelefono(t)){
		telefono.focus();
		lblErrPhone.innerHTML='¡El número de teléfono no es válido!';
		lblErrPhone.style.color="#d64161";		
	}
	if(validarPasswords(p1,p2)&&validarMail(e)&&validarTelefono(t)){
		alert('¡Usuario registrado con éxito!');
		mostrarContainerLogin();
	}
}