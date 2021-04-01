document.getElementById('menu_toggle').addEventListener(
    'click',
    e => {
        document.getElementById('main_menu').classList.toggle('open');
})

document.getElementById('close_main_menu').addEventListener(
    'click',
    e => {
        document.getElementById('main_menu').classList.remove('open');
})

