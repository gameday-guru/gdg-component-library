

module.exports = function (api) {
 
  api.cache(true);
   const presets = [
    ["@babel/preset-env", { targets: { node: "current" } }],
   "@babel/preset-typescript",
   "@babel/preset-react",
 ];
 
 return {
   presets,
   plugins: [
     "@babel/plugin-transform-runtime",
     "babel-plugin-transform-import-meta",
     "babel-plugin-transform-vite-meta-env",
    ],
   };
};