import enviroment  from '../../support/enviroment.js'
import users       from '../../support/users.js'
import campos      from '../../support/login_locators.js'
 
describe('Test Linkedin', () => {

    beforeEach(() => {
        cy.visit(enviroment.linkedin),
        cy.get(campos.CAMPOS.LOGIN).type(users.ADMIN.USER),
        cy.get(campos.CAMPOS.SENHA).type(users.ADMIN.PASSWORD),
        cy.get(campos.CAMPOS.BOTAO).click()
    })

    it('Login' , () => { 
        
        cy.get(campos.CAMPOS.BOTAO_PESQ).type('Raphael Xavier'),
        cy.contains('Full Stack Developer at Simplus').click({force:true}),
        cy.wait(20000),
        cy.contains('Enviar mensagem').click(),
        cy.wait(20000),
       //  cy.contains('Conectar').click({force:true})
       cy.get(campos.CAMPOS.MSG).type(enviroment.mensagem),
       cy.get(campos.CAMPOS.BOTAO_MSG).click()

    })

  

    

})


