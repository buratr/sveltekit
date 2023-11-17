// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import {db} from "$lib/firebase/firebase"
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs } from "firebase/firestore"; 

export const prerender = true;
let products: Array<any> = []

export const load = async () => {

    const fetchProducts = async () => {   
        const querySnapshot = await getDocs(collection(db, "product"));
		querySnapshot.forEach((doc) => {
			const t = doc.data().name
			products.push({
				id: doc.id,
				name: doc.data().name,
				description: doc.data().description,
				img: doc.data().img,
				price: doc.data().price,
				discount: doc.data().discount,
				slug: doc.data().slug
			})
		});
		return products
    }


    

    return {
       products_server: fetchProducts(),
    }
}