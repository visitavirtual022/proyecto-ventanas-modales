//Declaramos las variables
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

//Creamos las funciones

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

//Asociamos el listener a cada botón

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal)

  btnCloseModal.addEventListener('click', closeModal)
  overlay.addEventListener('click', closeModal)
}

//Cerramos la ventana emergente con el botón ESC

document.addEventListener('keydown', function (e) {
  // console.log(e, e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
