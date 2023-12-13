
window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const key = document.querySelector(`div[data-key="${e.code}"]`);
    if(!audio)return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('scale-[1.1]', 'shadow-[5px_5px_50px_-10px_rgba(234,179,8)]')
    key.classList.replace('border-black','border-yellow-500');

    ontransitionend = (e) => {
        e.target.classList.remove('scale-[1.1]','shadow-[5px_5px_50px_-10px_rgba(234,179,8)]')
        e.target.classList.replace('border-yellow-500','border-black');
        e.currentTime=0;
    };
})

const key= document.querySelectorAll(".key")
key.forEach(ke =>{
    ke.addEventListener('click',()=>{
        const audio = document.querySelector(`audio[data-key="${ke.dataset.key}"]`);
        audio.currentTime=0;
        audio.play();
    })
})
