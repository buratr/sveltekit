<script lang="ts">
export let obj:any
import { t, locales, locale, defaultLocale } from '$lib/translations';
</script>

<div class="product_card max-w-sm flex flex-col relative mb-4 mr-4">
    
    <div class="product-img-wrap">
        <div class="absolute bg-[#3A3A3A] bg-opacity-75 bottom-0 left-0 right-0 top-0 hidden flex-col justify-center items-center px-4">
            <a href="/{$locale}/product/{obj.id}" class="font-['Poppins'] text-base font-semibold text-[#B88E2F] py-3 px-12 bg-white mb-6 hover:bg-[#f1f1f1]">
                Add to cart
            </a>
            <div class="flex justify-between items-center w-full">
            <a href="#" class="flex justify-between items-center text-[#fff] font-['Poppins'] text-base font-semibold hover:no-underline hover:text-[#ebca5d]"> 
                <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z" fill="currentColor"/>
                </svg>
                Share
            </a>
    
            <a href="#" class="flex justify-between items-center text-[#fff] font-['Poppins'] text-base font-semibold hover:no-underline hover:text-[#ebca5d]"> 
                <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z" fill="currentColor"/>
                </svg>
                Compare
            </a>
    
            <a href="#" class="flex justify-between items-center text-[#fff] font-['Poppins'] text-base font-semibold hover:no-underline hover:text-[#ebca5d]"> 
                <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z" stroke="currentColor" stroke-width="1.8"/>
                </svg>
                Like
            </a>
    
            </div>
        </div>

        <img class="w-full h-[301px]" src="/src/lib/images/products/{obj.img}" alt="">

    </div>
    <div class="pt-4 pr-5 pb-7 pl-4 bg-[#F4F5F7]">
        <a href="/{$locale}/product/{obj.slug}" class="font-['Poppins'] text-2xl font-semibold text-[#3A3A3A] mb-2">{obj.name}</a>
        <div class="font-['Poppins'] text-base font-medium text-[#898989] mb-2">{obj.description}</div>
        <div class="flex items-center justify-between flex-wrap">
            <div class="font-['Poppins'] text-xl font-semibold text-[#3A3A3A] mr-2">
                {#if !obj.discount}
                     Rp {obj.price}
                {:else}
                    Rp {obj.discount}
                {/if}
               
            </div>
            {#if obj.discount}
                <div class="font-['Poppins'] text-base font-normal text-[#B0B0B0] line-through">
                    Rp {obj.price}
                </div>
            {/if}
            
        </div>
    </div>
</div>
<style>
    .product-img-wrap:hover :first-child{
        display: flex;

    }
	/* .product_card:hover :first-child{
		display: flex;
	} */
</style>