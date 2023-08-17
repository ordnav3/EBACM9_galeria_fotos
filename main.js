$(document).ready(function(){
    
    $('header button').click(()=>{
        $('form').slideDown()
    })

    $('#btn-cancelar').click(()=>{
        $('form').slideUp()
    })

    $('form').on('submit',function(e){
        e.preventDefault()
        const novaimagem = $('#nova-imagem').val()
        const novoitem = $('<li style="display: none"> </li>')
        $(`<img src="${novaimagem}"/>`).appendTo(novoitem)
        $(`
            <div class="imagem-link">
            <a href="${novaimagem}" target="_blank">Ver Imagem em tamanho real</a>
            </div>
            `).appendTo(novoitem)
            $(novoitem).appendTo('ul')
            $(novoitem).fadeIn(1000)
            $('#nova-imagem').val(' ')

    })
})