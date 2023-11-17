import {db} from "$lib/firebase/firebase"
import {getFirestore, collection, getDocs } from "firebase/firestore"; 


async function getProduct() {
    const querySnapshot = await getDocs(collection(db, "product"));
     
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().name}`);
        //console.log(doc.data());
    });
    return querySnapshot
}

export const products = getProduct()
