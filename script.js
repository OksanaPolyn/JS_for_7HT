
// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// const images = document.querySelectorAll('img')
// images.forEach(image => {
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active')
//     const img = document.createElement('img')
//     img.src = image.src
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//   })
// })

// lightbox.addEventListener('click', e => {
//   if (e.target !== e.currentTarget) return
//   lightbox.classList.remove('active')
// }

//1**
const lightbox= document.createElement ('div')
console.log(lightbox)
lightbox.id ='lightbox'
document.body.appendChild(lightbox)

//2** вибираэмо всі картинки, Цикля для кожної картинки  якщо функція дії -якщо є Собітие "клик"
//то у картинки -> функція (действие) дод класс "актив", 
// созд (перезаписываем) елементкартинки в новую переменную
//

const images = document.querySelectorAll('img')       //выбр все картинки
images.forEach(image => {                             //перебор картинок/->функція дії
  image.addEventListener ('click', e => {            // при осущ клика на карт
    lightbox.classList.add('active')                 //доб класс Актив

    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

//3 на Лайтбокс дод событие клик + функция для УД "актив". 
//але при кожному кліку фото накапливаются в Активе, 
//поєтому надо удалять педідущие активніе тк Актив нужен только один
//

lightbox.addEventListener('click', e => {     
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')


      

})


