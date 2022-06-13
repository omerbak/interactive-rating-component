const ratingBtns = document.querySelectorAll(".rating-box .rating");
const submit = document.querySelector(".rating-state .submit");
const ratingState = document.querySelector(".rating-state");
const thankState = document.querySelector(".thank-state");


//Active rating selection function
ratingBtns.forEach((btn) => {

    btn.addEventListener("click", (e) => {

        ratingBtns.forEach((btn) => {
            btn.classList.remove("active");
            
        })
        e.target.classList.add("active");
    })
})

//Submit function

submit.addEventListener("click", () => {
    const currentRatingSubmit = document.querySelector(".rating-box .rating.active");

    if(currentRatingSubmit){
        const currentRatingShow = document.querySelector(".rating-result span");
        currentRatingShow.textContent = currentRatingSubmit.dataset.num;
        ratingState.style.opacity = "0";
        
        setTimeout(() =>{
            ratingState.style.display = "none";
            thankState.style.display = "flex";
            
            setTimeout(() => {
                thankState.style.opacity = "1";
            }, 200)
        }, 300)
        
       
    } else{
        const noticeExist = document.querySelector(".rating-state .notice");
       if(!noticeExist){
        const notice = document.createElement("div");    
        notice.setAttribute("class", "notice");
        notice.innerHTML = "Please Choose A Rating"
        ratingState.appendChild(notice); 
       } 
       
    }
    
})