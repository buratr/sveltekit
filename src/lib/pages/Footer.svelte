<script lang="ts">
	import { initializeApp } from "firebase/app";
	import {getFirestore, collection, addDoc } from "firebase/firestore"; 
    import { t, locales, locale, defaultLocale } from '$lib/translations';
   import { page } from '$app/stores';
   import logo_bt from '$lib/images/logo_bt.svg';
   import logo from '$lib/images/logo.svg';
   import cart from '$lib/images/cart.svg';
   import { goto } from '$app/navigation';
     $: ({ route } = $page.data);
	 let thankSub:boolean = false
   let local_n="";
   
   $:if($locale !== defaultLocale){
       local_n = "/"+$locale
   }else{
       local_n = ""
   }
let inputEmail:string = "";

const firebaseConfig = {
		apiKey: "AIzaSyDdXTxd7UgzoleyLWogcypU_9HtGoTv9XQ",
		authDomain: "project-furniro.firebaseapp.com",
		projectId: "project-furniro",
		storageBucket: "project-furniro.appspot.com",
		messagingSenderId: "333537642528",
		appId: "1:333537642528:web:187db79dcbf1eb2b8a9445"
	};

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

async function addmail(){
console.log(inputEmail)
	thankSub = true
	try {
	const docRef = await addDoc(collection(db, "subscribe"), {
		email: inputEmail,
		dste: new Date(),
	});
	console.log("Document written with ID: ", docRef.id);
	} catch (e) {
	console.error("Error adding document: ", e);
	}
inputEmail=""

}

//console.log(local_n)
</script>

<footer class="flex justify-center pt-12 border-t-[1px] border-[#ccc]">
	<div class="container">
		<div class="w-auto">
			<div class="flex justify-around flex-wrap">
				<div class="flex flex-col min-w-[250px] mr-6 mb-10 grow shrink">
					<div class="max-w-xs">
						<img src="{logo_bt}" alt="" class="h-[36px]">
					</div>
					<div class="mt-12 font-['Poppins'] text-base font-normal text-[#9F9F9F]">
						400 University Drive Suite 200 Coral Gables,<br/>
						FL 33134 USA
					</div>
				</div>

				<div class="grow shrink grid grid-cols-[max-content_max-content_max-content] gap-10 justify-between items-start">
					<div class="grid grid-rows-1 items-start gap-10">
						<div class="font-['Poppins'] text-base font-normal text-[#9F9F9F] mb-2">Links</div>
						<a aria-current={$page.url.pathname === `/${$locale}` || $page.url.pathname === `/` ? 'page' : undefined}
						 class="font-['Poppins'] text-base font-normal text-black hover:text-yellow-600" 
						 href="/{$locale}/">{$t('nav.home')}</a>
						<a aria-current={$page.url.pathname === `/${$locale}/shop` || $page.url.pathname === `/shop` ? 'page' : undefined}
						 class="font-['Poppins'] text-base font-normal text-black hover:text-yellow-600" 
						 href="/{$locale}/shop">{$t('nav.shop')}</a>
						<a aria-current={$page.url.pathname === `/${$locale}/about` || $page.url.pathname === `/about` ? 'page' : undefined}
						 class="font-['Poppins'] text-base font-normal text-black hover:text-yellow-600" 
						 href="/{$locale}/about">{$t('nav.about')}</a>
						<a aria-current={$page.url.pathname === `/${$locale}/contact` || $page.url.pathname === `/contact` ? 'page' : undefined}
						class="font-['Poppins'] text-base font-normal text-black hover:text-yellow-600" 
						href="/{$locale}/contact">{$t('nav.contact')}</a>
					</div>
					<div class="grid grid-rows-1 items-start gap-10">
						<div class="font-['Poppins'] text-base font-normal text-[#9F9F9F] mb-2">Help</div>
						<div class="font-['Poppins'] text-base font-normal text-black hover:text-yellow-600">Payment Options</div>
						<div class="font-['Poppins'] text-base font-normal text-black hover:text-yellow-600">Returns</div>
						<div class="font-['Poppins'] text-base font-normal text-black hover:text-yellow-600">Privacy Policies</div>
					</div>
					<div class="grid grid-rows-1 items-start gap-10">
						<div class="font-['Poppins'] text-base font-normal text-[#9F9F9F] mb-2">Newsletter</div>
						{#if thankSub}
						<div class="bg-slate-100 font-['Poppins'] text-base font-normal text-black p-3 rounded-md border border-orange-200">
							Thank you for subscribing
						</div>
						{:else}
						<form method="POST" class="flex" on:submit|preventDefault={addmail}>
							<input bind:value={inputEmail} name="email" type="text" placeholder="Enter Your Email Address" class="border-b-[1px] border-black">
							<button type="submit" class="ml-3 border-b-[1px] border-black">SUBSCRIBE</button>
						</form>
						{/if}
						
						
					</div>
				</div>

			</div>



			<div class="py-9 border-t-[1px] border-[#ccc] flex mt-12">
				<div class="mr-auto font-['Poppins'] text-base font-normal text-black">
					2023 furino. All rights reverved
				</div>
			</div>
		</div>
	</div>
</footer>
<style>
	a[aria-current='page']{
		color: burlywood;
	}
</style>