let parent = document.querySelector('.hero')
let mehsul =[
    {
       
        yazi: "algae",
        qiymet: 100,
        about: "Lorem ipsum dolor sit amet",
        image: "download (6).jpg"
    },
    {
        yazi: "kalonxoe",
        qiymet: 150,
        about: "Lorem ipsum dolor sit amet",
        image: "download (6).jpg"
    },
    {
        yazi: "hidra",
        qiymet: 300,
        about: "Lorem ipsum dolor sit amet",
        image: "download (6).jpg"
   
    },

]
mehsul.forEach((mehsullar)=>{
    let melumat=document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <div class="sekil">
        <img src="./assets/img/${mehsullar.image}" alt="">
    </div>
    <h1 class="yazi">${mehsullar.yazi}</h1>
    <p >${mehsullar.about}</p>
    <span >${mehsullar.qiymet} $</span>
    <button class="btn">Buy Product</button>
`
parent.appendChild(card);
})
//axirda biraz sizin koda baxdim