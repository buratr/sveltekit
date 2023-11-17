<script lang="ts">
export let data;
import { t, locales, locale, defaultLocale } from '$lib/translations';
import Home_product from "$lib/components/Home_product.svelte"
const { currentProduct, relatedProducts } = data;

const productName = currentProduct[0].name
let currProduct = currentProduct[0]
//console.log(products_server)
</script>
<!-- 
<h1>111</h1>
{#each products_server as product}
 <Home_product obj={product}/>
{/each} -->

<!-- section crumbs -->
<section class="py-8 bg-[#F9F1E7]">
    <div class="container">
        <div class="flex">
            <div class="flex items-center mr-6">
                <a class="mr-4 text-[#9F9F9F] font-['Poppins'] text-base hover:text-black" href="/{$locale}/">{$t('nav.home')}</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
                </svg>
            </div>
            <div class="flex items-center mr-6">
                <a class="mr-4 text-[#9F9F9F] font-['Poppins'] text-base hover:text-black" href="/{$locale}/shop">{$t('nav.shop')}</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
                </svg>
            </div>
            <div class="bg-[#9F9F9F] w-[2px] mr-6"></div>
            <div class="font-['Poppins'] text-base text-black">{productName}</div>
        </div>
    </div>
</section>

<!-- section product info -->
<section class="pt-9 pb-14 flex justify-center">
    <div class="container">
        <div class="flex">
            <div class="w-[423px] h-[500px] rounded-xl overflow-hidden flex">
                <img class="w-full object-cover" src="/src/lib/images/products/{currProduct.img}" alt="">
            </div>
            <div class="ml-44">
                <h1 class=" text-black font-['Poppins'] text-[42px]">{currProduct.name}</h1>
                <div class=" text-[#9F9F9F] font-['Poppins'] text-2xl">Rs. {currProduct.price}</div>
                <!-- star -->
                <div class="flex mt-3">
                    <div class="grid grid-cols-[max-content_max-content_max-content_max-content_max-content] gap-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z" fill="#FFC700"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.1563 7.0125L0.800049 7.9375L5.40005 12.4188L4.31255 18.75L10 15.7625V1.25L7.1563 7.0125Z" fill="#FFC700"/></svg>
                    </div>
                    <div class="bg-[#9F9F9F] w-[2px] mr-6 ml-6"></div>
                    <div class="text-[#9F9F9F] font-['Poppins'] text-sm">5 Customer Review</div>
                </div>
                <!-- desc -->
                <div class=" text-black font-['Poppins'] text-[13px] mt-4 max-w-md">
                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </div>
                <!-- size -->
                <div class="mt-6">
                    <div class="text-[#9F9F9F] font-['Poppins'] text-sm">Size</div>
                    <div class="grid grid-cols-[max-content_max-content_max-content] gap-x-4 mt-3">
                        <div class="cursor-pointer bg-[#B88E2F] rounded-lg w-8 h-8 flex justify-center items-center text-white">L</div>
                        <div class="cursor-pointer bg-[#F9F1E7] rounded-lg w-8 h-8 flex justify-center items-center hover:bg-[#B88E2F] hover:text-white">XL</div>
                        <div class="cursor-pointer bg-[#F9F1E7] rounded-lg w-8 h-8 flex justify-center items-center hover:bg-[#B88E2F] hover:text-white">XS</div>
                    </div>
                </div>
                 <!-- Color -->
                 <div class="mt-6">
                    <div class="text-[#9F9F9F] font-['Poppins'] text-sm">Color</div>
                    <div class="grid grid-cols-[max-content_max-content_max-content] gap-x-4 mt-3">
                        <div class="cursor-pointer bg-[#816DFA] rounded-full w-8 h-8 flex justify-center items-center hover:border-2 "></div>
                        <div class="cursor-pointer bg-[#000] rounded-full w-8 h-8 flex justify-center items-center hover:border-2"></div>
                        <div class="cursor-pointer bg-[#B88E2F] rounded-full w-8 h-8 flex justify-center items-center hover:border-2"></div>
                    </div>
                </div>

                <div class="mt-8 grid grid-cols-[max-content_max-content] gap-x-4">
                    <div class="px-4 py-3 border border-[#9F9F9F] rounded-xl flex w-[123px] justify-between items-center">
                        <div class="cursor-pointer">-</div>
                        <div>1</div>
                        <div class="cursor-pointer">+</div>
                    </div>
                    <button class="px-[48px] py-[17px] border border-black rounded-xl text-black font-['Poppins'] text-[20px] hover:bg-black hover:text-white">Add To Cart</button>
                </div>
                <hr class="mt-16 mb-11">
                <div class="mt-8 grid grid-cols-[max-content_max-content] gap-x-4">
                <div class="text-[#9F9F9F] font-['Poppins'] text-base grid grid-cols-[max-content_max-content_max-content] gap-x-3 gap-y-3">
                    <div>SKU</div>
                    <div>:</div>
                    <div>SS001</div>

                    <div>Category</div>
                    <div>:</div>
                    <div>Sofas</div>
                    
                    <div>Tags</div>
                    <div>:</div>
                    <div>Sofa, Chair, Home, Shop</div>
                    
                    <div>Share</div>
                    <div>:</div>
                    <div class="grid grid-cols-[max-content_max-content_max-content] gap-x-4 items-center">
                        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_117_920)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z" fill="black"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_117_920">
                                <rect width="20" height="20" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>

                          <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_117_924)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833252 2.365C0.833252 1.95877 0.994624 1.56919 1.28187 1.28195C1.56911 0.994702 1.9587 0.83333 2.36492 0.83333H17.6333C17.8346 0.833001 18.034 0.872383 18.22 0.949219C18.4061 1.02606 18.5752 1.13884 18.7176 1.28111C18.8601 1.42338 18.973 1.59235 19.0501 1.77834C19.1271 1.96433 19.1667 2.16368 19.1666 2.365V17.6333C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5753 18.7183 18.7178C18.5759 18.8602 18.4069 18.9731 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.127 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5754 1.02653 18.4065 0.949604 18.2206C0.87268 18.0346 0.833143 17.8354 0.833252 17.6342V2.365ZM8.08992 7.82333H10.5724V9.07C10.9308 8.35333 11.8474 7.70833 13.2249 7.70833C15.8658 7.70833 16.4916 9.13583 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0183 12.5508 10.0183C11.2883 10.0183 10.7633 10.9258 10.7633 12.3517V16.6067H8.08992V7.82333ZM3.50659 16.4925H6.17992V7.70833H3.50659V16.4917V16.4925ZM6.56242 4.84333C6.56746 5.07222 6.52673 5.29982 6.44262 5.51276C6.35851 5.7257 6.23271 5.91969 6.07261 6.08336C5.91251 6.24702 5.72133 6.37706 5.5103 6.46584C5.29926 6.55461 5.07262 6.60035 4.84367 6.60035C4.61472 6.60035 4.38808 6.55461 4.17704 6.46584C3.966 6.37706 3.77483 6.24702 3.61473 6.08336C3.45463 5.91969 3.32883 5.7257 3.24472 5.51276C3.16061 5.29982 3.11988 5.07222 3.12492 4.84333C3.13481 4.39404 3.32024 3.96649 3.64149 3.65224C3.96274 3.33798 4.39427 3.16201 4.84367 3.16201C5.29307 3.16201 5.7246 3.33798 6.04585 3.65224C6.3671 3.96649 6.55253 4.39404 6.56242 4.84333Z" fill="black"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_117_924">
                                <rect width="20" height="20" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>

                          <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM17.7563 9.80713C17.7637 9.92188 17.7637 10.0415 17.7637 10.1587C17.7637 13.7427 15.0342 17.8711 10.0464 17.8711C8.5083 17.8711 7.08252 17.4243 5.88135 16.6553C6.10107 16.6797 6.31104 16.6895 6.53565 16.6895C7.80518 16.6895 8.97217 16.2598 9.90234 15.5322C8.71094 15.5078 7.70996 14.7266 7.36816 13.6523C7.78564 13.7134 8.16162 13.7134 8.59131 13.6035C7.97785 13.4789 7.42645 13.1457 7.0308 12.6606C6.63515 12.1755 6.41964 11.5684 6.4209 10.9424V10.9082C6.77979 11.1108 7.20215 11.2354 7.64404 11.2524C7.27256 11.0049 6.96792 10.6695 6.75711 10.276C6.5463 9.88244 6.43585 9.443 6.43555 8.99658C6.43555 8.49121 6.56738 8.02979 6.8042 7.62939C7.48511 8.46762 8.33479 9.15318 9.29801 9.64152C10.2612 10.1299 11.3164 10.41 12.395 10.4639C12.0117 8.62061 13.3887 7.12891 15.0439 7.12891C15.8252 7.12891 16.5283 7.45605 17.0239 7.9834C17.6367 7.86865 18.2227 7.63916 18.7451 7.33154C18.5425 7.95898 18.1177 8.48877 17.5537 8.82324C18.1006 8.76465 18.6279 8.61328 19.1162 8.40088C18.7476 8.94287 18.2861 9.42383 17.7563 9.80713Z" fill="black"/>
                          </svg>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<hr>
<!-- section description -->
<section class="pt-9 pb-14 ">
    <div class="container">
        <div class="flex flex-col justify-center">
            <div class="mx-auto grid grid-cols-[max-content_max-content_max-content] gap-x-12 font-['Poppins'] text-2xl">
                <div class="cursor-pointer">Description</div>
                <div class="text-[#9F9F9F] cursor-pointer hover:text-black">Additional Information</div>
                <div class="text-[#9F9F9F] cursor-pointer hover:text-black">Reviews [5]</div>
            </div>
            <div class="my-9 text-[#9F9F9F] font-['Poppins'] text-[16px] max-w-[1026px] ml-auto mr-auto">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                <br><br>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </div>
            <div class="grid grid-cols-[1fr_1fr] gap-x-7 max-w-[1239px] w-full ml-auto mr-auto">
                <div class="max-w-[605px] h-[348px] rounded-xl overflow-hidden flex">
                    <img class="w-full object-cover" src="/src/lib/images/products/{currProduct.img}" alt="">
                </div>

                <div class="max-w-[605px] h-[348px] rounded-xl overflow-hidden flex">
                    <img class="w-full object-cover" src="/src/lib/images/products/{currProduct.img}" alt="">
                </div>
            </div>
        </div>
    </div>
</section>
<hr>
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
                {#each relatedProducts as product}
				<Home_product obj={product}/>
				{/each}
			</div>
			<div class="text-center mt-8">
				<button class="font-['Poppins'] text-base font-semibold text-[#B88E2F] py-3 px-16 bg-transparent border border-[#B88E2F] hover:text-[#fff] hover:bg-[#B88E2F]">
					Show More
				</button>
			</div>
		</div>
	</div>
</section>