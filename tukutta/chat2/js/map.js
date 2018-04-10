
function mapInit() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position){
        //var centerPosition = new google.maps.LatLng(35.799572, 139.570250);
        var centerPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var option = {
          zoom : 17,
          center : centerPosition,
          mapTypeId : google.maps.MapTypeId.ROADMAP
        };
        //地図本体描画
        var googlemap = new google.maps.Map(document.getElementById('mapspace'), option);

        //情報ウインドウオプションの指定
        var infoWindowOption = {
          position : centerPosition,  //中心座標
          content : "あなた"  //ウインドウ内に表示する文字列
        };

        //情報ウインドウ追加
        var infoWindow = new google.maps.InfoWindow(infoWindowOption);
        infoWindow.open(googlemap);
      }

    )
  }
}
