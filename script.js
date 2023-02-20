
function pesquisar() {
    const input = document.getElementById('input').value  
    const url = `https://viacep.com.br/ws/${input}/json/`

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            getData(data)
        })
    
    })
}


document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.getElementById('btn');
      
      btn.click();
    
    }
  });
    


function getData(dados) {



    let resultado = document.getElementById('textarea')
    //textarea.style.display = "flex";



    if (dados.erro) {
        resultado.innerHTML = "Não foi possível encontrar o endereço!"
    } else {
        resultado.innerHTML = `<p>Rua/Av: ${dados.logradouro}</p>
                               <p>Bairro: ${dados.bairro}</p>
                               <p>Cidade: ${dados.localidade}/${dados.uf}</p>`
    }
}
   


