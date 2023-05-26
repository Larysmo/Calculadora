 describe('Testando calculadora',()=>{
     it('Soma de números',()=>{
     cy.visit('/')
     cy.get('[value="7"]').click()
     cy.get('[value="+"]').click()
     cy.get('[value="6"]').click()
     cy.get('[value="="]').click()
     cy.get('#tela').should('have.text','13')
     })
     it('Subtração de números',()=>{
        cy.visit('/')
        cy.get('[value="7"]').click()
        cy.get('[value="-"]').click()
        cy.get('[value="6"]').click()
        cy.get('[value="="]').click()
        cy.get('#tela').should('have.text','1')
        })
        it('Multiplicação de números',()=>{
            cy.visit('/')
            cy.get('[value="7"]').click()
            cy.get('[value="x"]').click()
            cy.get('[value="6"]').click()
            cy.get('[value="="]').click()
            cy.get('#tela').should('have.text','42')
            })
            
        
    })
