<script>
	import Banner from '$components/banner/banner.svelte';
</script>

<Banner />
<!-- About Us -->
<div class="container section position-relative">
	<p class="ms-6 text-center text-white">
		We help reduce Greenhouse gas emmision by making power on-site with renewables <br />
		and other climate-friendly energy resources
	</p>
</div>
<!-- About Us -->
<div class="container section-white position-relative">
	<h3 class="text-center text-6xl text-primary">Our Projects</h3>
	<div class="card shadow-lg">
		<div class="card-body">
			We help reduce Greenhouse gas emmision by making power on-site with renewables <br />
			and other climate-friendly energy resources
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style lang="scss">
	@mixin section() {
		background-color: #121111;
		max-width: 100%;
		margin: 0;
		padding: 5rem;
	}

	.section {
		@include section();
	}
	.section-white {
		@include section();
		background-color: #fff;
	}
</style>
