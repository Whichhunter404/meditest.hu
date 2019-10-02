const szolgaltatas = (erdekel_btn) =>{
    const data = erdekel_btn.getAttribute("data");
    const text_field = document.getElementById("bevizsgalas_type");
    text_field.value = data;

};

const toggle_id = (id) =>{
    const toggle_div = document.getElementById(id);
    toggle_div.style.transition = "all 1s";
    if(toggle_div.style.display==="none"){
        toggle_div.style.display = "inherit";
    }
    else{
        toggle_div.style.display = "none";
    }
};