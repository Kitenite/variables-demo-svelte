<script lang="ts">
	import Card from '../components/Card.svelte';
	import Search from '../components/Search.svelte';
	import { ColorsExample, SpacingExample } from '../../figma-tokens';
</script>

<div class={`[flex-grow:1] flex gap-10 flex-col justify-between items-end pt-20`}>
	<div class={`gap-8 flex flex-col justify-between w-full`}>
		<div class={`gap-4 flex flex-col items-start`}>
			<div
				class={`bg-[${ColorsExample.Light.COLOR_FEATURE}] gap-${SpacingExample.Standard.SPACING_SM} flex items-start px-${SpacingExample.Standard.SPACING_SM}`}
			>
				<p class={`text-[32px] w-[153px] leading-10`}>Hot items</p>
			</div>
			<div class={`w-[840px] gap-6 flex items-start`}>
				<Card type="TYPE" />
				<Card type="TYPE1" />
				<Card type="TYPE2" />
			</div>
		</div>
		<div
			class={`[box-shadow:0px_0px_0px_4px_black_inset] [box-shadow-width:4px] w-[836px] drop-shadow-lg bg-[#699BF7] gap-2 flex flex-col items-start rounded-lg p-6`}
		>
			<Search class={`w-full`} />
		</div>
	</div>
</div>
