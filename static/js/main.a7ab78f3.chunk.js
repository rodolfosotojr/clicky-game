(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Daenerys Targaryen",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/3/3a/Dany_S8_EP2infobox.jpg/revision/latest?cb=20190417235027"},{id:2,name:"Jon Snow",image:"https://pixel.nymag.com/imgs/daily/vulture/2017/08/28/thrones.w700.h700.jpg"},{id:3,name:"Arya Stark",image:"https://pixel.nymag.com/imgs/daily/vulture/2017/07/18/18-arya-stark.w700.h700.jpg"},{id:4,name:"Cersei Lannister",image:"https://pixel.nymag.com/imgs/daily/vulture/2013/06/14/14-bitchfaces-of-cersei-lannister.w700.h700.jpg"},{id:5,name:"Bran Stark",image:"https://www.gannett-cdn.com/-mm-/4db6a878d03fd7a3d70cc878b9bb64b9ca283c5c/c=0-187-2195-3114/local/-/media/2016/04/30/USATODAY/USATODAY/635976147928388714-Game-of-Thrones-Isaac-Hempstead-Wright.jpg?width=534&height=712&fit=crop"},{id:6,name:"Sansa Stark",image:"https://vignette.wikia.nocookie.net/gameofthrones/images/f/f3/Sansa_S8.jpg/revision/latest?cb=20190206213553"},{id:7,name:"Tyrion Lannister",image:"https://i.pinimg.com/originals/cd/0d/43/cd0d43b3d870462a65740f2018e63843.png"},{id:8,name:"Jamie Lannisters",image:"https://im.indiatimes.in/content/2019/Feb/jaime_lannister_azor_ahai_game_of_thrones_season_8_theory_1549457009.jpeg"},{id:9,name:"The Hound",image:"https://vignette.wikia.nocookie.net/villains/images/4/47/The_Hound.jpg/revision/latest?cb=20160215075509"},{id:10,name:"Little Finger",image:"https://s3.r29static.com//bin/entry/eee/720x864,85/1761871/image.webp"},{id:11,name:"Hodor",image:"https://pixel.nymag.com/imgs/daily/vulture/2016/05/23/game-of-thrones-ep-5/23-got-ep-5-002.w700.h700.jpg"},{id:12,name:"Bronn",image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/35/1504284334-bronn.jpg"}]},,,function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),c=t.n(r),s=t(3),m=t(4),o=t(7),l=t(5),g=t(8);t(15);var h=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))};t(16);var d=function(e){return i.a.createElement("span",null,i.a.createElement("h1",{className:"title"},e.children),";",i.a.createElement("h2",{className:"status"},e.status),i.a.createElement("h2",{className:"score"},e.score))};t(17);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},p=t(6);var f=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"jumbotron"},i.a.createElement("h1",{className:"display-4"},"Clicky Game!"),i.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once! If you click on an image more than once, the game ends and you can restart the game at any time.")))},y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={characters:p},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"shuffle",value:function(e){var a,t,n;for(n=e.length-1;n>0;n--)a=Math.floor(Math.random()*(n+1)),t=e[n],e[n]=e[a],e[a]=t;return e}},{key:"componentDidMount",value:function(){this.setState({characters:this.shuffle(this.state.characters)})}},{key:"render",value:function(){return i.a.createElement(u,null,i.a.createElement(d,null,"Clicky Game!"),i.a.createElement(f,null),i.a.createElement("br",null),this.state.characters.map(function(e){return i.a.createElement(h,{id:e.id,name:e.name,image:e.image})}))}}]),a}(n.Component);c.a.render(i.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a7ab78f3.chunk.js.map