// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
voidId = 'YOQTwVOskf8';
var player;
function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: voidId, // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: 1, // 자동 재생 유무
      loop: 1, // 반복 재생 유무
      playlist: voidId, // 반복 재생할 유튜브 영상 ID 목록
      controls: 0,
      disablekb: 1,
      rel: 0,
      showinfo: 0,
      enablejsapi: 1,
      modestbranding: 1,
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function(event) { 
        event.target.mute;
        event.target.preventDefault;
      },
    }
    
  });
}
