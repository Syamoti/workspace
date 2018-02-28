
var CHAT = CHAT || {};

CHAT.fire = {
  init:function(){
    this.setParameters();
    this.bindEvent();
  },

  setParameters:function(){
    this.$name = $('#jsi-name');
    this.$textArea = $('#jsi-msg');
    this.$board = $('#jsi-board');
    this.$button = $('#jsi-button');

    //データベースと接続する。。
    this.chatDataStore = new Firebase('https://chat2-4013c.firebaseio.com/');
  },

  bindEvent:function(){
    var self = this;
    this.$button.on('click',function(){
      self.sendMsg();
    });

    //DBの「talks」から取り出す
    this.chatDataStore.child('talks').on('child_added',function(data){
      var json = data.val();
      self.addText(json['user']);
      self.addText(json['message']);
    });
  },

  //ユーザー、メッセージ送信
  sendMsg:function(){
    var self = this;
    if (this.$textArea.val() == ''){ return }

    var name = this.$name.val();
    var text = this.$textArea.val();

    //データベースの中の「talks」に値を送り格納
    self.chatDataStore.child('talks').push({user:name, message:text});
    self.$textArea.val('');
  },

  //受け取り後の処理
  addText:function(json){
   var msgDom = $('<li>');
   msgDom.html(json);
   this.$board.append(msgDom[0]);
   var btn = document.createElement('button');
   btn.type = 'button';
  }
}

$(function(){
  CHAT.fire.init();
});
