var card = window.document.getElementsByClassName("card")
        let corazon = window.document.getElementsByClassName("heart-icon")

        for (let pos = 0; pos < corazon.length ; pos++){
            corazon[pos].addEventListener('click',function(){
                var coraA = corazon[pos].getAttribute('fill')

                if(coraA != '#e07b67' ){
                corazon[pos].setAttribute('fill',"#e07b67")
                card[pos].style.border = "0.1rem solid var(--brand-color)"
                }else{
                corazon[pos].setAttribute('fill',"none")
                card[pos].style.border = "0.1rem solid var(--dark-40)"
                }
            
            })
        }