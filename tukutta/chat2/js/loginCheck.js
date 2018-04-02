

// 新規ユーザーの登録機能
firebase.auth().createUserWithEmailAndPassword(email, password)


// 既存ユーザーのログイン機能
firebase.auth().signInWithEmailAndPassword(email, password)
