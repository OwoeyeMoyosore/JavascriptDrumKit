const PlaySound = (event) => {
    console.log(event?.keyCode);
    const audio = document.querySelector(`audio[data-key='${event?.keyCode}']`)
    const eachKey = document.querySelector(`.key[data-key="${event?.keyCode}"]`)
    // const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0; // to always reset the current time or rewind the audio to the start
    audio.play(); //to play the audio
    eachKey.classList.add('playing');
  }

  const removeTransition = (event) => {
    if(event?.propertyName !== "transform") return; //return if it's not transform
    console.log(event.propertyName);
    event.target.classList.remove('playing')
  }

  window.addEventListener('keydown', PlaySound) 
  const AllKeys = document.querySelectorAll(".key");
  AllKeys?.forEach(key => key.addEventListener("transitionend", removeTransition));