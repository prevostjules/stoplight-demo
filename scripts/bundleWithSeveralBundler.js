const fs = require("fs");
const $RefParser = require("@apidevtools/json-schema-ref-parser");
const $SwaggerParser = require('@apidevtools/swagger-parser');
const $StoplightParser = require('@stoplight/json-schema-ref-parser');
const path = require('path');

async function saveInFile(data, relativePath) {
    const savePath = path.join(__dirname, relativePath)
    await fs.promises.writeFile(savePath, JSON.stringify(data, null, 2))
}

async function bundle(openapiPath, outputPath, bundler) {
    const relativePath = path.join(__dirname, openapiPath)
    const bundledSchema = await bundler.bundle(relativePath)
    await saveInFile(bundledSchema, outputPath)
}

(async function() {
    try {
        console.log('Start bundling')
        await bundle('../reference/stoplight-demo.json', '../bundled/bundledWithJsonRefParser.json', new $RefParser())
        await bundle('../reference/stoplight-demo.json', '../bundled/bundledWithSwaggerParser.json', new $SwaggerParser())
        await bundle('../reference/stoplight-demo.json', '../bundled/bundledWithStoplightParser.json', new $StoplightParser())
        console.log('Successfully bundled')
    } catch (err) {
        console.log(err)
    }
})()
