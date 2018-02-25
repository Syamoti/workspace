if( navigator.geolocation ){
    //Geolocation APIに対応している端末向け処理   navigator.geolocation.getCurrentPosition(successCall,errorCall);
    function successCall(position) {
      var getlat = position.coords.latitude;
      var getlng = position.coords.longitude;
      var getalt = position.coords.altitude;
      var getacc = position.coords.accuracy;
      var getaltacc = position.coords.altitudeAccuracy;
      var gethead = position.coords.heading;
      var getspeed = position.coords.speed;
      //データベースと接続する。。
      this.chatDataStore = new Firebase('https://chat2-4013c.firebaseio.com/');
      //データベースの中の「iti」に値を送り格納
      self.chatDataStore.child('iti').push({ido:getlat, keido:getlng});
    }

    function errorCall(errorcode) {
      switch(errorcode.code)     {
        case 1:
        var errmsg = "位置情報の利用がキャンセルされました";
        break;
        case 2:
        var errmsg = "現在地が取得できませんでした";
        break;
        case 3:
        var errmsg = "接続がタイムアウトしました";
        break;
      }
      alert(errmsg);  }
    }else {
}
