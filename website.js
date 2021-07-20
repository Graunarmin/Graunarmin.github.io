var yearOpen = false;
var openYear = "";

function toggle(id){
    ul_element = load_ul_element(id);
    img_element = load_img_element(id);

    if(ul_element){
        if(ul_element.className == 'closed'){
            if(!yearOpen){
                yearOpen = true;
                openYear = id;
            }else{
                change(openYear, 'close');
                yearOpen = true;
                openYear = id;
            }
            change(id, 'open');
        }else{
            openYear = "";
            yearOpen = false;
            change(id, 'close');
        }
    }
}

function load_ul_element(id){
    var ul = "ul_" + id;
    return document.getElementById(ul);
}

function load_img_element(id){
    var img = "img_" + id;
    return document.getElementById(img);
}

function change(element_id, toDo){
    this_ulElement = load_ul_element(element_id);
    this_imgElement = load_img_element(element_id);

    if(toDo == "open"){
        this_ulElement.className = "open";
        this_imgElement.src = "../images/opened.gif";
    }else{
        this_ulElement.className = "closed";
        this_imgElement.src = "../images/closed.gif";
    }
}

function openGit(url){
    window.open(url, "tab");
}