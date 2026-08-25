const ajustesBtn = document.querySelector('.ajustes-btn')
const menuPausa = document.querySelector('.menu-pausa')
const overlay = document.querySelector('.overlay-menu-pausa')
const continuarBtn = document.querySelector('.continuar-btn')
const reiniciarBtn = document.querySelector('.reiniciar-btn')
const salirBtn = document.querySelector('.salir-btn')

const settingsMenu = document.querySelector('.settings-menu')
const volverBtn = document.querySelector('.volver-btn')

ajustesBtn.addEventListener('click', () => {
    menuPausa.style.display = 'none'
    settingsMenu.style.display = 'flex'
})

volverBtn.addEventListener('click', () => {
    menuPausa.style.display = 'flex'
    settingsMenu.style.display = 'none'
})

continuarBtn.addEventListener('click', () => {
    menuPausa.style.display = 'none'
    overlay.style.display = 'none'
})


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const isHidden = getComputedStyle(menuPausa).display === 'none'

        if (isHidden) {
            menuPausa.style.display = 'flex'
            overlay.style.display = 'block'
        } else {
            menuPausa.style.display = 'none'
            settingsMenu.style.display = 'none'
            overlay.style.display = 'none'
        }
    }
})

// Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()

        tabBtns.forEach(b => b.classList.remove('active'))
        tabContents.forEach(c => c.classList.remove('active'))

        btn.classList.add('active')
        const targetTabId = btn.getAttribute('data-tab')
        document.getElementById(targetTabId).classList.add('active')
    })
})
