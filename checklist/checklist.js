function generateCheckbox(name) {
    const p = document.createElement('div');
    p.append(document.createTextNode(name));
    p.classList.add('check-item');
    p.addEventListener('click', () => {
        p.parentNode.removeChild(p);
    }, false);
    return p;
}

function parseChecklist(encodedCL, container) {
    const l = decodeURIComponent(atob(encodedCL)).split(';');
    l.forEach((name) => {
        container.append(generateCheckbox(name));
    });
}

(function (){
    const p = new URLSearchParams(window.location.search);
    console.log(window.location.search, p)
    if (p.has('list')) parseChecklist(p.get('list'), document.body);
})()
