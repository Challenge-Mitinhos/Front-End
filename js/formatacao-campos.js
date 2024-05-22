campoCPF = document.getElementById("txtField4")
campoTEL = document.getElementById("txtField5")

campoCPF.addEventListener("input", function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '')
                          .replace(/(\d{3})(\d)/, '$1.$2')
                          .replace(/(\d{3})(\d)/, '$1.$2')
                          .replace(/(\d{3})(\d)/, '$1-$2')
                          .replace(/(-\d{2})\d+?$/, '$1');
    e.target.value = cpfPattern;
});

campoTEL.addEventListener("input", function(e){
    var value = e.target.value;
    var telPattern = value.replace(/\D/g, '')
                          .replace(/(\d{2})(\d)/, '($1) $2')
                          .replace(/(\d{4})(\d)/, '$1-$2')
                          .replace(/(-\d{4})\d+?$/, '$1')
    e.target.value = telPattern;
})