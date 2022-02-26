
//------making the reward position fixed at the top.. 
// The actuall property value "Sticky" is not working for me
//here and also the "fixed" value is not working the way i
//want it to be, so i made the reward_img "absolute"
// and when the "Window" is scrolled down and reached the
//reward_img, then the position of this property will become
//"fixed", which seems like the element is position property
//is "sticky" from the start.

window.addEventListener('scroll', function(e){
    //elements declaration
    let aside = document.getElementById('aside');
    let reward_img = document.getElementById("reward-img");
    
    
    let aside_pos = aside.offsetTop; /* check the top position 
    of the element, with regards to the position of its parent.
    */ 
    if(window.innerWidth>=1000) //if on PC then execute this code
    if(window.scrollY >= (aside_pos)){
     reward_img.style.position = "fixed";
     reward_img.style.top = 0;
    }else{
     reward_img.style.position = "absolute";
    }
});
// function rewardPosSticky(){
//     //elements declaration
// let aside = document.getElementById('aside');
// let reward_img = document.getElementById("reward-img");


// let aside_pos = aside.offsetTop; /* check the top position 
// of the element, with regards to the position of its parent.
// */ 
// if(window.innerWidth>=1000) //if on PC then execute this code
// if(window.scrollY >= (aside_pos)){
//  reward_img.style.position = "fixed";
//  reward_img.style.top = 0;
// }else{
//  reward_img.style.position = "absolute";
// }

// }
