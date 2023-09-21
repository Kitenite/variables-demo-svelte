<script lang="ts">
	import Button from '../components/Button.svelte';
	let type = 'TYPE1';
</script>

<div class={`font-inter font-[700] rounded-xl text-black text-left ${$$restProps.class}`}>
	<div class={`w-full flex items-start self-stretch`}>
		<div
			class={`[flex-grow:1] [box-shadow:0px_0px_0px_2px_black_inset] [box-shadow-width:2px] bg-white gap-2 flex items-start py-3 px-4 rounded-l-lg`}
		>
			<p class={`[flex-grow:1] w-[655px] text-base leading-6`}>Find an item</p>
		</div>
		<Button
			class={`${type === 'TYPE1' ? 'h-[null]' : ''} ${type === 'TYPE' ? 'w-full' : ''}`}
			type="TYPE1"
			text="Search"
		/>
	</div>
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
