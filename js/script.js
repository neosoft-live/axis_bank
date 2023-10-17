

function toggleClass(selector,classname){
    document.querySelectorAll(selector).forEach((obj)=>{
        if(obj.classList.contains(classname)){
            obj.classList.remove(classname);
        }else{
            obj.classList.add(classname);
        }
    })
}