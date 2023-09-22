<script lang="ts">
	export let type = 'TYPE';
	export let text = 'Add to cart';
	import './Button.css';
	import { ColorsExample, SpacingExample } from '../../figma-tokens';
</script>

<div
	class={`[box-shadow:0px_0px_0px_2px_black_inset] [box-shadow-width:2px] bg-[${
		ColorsExample.Light.Button.BACKGROUND_PRIMARY
	}] font-inter font-[700] transition-all inline-flex justify-center items-center text-black text-center py-3 px-6 ${
		$$restProps.class
	} ${type === 'TYPE1' ? 'button-button-4-0-type' : ''} ${
		type === 'TYPE' ? 'button-button-4-1-type' : ''
	} ${type === 'TYPE1' ? '-ml-0.5 rounded-r-lg' : ''} ${
		type === 'TYPE' ? 'rounded-lg self-stretch' : ''
	}`}
>
	<p
		class={`transition-all text-base leading-6 ${type === 'TYPE1' ? 'button-label-0-type' : ''} ${
			type === 'TYPE' ? 'button-label-1-type' : ''
		} ${type === 'TYPE1' ? 'w-[55px]' : ''} ${type === 'TYPE' ? 'w-[88px]' : ''}`}
	>
		{`text`}
	</p>
</div>
