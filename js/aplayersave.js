// function doStuff() {
//     var flag=0;
//     try{
//         ap=aplayers[0];
//         ap.list;
//         flag=1;
//     }catch{
//         setTimeout(doStuff, 50);
//         return;
//     }
//     if(flag){
//         ap=aplayers[0];
//         if(sessionStorage.getItem("musicIndex") != null){
//             musicIndex = sessionStorage.getItem("musicIndex");
//             musicTime = Number(sessionStorage.getItem("musicTime"));
//             ap.list.switch(musicIndex);
//             console.log(musicTime);
//             ap.seek(musicTime);
//             if(sessionStorage.getItem("musicPaused")!='1'){
//                 ap.play();
//             }
//         }else{
//             sessionStorage.setItem("musicPaused",0);
//         }
//         ap.on("pause",sessionStorage.setItem("musicPaused",1));
//         ap.on("play",sessionStorage.setItem("musicPaused",0));
//         setInterval(function(){
//             musicIndex = ap.list.index;
//             musicTime = ap.audio.currentTime;
//             sessionStorage.setItem("musicIndex",musicIndex);
//             sessionStorage.setItem("musicTime",musicTime);
//         },500);
//     }
// }
// doStuff();
