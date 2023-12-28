module.exports = {
    apps : [
        {
          name: "hotdi-blog-server",
          script: "./src/index.js",
          env: {
            "NODE_ENV": "production",
          }
        }
    ]
  }