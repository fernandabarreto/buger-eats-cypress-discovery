
   class SignupPage {
    go() {

       cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')


    }

        fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

    // Aqui estou mando o clicar objeto que desejo 
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('[type="button"]').click()

     // Aqui estou adicionando os campos no formulario 
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
       
    //Aqui estou verificando se os campos foram adicionados de forma correta. 
        cy.get('input[name="address"]').should('have.value', deliver.address.street)            
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

    //Aqui estlou selecionando um coteiner usando o direcionameno
        cy.contains('.delivery-method li', deliver.delivery_method).click()

    //Fazendo uplode de uma imagem 
        cy.get('input[accept^="image"]').selectFile('cypress/fixtures/images/cnh-digital.jpg', {force: true}) 
    }
        submit(){
    //Enviando o cadastro 
        cy.get('.button-success').click()

        }
      
        modalContentShoulBe(expectedMenssage){
     //Modal de sucesso 
            cy.get('.swal2-html-container')
            .should('have.text', expectedMenssage)

        }
        alertMessageShouldBe(expectedMessage) {
            //cy.get('.field .alert-error').should('have.text', expectedMessage) Para duas mensagens de erro 
           cy.contains('.alert-error', expectedMessage).should('be.visible') // Pode ser usado para varias mensagens de erro 

        }

  }

   

    export default new SignupPage;




