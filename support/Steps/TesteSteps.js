/* global Given, Then, When, And */

import TestePage from '../PageObjects/TestePage'
const Pagina = new TestePage

Given("que acesso ao Site automation", () =>{
 Pagina.abrirUrl();

})

When("Preencher Nome", () =>{
    Pagina.Nome();
})

And("Preencher Sobrenome", () =>{
    Pagina.Sobrenome();
})

And("Address", () =>{
    Pagina.Address();
})

And("Email", () =>{
    Pagina.Email();
})

And("Preencher o Campo Telefone", () =>{
    Pagina.preenchercampoTelefone();
})

And("Seleciono o tipo Gender", () =>{
    Pagina.Gender();
})

And("Seleciono Hobbies", () =>{
    Pagina.Hobbies();
})

And("Languages", () =>{
    Pagina.Languages();

})

And("skills", () =>{
    Pagina.skills();
})

And("Country", () =>{
    Pagina.Country();
})

And("Select Country", () =>{
    Pagina.SelectCountry();
})

And("Ano de Nascimento", () =>{
    Pagina.AnodeNascimento();

})
And("Seleciono Date of Birth Mes de Nascimento", () =>{
    Pagina.DateOfBirthMesdeAniversario();
})

And("Seleção de data de Nascimento", () =>{
    Pagina.DateOfBirthdiadeNascimento();
})
And("Digito a senha", () =>{
    Pagina.Senha();
})

And("Confirm Password", () =>{
    Pagina.Confirmeasenha();
})

And("Não Envio de dados", () =>{
    Pagina.Submit();
})
And("Clico no Botao Refresh", () =>{
    Pagina.ClicarBotaoRefresh();  
})

Then("Verifico que os dados preenchidos e em seguida limpa a tela", () =>{
 Pagina.ValidarTelaLimpa();
})