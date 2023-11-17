<script  lang="ts">
	//import '/src/input.css';
	import Home_rang from "$lib/components/Home_rang.svelte"
	import Home_product from "$lib/components/Home_product.svelte"
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import slide_01 from '$lib/images/slide_01.jpg';
	import slide_02 from '$lib/images/slide_02.jpg';
	import slide_03 from '$lib/images/slide_03.png';
	import furniture_img from '$lib/images/furniture_img.png';
	import { t, loadTranslations } from '$lib/translations';

	import logo_bt from '$lib/images/logo_bt.svg';
	import {db} from "$lib/firebase/firebase"
	import { initializeApp } from "firebase/app";
	import {getFirestore, collection, getDocs } from "firebase/firestore"; 
	//import {products} from "$lib/firebase/getproduct"
	
	async function getProduct() {
		const querySnapshot = await getDocs(collection(db, "product"));
		 
		querySnapshot.forEach((doc) => {
			//console.log(`${doc.id} => ${doc.data().name}`);
			//console.log(doc.data());
		});
		return querySnapshot
	}
	let products: Array<any> = []//= getProduct() 
	let productReady:boolean = false;
	getProduct().then(function(result:any) {
		 result.forEach((doc:any) => {
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
	}).then(()=>{
		productReady=true
	})
	
	// import { page } from '$app/stores';

	// const currentPage = $page;
	
	// async function setLocale(lok:any, curr:any ){
	// 	await loadTranslations(lok, curr);
	// }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- section hero -->
<section class="flex bg-cover justify-center bg-center bg-[url('/src/lib/images/main-background-hero.png')] py-36">
<div class="container">
<div class="flex justify-end">
	<div class="px-10 py-14 bg-[#FFF3E3] rounded-lg max-w-xl">
		<div class="font-['Poppins'] text-base font-semibold text-[#333333] tracking-widest">New Arrival</div>
		<div class="font-['Poppins'] text-5xl font-bold text-[#B88E2F]">
			Discover Our <br> New Collection
		</div>
		<div class="font-['Poppins'] text-lg font-medium text-[#333333] mt-4 mb-12">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
		</div>
		<button class="bg-[#B88E2F] px-16 py-6 text-[#ffffff] text-base font-bold uppercase hover:bg-[#d9b051]">
			BUY Now
		</button>
	</div>
</div>
</div>
</section>

<!-- section Browse The Range -->
<section class="flex justify-center mt-14 overflow-hidden">
	<div class="container">
		<div class="flex flex-col">
			<div class="flex justify-center mx-auto flex-col items-center mb-14">
  				<div class="font-['Poppins'] text-3xl font-bold text-[#333333]">
					Browse The Range
				</div>
				<div class="font-['Poppins'] text-xl font-normal text-[#333333] text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
			</div>
			<div class="grid grid-cols-[1fr_1fr_1fr] gap-4 justify-between">
				<Home_rang src={"/src/lib/images/dining.jpg"} name={"Dining"}/>
				<Home_rang src={"/src/lib/images/Living.jpg"} name={"Living"}/>
				<Home_rang src={"/src/lib/images/Bedroom.jpg"} name={"Bedroom"}/>
			</div>
		</div>
	</div>
</section>

<!-- section Our Products -->
<section class="flex justify-center mt-14 mb-16">
	<div class="container">
		<div class="flex flex-col">
			<div class="flex justify-center mx-auto flex-col items-center mb-14">
  				<div class="font-['Poppins'] text-3xl font-bold text-[#333333]">
					Our Products
				</div>
			</div>
			<div class="flex flex-wrap justify-between">

				 {#if productReady}
				 <!-- {products} -->
					{#each products as product}
						<Home_product obj={product}/>
					{/each}
					{:else}
					<div class="product_card max-w-sm flex flex-col relative mb-4 mr-4">
						<div class="w-[284px] h-[300px] bg-slate-200"></div>
						<div class="pt-4 pr-5 pb-7 pl-4 bg-[#F4F5F7]">
							<div class="font-['Poppins'] text-2xl font-semibold text-[#3A3A3A] mb-2">-----</div>
							<div class="font-['Poppins'] text-base font-medium text-[#898989] mb-2">------</div>
							<div class="flex items-center justify-between flex-wrap">
								<div class="font-['Poppins'] text-xl font-semibold text-[#3A3A3A] mr-2">Rp 00.00
								</div>
								<div class="font-['Poppins'] text-base font-normal text-[#B0B0B0] line-through">Rp 00.00
								</div>
							</div>
						</div>
					</div>
					<div class="product_card max-w-sm flex flex-col relative mb-4 mr-4">
						<div class="w-[284px] h-[300px] bg-slate-200"></div>
						<div class="pt-4 pr-5 pb-7 pl-4 bg-[#F4F5F7]">
							<div class="font-['Poppins'] text-2xl font-semibold text-[#3A3A3A] mb-2">-----</div>
							<div class="font-['Poppins'] text-base font-medium text-[#898989] mb-2">------</div>
							<div class="flex items-center justify-between flex-wrap">
								<div class="font-['Poppins'] text-xl font-semibold text-[#3A3A3A] mr-2">Rp 00.00
								</div>
								<div class="font-['Poppins'] text-base font-normal text-[#B0B0B0] line-through">Rp 00.00
								</div>
							</div>
						</div>
					</div>
					<div class="product_card max-w-sm flex flex-col relative mb-4 mr-4">
						<div class="w-[284px] h-[300px] bg-slate-200"></div>
						<div class="pt-4 pr-5 pb-7 pl-4 bg-[#F4F5F7]">
							<div class="font-['Poppins'] text-2xl font-semibold text-[#3A3A3A] mb-2">-----</div>
							<div class="font-['Poppins'] text-base font-medium text-[#898989] mb-2">------</div>
							<div class="flex items-center justify-between flex-wrap">
								<div class="font-['Poppins'] text-xl font-semibold text-[#3A3A3A] mr-2">Rp 00.00
								</div>
								<div class="font-['Poppins'] text-base font-normal text-[#B0B0B0] line-through">Rp 00.00
								</div>
							</div>
						</div>
					</div>
					<div class="product_card max-w-sm flex flex-col relative mb-4 mr-4">
						<div class="w-[284px] h-[300px] bg-slate-200"></div>
						<div class="pt-4 pr-5 pb-7 pl-4 bg-[#F4F5F7]">
							<div class="font-['Poppins'] text-2xl font-semibold text-[#3A3A3A] mb-2">-----</div>
							<div class="font-['Poppins'] text-base font-medium text-[#898989] mb-2">------</div>
							<div class="flex items-center justify-between flex-wrap">
								<div class="font-['Poppins'] text-xl font-semibold text-[#3A3A3A] mr-2">Rp 00.00
								</div>
								<div class="font-['Poppins'] text-base font-normal text-[#B0B0B0] line-through">Rp 00.00
								</div>
							</div>
						</div>
					</div>
				{/if}
				

				
			
			
			</div>
			<div class="text-center mt-8">
				<button class="font-['Poppins'] text-base font-semibold text-[#B88E2F] py-3 px-16 bg-transparent border border-[#B88E2F] hover:text-[#fff] hover:bg-[#B88E2F]">
					Show More
				</button>
			</div>
		</div>
	</div>
</section>
 <!-- section rooms -->

 <section class="py-11 pl-24 bg-[#FCF8F3] overflow-hidden flex">
	<div class="flex flex-row justify-start items-center mx-auto">
		<div class="max-w-md mr-10">
			<div class="font-['Poppins'] text-4xl font-bold text-[#3A3A3A]">
				50+ Beautiful rooms inspiration
			</div>
			<div class="font-['Poppins'] text-base font-medium text-[#616161] mb-6">
				Our designer already made a lot of beautiful prototipe of rooms that inspire you
			</div>
			<button class="bg-[#B88E2F] px-9 py-3 text-[#ffffff] text-base font-bold uppercase hover:bg-[#d9b051]">
				Explore More
			</button>
		</div>
		<!-- slider -->
		<div class="flex flex-row w-auto relative">

			<div class="cursor-pointer absolute bottom-1/2 left-[86%] drop-shadow-md w-12 h-12 rounded-full bg-[#ffffff] flex justify-center items-center hover:bg-[#fafafa]">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M9.00006 5L16.0001 12L9.00006 19" stroke="#B88E2F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>

			<div class="absolute flex flex-row w-auto items-center bottom-6 left-[430px]">
				<div class="rounded-full border border-[#B88E2F] mr-5 p-2 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
						<circle cx="5.5" cy="5.5" r="5.5" fill="#B88E2F"/>
					</svg>
				</div>
				<div class="mr-5 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
						<circle class="hover:fill-[#B88E2F]" cx="5.5" cy="5.5" r="5.5" fill="#D8D8D8"/>
					</svg>
				</div>
				<div class="mr-5 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
						<circle class="hover:fill-[#B88E2F]" cx="5.5" cy="5.5" r="5.5" fill="#D8D8D8"/>
					</svg>
				</div>
				<div class="mr-5 cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
						<circle class="hover:fill-[#B88E2F]" cx="5.5" cy="5.5" r="5.5" fill="#D8D8D8"/>
					</svg>
				</div>
			</div>

			<div class="max-w-[404px] mr-6 shrink-0 relative">
				<img src="{slide_01}" alt="">
				<div class="absolute bottom-6 left-6 flex items-end">
					<div class="bg-[#ffffff] bg-opacity-75 p-8">
						<div class="font-['Poppins'] text-base font-medium text-[#616161]">
							01 - Bed Room
						</div>
						<div class="font-['Poppins'] text-3xl font-semibold text-[#3A3A3A] mt-2">
							Inner Peace
						</div>
					</div>
					<a href="#" class="bg-[#B88E2F] p-3 flex justify-center items-center hover:bg-[#d9b051]">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
			</div>

			<div class="max-w-[372px] max-h-[486px] mr-6 shrink-0 overflow-hidden">
				<img src="{slide_02}" alt="">
			</div>

			<div class="max-w-[372px] max-h-[486px] mr-6 shrink-0 overflow-hidden">
				<img src="{slide_03}" alt="">
			</div>

			<div class="max-w-[372px] max-h-[486px] mr-6 shrink-0 overflow-hidden">
				<img src="{slide_03}" alt="">
			</div>

		</div>

	</div>
 </section>

 <!-- section Furniture -->
 <section class="py-16 overflow-hidden">
	<div class="flex justify-center mx-auto flex-col items-center mb-14">
		<div class="font-['Poppins'] text-xl font-bold text-[#616161] mb-2">
			Share your setup with
		</div>
		<div class="font-['Poppins'] text-4xl font-bold text-[#3A3A3A]">
			#FuniroFurniture
	  </div>
  </div>
  <!-- ticker -->
  <div class="flex ">
	<img src="{furniture_img}" alt="" class="h-[721px] mr-4 max-w-none animate-[ticker_50s_linear_infinite]">
	<img src="{furniture_img}" alt="" class="h-[721px] mr-4 max-w-none animate-[ticker_50s_linear_infinite]">
	<img src="{furniture_img}" alt="" class="h-[721px] mr-4 max-w-none animate-[ticker_50s_linear_infinite]">
  </div>
 </section>
 
