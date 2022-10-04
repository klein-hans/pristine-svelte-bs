<script>
	export let outline = false; //
	export let size = ''; // sm | lg
	export let color = 'primary'; // primary | info | success | danger | warning
	export let round = false;
	export let label = '';
</script>

<button
	type="button"
	class="btn 
	{outline ? `btn-outline-${color}` : `bg-gradient-${color}`} 
    {size !== '' ? `btn-${size}` : ''} 
    {round ? 'btn-round' : ''}"
>
	{label} static label
</button>
