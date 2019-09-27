const szolgaltatas = (erdekel_btn) =>{
    const data = erdekel_btn.getAttribute("data");
    const text_field = document.getElementById("bevizsgalas_type");
    text_field.value = data;

};