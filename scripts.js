window.onload = function() {
    const title = ["Hello Jon", "Funny Seeing You Here"]
    const random = Math.floor(Math.random() * title.length);
    console.log (random)
   document.querySelector("h1").innerHTML = title[random]
  };