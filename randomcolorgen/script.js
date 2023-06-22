function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

// change title when user changes tab
// let docTitle=document.title;
// window.addEventListener("blur",()=>{
//     document.title="Come Back ;(";
// });

// window.addEventListener("foucs",()=>{
//     document.title=docTitle;
// });

//notification permission by javascript 
// if(Notification.permission==="granted"){
//     new Notification("hello by phoenix")
// }
// else if(Notification.permission==="default"){
//     Notification.requestPermission().then(permission=>{
//         if(permission==="granted"){
//             new Notification("hello from phoenix")
//         }
//     })
// };