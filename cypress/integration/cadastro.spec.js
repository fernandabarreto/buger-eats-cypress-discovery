
import signup from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'


describe ('Signup', function(){

    it('User shoul be deliver', function(){

        var deliver = SignupFactory.deliver() 

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        //Modal de sucesso 
        const expectedMenssage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShoulBe(expectedMenssage)

    })

    it('Incorrect document', function(){

        var deliver = SignupFactory.deliver() 
         deliver.cpf = '097736434AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit() 
        signup.alertMessageShouldBe('Oops! CPF inválido') 
    })

    it('Incorrect email', function(){

        var deliver = SignupFactory.deliver() 
         deliver.email = 'fernanda.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit() 
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
        
    })

    context('Required fields', function() {
//Lup 
    const messages = [ 
        {field: 'name', output: 'É necessário informar o nome'}, 
        {field: 'cpf', output: 'É necessário informar o CPF'}, 
        {field: 'email', output: 'É necessário informar o email'}, 
        {field: 'postalcode', output: 'É necessário informar o CEP'}, 
        {field: 'number', output: 'É necessário informar o número do endereço'}, 
        {field: 'delivery_method', output: 'Selecione o método de entrega'}, 
        {field: 'cnh', output: 'Adicione uma foto da sua CNH'}, 

    ]
    before(function(){
        signup.go()
        signup.submit() 
    })
    messages.forEach(function(msg){
        it(`${msg.field} is resquired`, function(){
            SignupPage.alertMessageShouldBe(msg.output)

        })

    } )
    
})
})