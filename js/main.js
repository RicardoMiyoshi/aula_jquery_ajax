
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro); //jquery possibilita reescrever o comando abaixo
            // //document.getElementById("logradouro").innerHTML = response.logradouro;
            $("#bairro").html(response.bairro);
            // document.getElementById("bairro").innerHTML = response.bairro;
            $("#localidade").html(response.localidade);
            // document.getElementById("localidade").innerHTML = response.localidade;
            $("#uf").html(response.uf);
            // document.getElementById("uf").innerHTML = response.uf;
            $("#titulo_cep").html("CEP " + response.cep);
            // //alert(response.logradouro);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide(); // Para esconder a classe cep
    $(".barra-progresso").hide();
});