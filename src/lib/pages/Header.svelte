<script lang="ts">
	import { initializeApp } from "firebase/app";
	//import { getFirestore } from "firebase/firestore";
	import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

	import { t, locales, locale, defaultLocale } from '$lib/translations';
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import cart from '$lib/images/cart.svg';
	import login_icon from '$lib/images/login.svg';
	import lk from '$lib/images/lk.svg';
	import { goto } from '$app/navigation';
	import {auth} from "$lib/firebase/firebase"
	// const firebaseConfig = {
	// 	apiKey: "AIzaSyDdXTxd7UgzoleyLWogcypU_9HtGoTv9XQ",
	// 	authDomain: "project-furniro.firebaseapp.com",
	// 	projectId: "project-furniro",
	// 	storageBucket: "project-furniro.appspot.com",
	// 	messagingSenderId: "333537642528",
	// 	appId: "1:333537642528:web:187db79dcbf1eb2b8a9445"
	// };

	//const app = initializeApp(firebaseConfig);
	//const auth = getAuth(app);
	let userAuthStatus:boolean = false;
	const user = auth.currentUser;
	console.log(user)

	function register (email:string, password:string){
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up 
			const user = userCredential.user;
			console.log(user)
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
	}

	function login(email:string, password:string){
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			//console.log(user)
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
	}

	//
	function signIn(){
		login("email@i.ua", "password")
	}
	onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/auth.user
		const uid = user.uid;
		userAuthStatus=true;
		console.log(userAuthStatus)
		// ...
	} else {
		userAuthStatus=false;
		//console.log("no auth")
		// User is signed out
		// ...
	}
	});


  	$: ({ route } = $page.data);
	let local_n="";
	
	$:if($locale !== defaultLocale){
		local_n = "/"+$locale
	}else{
		local_n = ""
	}
let cur_url:string = $locale
console.log("cur_url", cur_url)
let modalLogin:boolean = false;
let inputEmail:string, inputPass:string, inputCPass:string  = "";
function openModalLogin(){
	modalLogin=true
}
function closeModalLogin(){
	modalLogin=false
}
function formLogin(){
	if(inputEmail && inputPass){
		if(inputCPass){
				console.log("REGISTER")
			if(inputCPass === inputPass){
				console.log("REGISTER OK")
				register (inputEmail, inputPass)
				login(inputEmail, inputPass)
				closeModalLogin()
				// REGISTER //
				//////////////
			}else{
				console.log("password not confirm")
			}
			return;
		}
		// login //
		///////////
		login(inputEmail, inputPass)
		closeModalLogin()
	}else{
		console.log("Error Email or Password")
	}
	

}
function logOut(){
	signOut(auth).then(() => {
	// Sign-out successful.
	}).catch((error) => {
	// An error happened.
	});
}


</script>

<header class="px-14 py-7 bg-white flex justify-between items-center">

{#if modalLogin}
<div class="backdrop-blur-sm fixed bg-[#6b6c5680] top-0 right-0 bottom-0 left-0 z-10 flex justify-center items-center">
	<div class="w-96 m-8 bg-slate-300 rounded-lg p-8 pt-11 flex flex-col text-center relative">
		<a href="#" on:click={closeModalLogin}>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xml:space="preserve"
		class="cursor-pointer absolute left-auto right-3 top-3 bottom-auto text-[#B88E2F] hover:text-[#000000]">
			<defs>
			</defs>
			<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
				<path d="M 21.607 89.348 L 0.652 68.393 c -0.869 -0.869 -0.869 -2.279 0 -3.149 L 65.244 0.652 c 0.869 -0.869 2.279 -0.869 3.149 0 l 20.955 20.955 c 0.869 0.869 0.869 2.279 0 3.149 L 24.756 89.348 C 23.887 90.217 22.477 90.217 21.607 89.348 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
				<path d="M 89.348 68.393 L 68.393 89.348 c -0.869 0.869 -2.279 0.869 -3.149 0 L 0.652 24.756 c -0.869 -0.869 -0.869 -2.279 0 -3.149 L 21.607 0.652 c 0.869 -0.869 2.279 -0.869 3.149 0 l 64.592 64.592 C 90.217 66.113 90.217 67.523 89.348 68.393 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
			</g>
		</svg>
		</a>
		
		<div class="mb-4">
			To log in, fill in your <br/><strong>email and password</strong> <br/><hr/>
			To register, fill in your <br/><strong> email, password and confirm password</strong><br/>
		</div>
	
		<form method="post" on:submit|preventDefault={formLogin}>
			<input bind:value={inputEmail} name="email" type="text" placeholder="Email*" 
			class="w-full mb-3 p-2 rounded outline-none border-b-[1px] border-white focus-visible:border-black ">
			<input bind:value={inputPass} name="email" type="password" placeholder="Password*" 
			class="w-full mb-3 p-2 rounded outline-none border-b-[1px] border-white focus-visible:border-black ">
			<input bind:value={inputCPass} name="email" type="password" placeholder="Confirm password" 
			class="w-full p-2 rounded outline-none border-b-[1px] border-white focus-visible:border-black ">
			<button type="submit" class="rounded text-white mt-5 p-3 bg-[#B88E2F] hover:bg-[#d9b051]">Login/register</button>
		</form>
	</div>
</div>
{/if}
	

	<div class="w-44">
		<a href="/{$locale}/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		
		<div class="grid  grid-cols-[max-content_max-content_max-content_max-content] gap-x-16">
			<div class="block" aria-current={$page.url.pathname === `/${$locale}` || $page.url.pathname === `/` ? 'page' : undefined}>
				<a class="text-black hover:no-underline hover:text-yellow-600" href="/{$locale}/">{$t('nav.home')}</a>
			</div>
			<div class="block" aria-current={$page.url.pathname === `/${$locale}/shop` || $page.url.pathname === `/shop` ? 'page' : undefined}>
				<a class="text-black hover:no-underline hover:text-yellow-600" href="/{$locale}/shop">{$t('nav.shop')}</a>
			</div>
			<div class="block" aria-current={$page.url.pathname === `/${$locale}/about` || $page.url.pathname === `/about` ? 'page' : undefined}>
				<a class="text-black hover:no-underline hover:text-yellow-600" href="/{$locale}/about">{$t('nav.about')}</a>
			</div>
			<div class="block" aria-current={$page.url.pathname === `/${$locale}/contact` || $page.url.pathname === `/contact` ? 'page' : undefined}>
				<a class="text-black hover:no-underline hover:text-yellow-600" href="/{$locale}/contact">{$t('nav.contact')}</a>
			</div>
		</div>
		
	</nav>

	<div class="grid  grid-cols-[max-content_max-content_max-content] gap-x-5">
		
			<!--   -->
			{#if userAuthStatus === true }
				<div class="user_nav relative">
					<img class="cursor-pointer w-7" src={lk} alt="Kabinet" />
					<div class="hidden user_menu absolute bg-slate-100 p-5 rounded drop-shadow-lg">
						<div class="cursor-pointer text-base font-medium hover:text-yellow-600"
						on:click={logOut}>
							LogOut</div>
					</div>
				</div>
			{:else}
				<img on:click={openModalLogin} class="cursor-pointer w-7" src={login_icon} alt="login" />
			{/if}
			
			<img class="cursor-pointer w-7" src={cart} alt="cart" /> 

			<select on:change="{({ target }) => goto(target.value)}">
				{#each $locales as lc}
				  <option value="/{lc}{route}" selected="{lc === $locale}">{$t(`lang.${lc}`)}</option>
				{/each}
			  </select>
			 
	</div>
</header>

<style>
	.user_nav:hover .user_menu{
		display: block;
	}
	div[aria-current='page'] a{
		color: burlywood;
	}

/*	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}*/
</style>
