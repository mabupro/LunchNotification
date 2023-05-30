function onInitPage(){
    Login();
    firstStateFoodmenu();
}
async function Login(){
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    await firebase.auth().signInWithPopup(provider)

}
async function anonymousLogin(){
    await firebase.auth().signInAnonymously();
}
async function Logout(){
    await firebase.auth().signOut();
}
async function firstStateFoodmenu() {
    const foodElements = document.getElementsByClassName('food2');
    // 取得した要素の数を取得
    const len = foodElements.length;
    console.log(len);
    // console.log(foodElements);

    const menuCollectionRef = db.collection('menu');
    const foodDocs = await menuCollectionRef.get();
    // console.log(foodDocs.docs.map(snapshot => {
    //     return { docId: snapshot.id, data: snapshot.data() };
    // }));
    const foodinfos = foodDocs.docs.map(snapshot => {
        return { docId: snapshot.id, data: snapshot.data() };
    })
    //  スプレッド構文
    //  const a = [0,3,2];
    //  const b = [0,1,2];
    //  console.log([...a, ...b]);

    foodinfos.forEach(info => {
        const elem = document.getElementById(info.docId);
        if (info.data.stock) {
            elem.style.visibility = "visible";
            console.log(info.docId);
            console.log(info.data);
        } else {
            elem.style.visibility = "hidden";
            console.log(info.docId);
            console.log(info.data);
        }
    });
};

