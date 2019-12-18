var fontSize = 100;
var elm = document.documentElement;
elm.style.fontSize = fontSize * (elm.clientWidth/375) + 'px';


// function moreInfor(){
//   var page=1
//
//   $.ajax({
//     url:'http://kcapp.xktown.cn:8880/beforUser/selectPersonalSetListPhone.do',
//     type: 'post',
//     data:{
//       "currentPage":page
//     },
//     error:function(){
//       alert('网络异常，请稍后重试！');
//     },
//     success:function(data){
//       alert(data);
//     }
//   });
//
// }

