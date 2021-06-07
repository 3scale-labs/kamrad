module.exports = function (api) {
	api.cache(true);
	const presets = [
		["@babel/preset-typescript"],
		[
			"@babel/preset-env",
			{
				useBuiltIns: 'entry',
				corejs: 3
			}],
		["@babel/preset-react"]
	]
	const plugins = ["@babel/plugin-transform-runtime"];
	return {
		presets,
		plugins
	};
}
