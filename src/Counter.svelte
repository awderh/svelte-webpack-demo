<script>
	let count = 0;

	console.log("Counter loaded!")
	
	export function handleClick() {
		count += 1;
		return count;
	}

	export const getCount = () => count;
</script>

<button class="counter btn btn-primary" on:click={handleClick}>
	clicks: {count}
</button>