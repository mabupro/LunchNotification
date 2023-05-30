async function onClickFoodButton(id) {
    const elem = document.getElementById(id);
    const lunchRef = db.collection('menu').doc(id);
    const foodDoc = await lunchRef.get();
    // if(foodDoc.exists){
        console.log(foodDoc.data());
        const foodData = foodDoc.data();
    //}
    if(foodData.stock){  //stock===true
        elem.style.visibility = "hidden";
        lunchRef.set({stock: false});
        console.log(lunchRef);
    }else{
        elem.style.visibility = "visible";
        lunchRef.set({stock: true});
        console.log(lunchRef);
    }   
}
