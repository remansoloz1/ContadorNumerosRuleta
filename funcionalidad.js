function copiarTodo(){
    let texto=document.getElementById('texto');
    texto.select();
    texto.setSelectionRange(0,99999);
    document.execCommand('copy');
}

const textarea=document.querySelector("textarea");
textarea.addEventListener("keyup",e=>{
    let scHeight=e.target.scrollHeight;
    textarea.computedStyleMap.height=`${scHeight}` 
});