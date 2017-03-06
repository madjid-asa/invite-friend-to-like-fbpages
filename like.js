
var containerInvites = document.getElementsByClassName("listSection")[0];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function like(container){
    container.childNodes.forEach(function(ulInvites){
        console.log(ulInvites);
        ulInvites.childNodes.forEach (function (liInvites){
            setTimeout(function(){
                var bouttonLike = liInvites.querySelectorAll('a.uiButton._1sm');
                console.log(bouttonLike);
                bouttonLike = bouttonLike[0]
                if(bouttonLike){
                    console.log("on invite");
                    bouttonLike.click();
                }else{
                    console.log("déjà invité");
                }
            }, getRandomInt(2000, 2300));
        });
    });
}

like(containerInvites);
