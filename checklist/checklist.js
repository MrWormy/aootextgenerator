function generateCheckbox(name) {
    const p = document.createElement('div');
    p.append(document.createTextNode(name));
    p.classList.add('check-item');
    p.addEventListener('click', () => {
        const parent = p.parentElement;
        parent.removeChild(p);
        if (parent.nextElementSibling) {
            parent.nextElementSibling.append(p);
        }
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
    if (p.has('list')) parseChecklist(p.get('list'), document.body.firstElementChild);
})()
