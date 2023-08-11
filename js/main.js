
// var arrAudio= ["../tunes/c.wav","../tunes/a.wav","../tunes/d.wav","../tunes/e.wav","../tunes/f.wav","../tunes/g.wav","../tunes/h.wav","../tunes/j.wav","../tunes/k.wav","../tunes/l.wav","../tunes/o.wav", "../tunes/p.wav", "../tunes/s.wav", "../tunes/t.wav", "../tunes/u.wav", "../tunes/w.wav","../tunes/y.wav"  ]



// var arrKeys= ["c","a","d","e","f","g","h","j","k","l","o","p","s","t","u","w","y"]
// each(arrKeys, function(el,i){
//     $("#container").append(
//         `<div class=white key id="${el}">${el}</div>`
//     )
//     })

// each(arrAudio,function(el,i){
//     // $("#audioContainer").empty()
//     console.log(arrKeys[i]);
//     var currentId="aud-"+arrKeys[i]
//   $("#audioContainer").append(
//     `<audio src=${el} id=${currentId} class="Au" >${arrKeys[i]}</audio>`
//   )
// })
// document.addEventListener('keydown', function (event) {    
    //     if(event.key === "b") {console.log(event.key);}
    //     console.log(event.code);
    // })
    
    
    $(".piano-card").on("click", function(){
    $(".piano-card").hide("slow")
})

// var audioA = $("#aud-a")[0]
// $("#a").on("click", function(){
//     audioA.play()
// })
// // })
// var audioD = $("#aud-d")[0]
// $("#d").on("click", function(){
//     audioD.play()
// })
// var audioE = $("#aud-e")[0]
// $("#e").on("click", function(){
//     audioE.play()
// })
// var audioF = $("#aud-f")[0]
// $("#f").on("click", function(){
//     audioF.play()
// })
// var audioG = $("#aud-g")[0]
// $("#g").on("click", function(){
//     audioG.play()
// })
// var audioH = $("#aud-h")[0]
// $("#h").on("click", function(){
//     audioH.play()
// })
// var audioJ = $("#aud-j")[0]
// $("#j").on("click", function(){
//     audioJ.play()
// })
// var audioK = $("#aud-k")[0]
// $("#k").on("click", function(){
//     audioK.play()
// })
// var audioL = $("#aud-l")[0]
// $("#l").on("click", function(){
//     audioL.play()
// })
// var audioO = $("#aud-o")[0]
// $("#o").on("click", function(){
//     audioO.play()
// })
// var audioP = $("#aud-p")[0]
// $("#p").on("click", function(){
//     audioP.play()
// })
// var audioS = $("#aud-s")[0]
// $("#s").on("click", function(){
//     audioS.play()
// })
// var audioT = $("#aud-t")[0]
// $("#t").on("click", function(){
//     audioT.play()
// })
// var audioU = $("#aud-u")[0]
// $("#u").on("click", function(){
//     audioU.play()
// })
// var audioW = $("#aud-w")[0]
// $("#w").on("click", function(){
//     audioW.play()
// })
// var audioY = $("#aud-y")[0]
// $("#y").on("click", function(){
//     audioY.play()
// })
// var audioC = $("#aud-c")[0]
// $("#c").on("click", function(){
//     audioC.play()
// })
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
}

var arrKeyss=['KeyC','KeyA','KeyD','KeyE','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','KeyO','KeyP','KeyS','KeyT','KeyU','KeyW','KeyY']
var audioss= [audioC,audioA,audioD,audioE,audioF,audioG,audioH,audioJ,audioK,audioL,audioO,audioP,audioS,audioT,audioU,audioW,audioY]
var keyId=["#c","#a,","#d","#e","#f","#g","#h","#j","#k","#l","#o","#p","#s","#t","#u","#w","#y"]

each(keyId,function(id){
    $(id).on("click",function(){
        for(var j=0; j<audioss.length;j++){
            audioss[j].play()
        }
    })
})

each(arrKeyss,function(key,i){
    document.addEventListener('keydown',function(event){
        for(var k = 0; i<audioss.length;i++){
        if(event.code == key){
         audioss[i].play() 
        }
    }
    }
    
)
})

// var currentCode = null
// document.addEventListener('keydown', function(event) {

//     if (event.code == 'KeyC') {
//       console.log(event.code)
//       audioC.play()
//        currentCode = 'KeyC'
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyA') {
//       console.log(event.code)
//       audioA.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyD') {
//       console.log(event.code)
//       audioD.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyE') {
//       console.log(event.code)
//       audioE.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyF') {
//       console.log(event.code)
//       audioF.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyG') {
//       console.log(event.code)
//       audioG.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyH') {
//       console.log(event.code)
//       audioH.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyJ') {
//       console.log(event.code)
//       audioJ.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyK') {
//       console.log(event.code)
//       audioK.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyL') {
//       console.log(event.code)
//       audioL.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyO') {
//       console.log(event.code)
//       audioO.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyP') {
//       console.log(event.code)
//       audioP.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyS') {
//       console.log(event.code)
//       audioS.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyT') {
//       console.log(event.code)
//       audioT.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyU') {
//       console.log(event.code)
//       audioU.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyW') {
//       console.log(event.code)
//       audioW.play()
//     }
//   });
//   document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyY') {
//       console.log(event.code)
//       audioY.play()
//     }
//   });
















// $("#a").on("keydown", function(){
//    audioA.play()
// })

// var arrAudio= ["../tunes/c.wav","../tunes/a.wav","../tunes/d.wav","../tunes/e.wav","../tunes/f.wav","../tunes/g.wav","../tunes/h.wav","../tunes/j.wav","../tunes/k.wav","../tunes/l.wav","../tunes/o.wav", "../tunes/p.wav", "../tunes/s.wav", "../tunes/t.wav", "../tunes/u.wav", "../tunes/w.wav","../tunes/y.wav"  ]
// var arrKeys= ["c","a","d","e","f","g","h","j","k","l","o","p","s","t","u","w","y"]
// each


