<script>
	export let count = 0;

	console.log("Counter loaded!")
	
	function handleClick() {
		count += 1;
	}
</script>

<button class="counter btn btn-primary" on:click={handleClick}>
	clicks: {count}
</button>