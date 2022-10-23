const pl = document.getElementById('player-list');

let players = [];

pl.addEventListener('input', e => {
    //console.log(e.currentTarget.value);
    players = e.currentTarget.value.split('\n').map(p => (p.startsWith('- [x]')) ? p.slice(6).replace(/ \([^)]*\)/, '') : null).filter(e => e !== null);
}, true);



function generateText(type) {
    switch (type) {
        case 'intro':
            navigator.clipboard.writeText('Ark of Osiris will be on Sunday at 20 UTC.\n' +
                'If you are interested and are sure to participate, reply to this mail. You have until 20 UTC on thursday to register.\n' +
                'Please do not register if you are not sure to participate.\n' +
                '\n' +
                'If you have a good rally/garrison, please tell me.\n' +
                '\n' +
                'See you on the field,\n' +
                'Wørmy.\n');
            break;
        case 'list':
            navigator.clipboard.writeText('Hey! Here is the list of players for TLB Osiris at 20 UTC on Sunday. Please make sure to be in TLB tonight at reset otherwise I won’t be able to register you. I will send an email with a short strategy before the fight. \n' +
                '\n' +
                players.map(e => `• ${e.replace(/ -.*/, '')}\n`).join('') +
                '\n' +
                'Have a nice weekend and see you on the field!\n' +
                'Wørmy.\n');
            break;
        case 'strategy':
            const mid = Math.ceil(players.length / 2);
            navigator.clipboard.writeText('North\n' +
                '\n' +
                players.slice(0, mid).map(e => `• ${e}\n`).join('') +
                '\n' +
                'South\n' +
                '\n' +
                players.slice(mid).map(e => `• ${e}\n`).join('') +
                '\n' +
                '\n' +
                'At the start:\n' +
                'Kirtny will launch a cavalry rally on our north obelisk.\n' +
                'Wørmy will launch an archer rally on our south obelisk with his garrison.\n' +
                '\n' +
                'Main phase:\n' +
                'Follow markers, fill garrisons, fill rallies and accompany them in open field.\n' +
                'Always keep an eye on the obelisks, we must not lose them.\n' +
                '\n' +
                'Ark:\n' +
                '4 to 5 minutes before the ark spawns, try to send as many marches as possible towards the middle and try and win the ark (that’s usually how we win the game :)).\n' +
                '\n' +
                'Have fun!\n' +
                'Wørmy.\n')
            break;
        case 'recap':
            navigator.clipboard.writeText(new URL(`checklist/index.html?list=${btoa(encodeURIComponent(players.map(p => p.slice(0,8).replaceAll(';',',')).join(';')))}`, window.location).href);
            break;
    }
}

const intro = document.getElementById('intro-mail');
const list = document.getElementById('list-mail');
const strategy = document.getElementById('strategy-mail');
const recap = document.getElementById('checklist-recap');

intro.addEventListener('click', generateText.bind(null, 'intro'), true);
list.addEventListener('click', generateText.bind(null, 'list'), true);
strategy.addEventListener('click', generateText.bind(null, 'strategy'), true);
recap.addEventListener('click', generateText.bind(null, 'recap'), true);
