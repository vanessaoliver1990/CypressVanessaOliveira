Feature: Automatizar Site de Teste

Scenario: Preencher todos os campos do formulario
Given que acesso ao Site automation
When Preencher Nome
And Preencher Sobrenome
And Address
And Email
And Preencher o Campo Telefone
And Seleciono o tipo Gender
And Seleciono Hobbies
And Languages
And skills
And Country
And Select Country
And Ano de Nascimento
And Seleciono Date of Birth Mes de Nascimento
And Seleção de data de Nascimento
And Digito a senha
And Confirm Password
And Não Envio de dados
And Clico no Botao Refresh
Then Verifico que os dados preenchidos e em seguida limpa a tela
