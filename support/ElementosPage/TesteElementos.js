class testElementos {


Nome = () => { return ':nth-child(1) > :nth-child(2) > .form-control'}

Sobrenome = () => { return ':nth-child(1) > :nth-child(3) > .form-control'}

Address = () => { return '.col-md-8 > .form-control'}

Email = () => { return '#eid > .form-control'}

CampoTelefone = () => { return ' :nth-child(4) > .col-md-4 > .form-control'}
 
CampoGender = () => { return'.col-md-4 > :nth-child(2) > .ng-valid'}

CampoHobbies = () => {return '#checkbox2'}

Languages = () => {return '#msdd'}

SelecionarLanguages = () => { return ':nth-child(1) > .ui-corner-all'}
ValidarCampoLanguages = () => { return ':nth-child(8) > .col-md-3'}

Camposkills = () => { return '#Skills'}

Country = () => { return '#countries'}

SelectCountry = () => { return '#select2-country-container'}

AnodeNascimento = () => { return '#yearbox'} 

CampoDateOfBirthMesdeAniversario = () => { return ' :nth-child(11) > :nth-child(3) > .form-control'}

Campodediadenascimento = () => { return '#daybox'}

Digitoasenha = () => { return '#firstpassword'}

Confirmeasenha = () => { return '#firstpassword'}

Submit = () => { return '#submitbtn'}

BotaoRefresh = () => {return '#Button1'}

}
export default testElementos;