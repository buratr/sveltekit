<script>
	export let src, name;
</script>
<div class="max-w-sm flex flex-col">
    <div class="rounded-lg mb-3">
        <img class="w-full" src={src} alt="">
    </div>
    <div class="mx-auto font-['Poppins'] text-2xl font-semibold text-[#333333]">
        {name}
    </div>
</div>