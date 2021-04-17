/// <reference types="cypress"/>


import testeElementos from '../ElementosPage/TesteElementos'
const Elementos = new testeElementos

const NavegadorUrl = Cypress.config("baseUrl")

class TestePage {

    abrirUrl() {

        cy.visit(NavegadorUrl)

    }

    Nome(){
        cy.get(Elementos.Nome()).type('Vanessa')

    }

    Sobrenome(){
        cy.get(Elementos.Sobrenome()).type('Oliveira')

    }

    Address(){
        cy.get(Elementos.Address()).type('Rua do Infinito e Além, 5 Bairro: Toy Store')
    }

    Email(){
        cy.get(Elementos.Email()).type('vanessa@yahoo.com')
    }
    
    preenchercampoTelefone(){
    cy.get(Elementos.CampoTelefone()).type('11956567475')

    }

    Gender(){
        cy.get(Elementos.CampoGender()).click()
    }

Hobbies(){
    cy.wait(500)
    cy.get(Elementos.CampoHobbies()).click()
}

Languages(){
    cy.wait(50)
   cy.get(Elementos.Languages()).dblclick({force:true})
   cy.wait(50)
   cy.get(Elementos.Languages()).dblclick({force:true})
   cy.wait(100)
   cy.get(Elementos.SelecionarLanguages()).click()
   cy.wait(50)
   cy.get(Elementos.ValidarCampoLanguages()).click({force:true})
}

skills(){
    cy.wait(100)
 cy.get(Elementos.Camposkills()).select('APIs') 

}

Country(){
    cy.get(Elementos.Country()).select('Brazil')

}

SelectCountry(){
    cy.get(Elementos.SelectCountry())
}
AnodeNascimento(){
    cy.get(Elementos.AnodeNascimento()).select('1990')
    cy.wait(1000)
      }

DateOfBirthMesdeAniversario(){
    cy.get(Elementos.CampoDateOfBirthMesdeAniversario()).select('March')

}

DateOfBirthdiadeNascimento(){
    cy.get(Elementos.Campodediadenascimento()).select('12')
    cy.wait(1000)
    
        }

        Senha(){
            cy.get(Elementos.Digitoasenha()).type('Teste@123')
        }

        Confirmeasenha(){
        cy.get(Elementos.Confirmeasenha()).type('Teste@123')
        }


        Submit(){
            cy.get(Elementos.Submit()).click()
        }

        ClicarBotaoRefresh(){
    cy.get(Elementos.BotaoRefresh()).click()
}
ValidarTelaLimpa(){
       cy.wait(1000)
    cy.screenshot()
}

}
export default TestePage;