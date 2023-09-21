<script lang="ts">
	export let type = 'TYPE';
	import Button from '../components/Button.svelte';
	import Favorite from '../assets/Favorite.svelte';
	import FavoriteFilled from '../assets/FavoriteFilled.svelte';
</script>

<div
	class={`[flex-grow:1] [box-shadow:0px_0px_0px_2px_black_inset] [box-shadow-width:2px] pb-[0] bg-[#FAFAFA] font-inter pt-4 gap-3 inline-flex flex-col items-start rounded-lg text-black px-4 ${$$restProps.class}`}
>
	{#if type === 'TYPE2'}<div
			class={`[box-shadow:0px_0px_0px_2px_black_inset] [box-shadow-width:2px] bg-img-placeholder w-full h-48 bg-center bg-cover rounded-lg`}
		/>{/if}
	{#if type === 'TYPE2'}<div class={`w-full gap-2 flex flex-col items-start self-stretch`}>
			<div
				class={`gap-[8.84px] font-[700] w-full flex-wrap flex justify-between items-center self-stretch`}
			>
				<p class={`w-[68px] text-base leading-6 text-left`}>Cherries</p>
				<p class={`w-[67px] text-base leading-6 text-right`}>$5.99/lb</p>
			</div>
			<div class={`font-[500] w-full gap-1 flex-wrap flex items-start self-stretch text-left`}>
				<p class={`w-[60px] text-sm leading-6`}>Grown in</p>
				<p class={`w-[79px] text-sm leading-6`}>New Jersey</p>
			</div>
		</div>{/if}
	{#if type === 'TYPE2'}<Button
			class={`${type === 'TYPE1' ? 'h-[null]' : ''} ${type === 'TYPE' ? 'w-full' : ''}`}
			type="TYPE"
			text="Add to cart"
		/>{/if}
	{#if type === 'TYPE2'}<div
			class={`[box-shadow:0px_0px_0px_1px_black_inset] [box-shadow-width:1px] rounded-[360px] w-8 h-8 bg-white flex justify-center items-center p-2`}
		>
			<Favorite class={`w-4 h-4`} />
		</div>{/if}
	{#if type === 'TYPE'}<div
			class={`[box-shadow:0px_0px_0px_2px_black_inset] [box-shadow-width:2px] bg-img-placeholder-1 w-full h-48 bg-center bg-cover rounded-lg`}
		/>{/if}
	{#if type === 'TYPE'}<div class={`w-full gap-2 flex flex-col items-start self-stretch`}>
			<div
				class={`gap-[8.84px] font-[700] w-full flex-wrap flex justify-between items-center self-stretch`}
			>
				<p class={`text-base leading-6 text-left w-24`}>Watermelon</p>
				<p class={`w-[72px] text-base leading-6 text-right`}>$5.99/ea</p>
			</div>
			<div class={`font-[500] w-full gap-1 flex-wrap flex items-start self-stretch text-left`}>
				<p class={`w-[60px] text-sm leading-6`}>Grown in</p>
				<p class={`w-[95px] text-sm leading-6`}>San Francisco</p>
			</div>
		</div>{/if}
	{#if type === 'TYPE'}<Button
			class={`${type === 'TYPE1' ? 'h-[null]' : ''} ${type === 'TYPE' ? 'w-full' : ''}`}
			type="TYPE"
			text="Add to cart"
		/>{/if}
	{#if type === 'TYPE'}<div
			class={`[box-shadow:0px_0px_0px_1px_black_inset] [box-shadow-width:1px] rounded-[360px] w-8 h-8 bg-white flex justify-center items-center p-2`}
		>
			<FavoriteFilled class={`w-4 h-4`} />
		</div>{/if}
	{#if type === 'TYPE1'}<div
			class={`[box-shadow:0px_0px_0px_2px_black_inset] [box-shadow-width:2px] bg-img-placeholder-2 w-full h-48 bg-center bg-cover rounded-lg`}
		/>{/if}
	{#if type === 'TYPE1'}<div class={`w-full gap-2 flex flex-col items-start self-stretch`}>
			<div
				class={`gap-[8.84px] font-[700] w-full flex-wrap flex justify-between items-center self-stretch`}
			>
				<p class={`w-[45px] text-base leading-6 text-left`}>Pears</p>
				<p class={`w-[65px] text-base leading-6 text-right`}>$1.99/lb</p>
			</div>
			<div class={`font-[500] w-full gap-1 flex-wrap flex items-start self-stretch text-left`}>
				<p class={`w-[60px] text-sm leading-6`}>Grown in</p>
				<p class={`text-sm leading-6 w-16`}>New York</p>
			</div>
		</div>{/if}
	{#if type === 'TYPE1'}<Button
			class={`${type === 'TYPE1' ? 'h-[null]' : ''} ${type === 'TYPE' ? 'w-full' : ''}`}
			type="TYPE"
			text="Add to cart"
		/>{/if}
	{#if type === 'TYPE1'}<div
			class={`[box-shadow:0px_0px_0px_1px_black_inset] [box-shadow-width:1px] rounded-[360px] w-8 h-8 bg-white flex justify-center items-center p-2`}
		>
			<Favorite class={`w-4 h-4`} />
		</div>{/if}
</div>

<!--
  This component was generated from Figma with FireJet. 
  Learn more at https://www.firejet.io
  
  README:
  The output code may look slightly different when copied to your codebase. To fix this:
  1. Include the necessary fonts. The required fonts are imported from index.html
  2. Include the global styles. They can be found in styles.css
  
  Note: Step 2 is not required for tailwind.css output
-->
