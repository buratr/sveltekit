// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { page } from '$app/stores';
import {db, fireApp} from "$lib/firebase/firebase"
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"; 

export const prerender = true;

// Получаем доступ к Firestore
//console.log(page)
export const load = async ({ params }) => {
  /*  let serverData:any = {
        currentProduct: null,
        relatedProducts: null
    }*/
    let products: Array<any> = []
    console.log(params.slug)
    let nameProduct = params.slug
    const fetchProducts = async () => {  
        const q = query(collection(db, "product"), where("slug", "==", nameProduct));
        const querySnapshot = await getDocs(q);
        //console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
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
         // serverData.currentProduct = products
         //const firestore = fireApp.firestore();
        //const docRef = doc(db, "product", "MgejYBBIF9xzGLbDRfpO");
        //const docSnap = await getDoc(docRef);
       // const citiesRef = collection(db, "product");
        //const query = citiesRef.where('slug', '==', "slug");
        //const cities = await getDoc(doc(citiesRef, "SF")
        //const res = await fireApp.collection('product').where(fireApp.firestore.FieldPath.documentId(), '==', 'leviosa').get()
        //const querySnapshot = await firestore.collection('product').where("slug", '==', "leviosa").get();
        //console.log(docSnap.data())
        /*products.push({
            id: docSnap.id,
             name: docSnap.data().name,
             description: docSnap.data().description,
             img: docSnap.data().img,
             price: docSnap.data().price,
             discount: docSnap.data().discount,
             slug: docSnap.data().slug
        })*/
       /* let relProducts: Array<any> = []
        const queryRelated = await getDocs(collection(db, "product"));
		queryRelated.forEach((doc) => {
			const t = doc.data().name
			relProducts.push({
				id: doc.id,
				name: doc.data().name,
				description: doc.data().description,
				img: doc.data().img,
				price: doc.data().price,
				discount: doc.data().discount,
				slug: doc.data().slug
			})
		});
        serverData.relatedProducts = relProducts*/
		return products
    }

    const fetchRelatedProducts = async () => { 
        let relProducts: Array<any> = []
        const queryRelated = await getDocs(collection(db, "product"));
		queryRelated.forEach((doc) => {
			const t = doc.data().name
			relProducts.push({
				id: doc.id,
				name: doc.data().name,
				description: doc.data().description,
				img: doc.data().img,
				price: doc.data().price,
				discount: doc.data().discount,
				slug: doc.data().slug
			})
		});
        return relProducts
    }


    

    return {
       currentProduct: fetchProducts(),
       relatedProducts: fetchRelatedProducts(),
    }
}