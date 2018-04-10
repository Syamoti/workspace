function loginChat(){
  this.$password = $('#password-login');
  var password = this.$password.val();
     if ( password == "aaa" ){
         location.href = 'index.html';
     }else{
         alert( "パスワードが違います!" );
     }
}
