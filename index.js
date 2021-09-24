const video = document.querySelector('.video__file'); // присвоили переменой video класс нашего видео
const videoText = document.querySelector('.video__text'); //присвоили переменной videoText класс нашего текста
video.addEventListener('play', () => {videoText.style.display = ('none')}); //слушаем событие play и меняем стиль
                                                                            // на display none
