import enviroment  from '../../support/enviroment.js'
import users       from '../../support/users.js'
import campos      from '../../support/login_locators.js'
 
describe('Test Facebook', () => {
   

    it('Login' , () => { 
        
        cy.visit(enviroment.linkedin),
        cy.get(campos.CAMPOS.LOGIN).type(users.ADMIN.USER),
        cy.get(campos.CAMPOS.SENHA).type(users.ADMIN.PASSWORD),
        cy.get(campos.CAMPOS.BOTAO).click()

  
    })

    it('Pesquisar nome e adicionar', () => {

        cy.get(campos.CAMPOS.BOTAO_PESQ).type('Raphael Xavier'),
        cy.get('div').contains('Raphael Xavier').click()
    })

    

})


