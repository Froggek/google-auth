const path = require('path'); 

module.exports = {
    // package & export: build -> dist 
    entry: {
        main: './build/index.js', 
        // style: './src/css/main.css'
    }, 

    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: '[name].bundle.js', 
        clean: true, // Clean the /dist folder at first 
    }, 

    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: [
                    /* { 
                        loader: MiniCssExtractPlugin.loader, 
                        options: { publicPath: 'build' },  
                    }, */ 
                    "style-loader",  
                    "css-loader",  
                ], 
            },   
        ], 
    }, 

    plugins: [], 

    mode: 'development', 
    devtool: "source-map", 
}; 
