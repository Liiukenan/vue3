module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-unused-vars": "off",
        "no-irregular-whitespace": "off",
        "no-console": "off", //在这禁止掉console报错检查
        "no-tabs": "off",
        "comma-dangle": "off",
         "prettier/prettier": "off"
    }
}
