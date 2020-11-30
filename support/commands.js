import enviroment from './enviroment'
import login_locator from './login_locators'
import USER from './users'

/* 
Cypress.Commands.add('login' , (enviroment.linkedin, USER.ADMIN.USER, USER.ADMIN.PASSWORD ) => {
    cy.visit(enviroment.linkedin)
    cy.get(login_locator.CAMPOS.LOGIN).type(USER.ADMIN.USER)
    cy.get(login_locator.CAMPOS.SENHA).type(USER.ADMIN.PASSWORD)
    cy.get(login_locator.CAMPOS.BOTAO).click()        
})

*/ 