var quantDeusuarios = parseInt(prompt('Quantos usuários deseja cadastrar?'))

let Usuarios = []

class Usuario {

    constructor(nome, idade, cpf){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

}

for(let i = 0; i < quantDeusuarios; i++){
    alert("Digite os dados do " + (i+1) + "º usuáro")
    let u = new Usuario(prompt('Nome:'),parseInt(prompt('Idade:')),prompt('CPF:'))
    Usuarios.push(u)
}

for (let valor of Usuarios) {
    document.write(`<p>Dados do usuário:</p>`)
    document.write(`<p>Nome: ${valor.nome}</p>`)
    document.write(`<p>Idade: ${valor.idade}</p>`)
    document.write(`<p>CPF: ${valor.cpf}</p>`)
    
}

// document.write(`${Usuarios[i].nome},${Usuarios[i].idade},${Usuarios[i].cpf}`)

// alert("Usuário 1")
// let u1 = new Usuario(prompt('Nome:'),parseInt(prompt('Idade:')),prompt('CPF:'))
// Usuario.cadastroUsuario(u1)

// alert("Usuário 2")
// let u2 = new Usuario(prompt('Nome:'),parseInt(prompt('Idade:')),prompt('CPF:'))
// Usuario.cadastroUsuario(u2)

// alert("Usuário 3")
// let u3 = new Usuario(prompt('Nome:'),parseInt(prompt('Idade:')),prompt('CPF:'))
// Usuario.cadastroUsuario(u3)





