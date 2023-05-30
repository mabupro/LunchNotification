const db = firebase.firestore();
db.collection('menu')
  .limit(20)
  .onSnapshot((snapshot) => {
    let items=[];
    console.log("Snapshot：検知しました。");

    window.onpageshow = function(event) {
      if (event.persisted) {
        console.log("Leroad：リロード。");
        window.location.reload();
      }
  };
  
},err => console.log(err));
