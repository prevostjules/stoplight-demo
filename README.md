# stoplight-demo
Demo project to highlight bundle differences between Stoplight 'export' button and swagger-cli bundle method 


The 'bundled' directory contains the result of multiple bundling using different tools:

- bundledWithExportButton.json => done by hitting the 'Export' button on [Stoplight Project](https://jules-prevost.stoplight.io/docs/stoplight-demo/5idsiq5fewftd-stoplight-demo)

- bundledWithJsonRefParser.json / bundledWithStoplightParser.json / bundledWithSwaggerParser.json => Done with multiple bundler using the command `npm run bundle`

- bundledWithSwaggerCli.json => done by playing this command in the terminal `swagger-cli bundle './reference/stoplight-demo.json' -o './bundled/bundledWithSwaggerCli.json'
  ` 
Swagger Cli version used: 4.0.4

What is the problem? 

In this blog post, the Stoplight team says that 'If you’re using another OpenAPI editor, are muddling through with Vim, or need to bundle as part of an automated workflow via the CLI, you can use swagger-cli on the command line to get the same result as if you clicked the button in Studio.'

BUT, the result using swagger-cli (or '@stoplight/json-schema-ref-parser' or '@apidevtools/swagger-parser' or '@apidevtools/json-schema-ref-parser' ) is not exactly the same. 

The swagger parser result is less useful than the stoplight one. 

Differences: 

Stoplight 'Export' button copy and paste the external schema definitions in `components.schemas`. For the other bundlers, `components.schemas === {}`

This difference results in less clearer Refs. 

Ref to an external schema in the stoplight bundled version:
`"$ref": "#/components/schemas/User"`

Ref to this same external schema in the other solutions bundled version: "$ref": `"#/components/responses/UserSingle/content/application~1json/schema/properties/data"`
