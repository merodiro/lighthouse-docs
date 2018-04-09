webpackJsonp([0xc25d8647fc6e],{268:function(a,s){a.exports={data:{page:{html:'<h2>Schema</h2>\n<p><strong>TODO: (Discuss overview of GraphQL Schema)</strong></p>\n<p>In order for GraphQL to register your types/mutations/queries, we must create a schema file.</p>\n<h3>Object Types</h3>\n<p>Object Types are the primary building blocks of a GraphQL schema. They describe the types of objects available from your API and which fields that can be queried. In terms of Laravel, they will likely represent most of your Eloquent models.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">type User <span class="token punctuation">{</span>\n  <span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token operator">!</span>\n  <span class="token attr-name">name</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">email</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">created_at</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">updated_at</span><span class="token punctuation">:</span> String\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>Queries</h4>\n<p>Every GraphQL schema should have a <code class="language-text">Query</code> type which serves as an "entry point" and allows clients to query the data in your API.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">type Query <span class="token punctuation">{</span>\n  <span class="token attr-name">me</span><span class="token punctuation">:</span> User\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>Mutations</h4>\n<p>In order to change data such as creating/updating/deleting, a <code class="language-text">Mutation</code> type should be added to your schema.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">type Mutation <span class="token punctuation">{</span>\n  login<span class="token punctuation">(</span><span class="token attr-name">username</span><span class="token punctuation">:</span> String<span class="token operator">!</span><span class="token punctuation">,</span> <span class="token attr-name">password</span><span class="token punctuation">:</span> String<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">:</span> User\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Scalar Types</h3>\n<p>Scalar types are custom types that require a <code class="language-text">directive</code> (which we\'ll learn about later) to serialize, deserialize and validate values.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">scalar DateTime <span class="token directive function">@scalar</span><span class="token punctuation">(</span><span class="token attr-name">class</span><span class="token punctuation">:</span> <span class="token string">"DateTimeScalar"</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3>Enum Types</h3>\n<p>Enums are custom scalars with a restricted set of values (similar to <code class="language-text">enum</code> found in database migrations). Enums also require a <code class="language-text">directive</code> which we will cover later.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">enum Status <span class="token punctuation">{</span>\n  INTERN <span class="token directive function">@enum</span><span class="token punctuation">(</span><span class="token attr-name">value</span><span class="token punctuation">:</span> <span class="token string">"intern"</span><span class="token punctuation">)</span>\n  EMPLOYEE <span class="token directive function">@enum</span><span class="token punctuation">(</span><span class="token attr-name">value</span><span class="token punctuation">:</span> <span class="token string">"employee"</span><span class="token punctuation">)</span>\n  TERMINATED <span class="token directive function">@enum</span><span class="token punctuation">(</span><span class="token attr-name">value</span><span class="token punctuation">:</span> <span class="token string">"terminated"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Input Types</h3>\n<p>Input types can be used to describe complex objects for for field arguments.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">input CreateUserInput <span class="token punctuation">{</span>\n  <span class="token attr-name">name</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">email</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">password</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">password_confirmation</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Interface Types</h3>\n<p>A GraphQL <code class="language-text">interface</code> is similar to a PHP <code class="language-text">interface</code>. It\'s an abstract type which describes the fields which must be included.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">interface Model <span class="token punctuation">{</span>\n  <span class="token attr-name">id</span><span class="token punctuation">:</span> ID<span class="token operator">!</span>\n  <span class="token attr-name">created_at</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n  <span class="token attr-name">updated_at</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Union Types</h3>\n<p>Union types are almost identical to <code class="language-text">Interfaces</code> except you don\'t define <code class="language-text">fields</code> on them. They require <code class="language-text">directives</code> which we will discuss later.</p>\n<div class="gatsby-highlight">\n      <pre class="language-graphql"><code class="language-graphql">union Person <span class="token directive function">@union</span><span class="token punctuation">(</span><span class="token attr-name">resolver</span><span class="token punctuation">:</span> <span class="token string">"PersonUnion"</span><span class="token punctuation">)</span> <span class="token operator">=</span> User | Employee\n</code></pre>\n      </div>',details:{title:"Schema",date:"March 31, 2018",path:"/docs/2.0/schema"}},pages:{edges:[{post:{id:"/Users/christophermoore/Sites/nuwave/lighthouse-gatsby/src/pages/v2.0/configuration.md absPath of file >>> MarkdownRemark",details:{title:"Configuration",path:"/docs/2.0/config"}}},{post:{id:"/Users/christophermoore/Sites/nuwave/lighthouse-gatsby/src/pages/v2.0/directives.md absPath of file >>> MarkdownRemark",details:{title:"Directives",path:"/docs/2.0/directives"}}},{post:{id:"/Users/christophermoore/Sites/nuwave/lighthouse-gatsby/src/pages/v2.0/installation.md absPath of file >>> MarkdownRemark",details:{title:"Installation",path:"/docs/2.0/installation"}}},{post:{id:"/Users/christophermoore/Sites/nuwave/lighthouse-gatsby/src/pages/v2.0/schema.md absPath of file >>> MarkdownRemark",details:{title:"Schema",path:"/docs/2.0/schema"}}},{post:{id:"/Users/christophermoore/Sites/nuwave/lighthouse-gatsby/src/pages/v2.0/walkthrough.md absPath of file >>> MarkdownRemark",details:{title:"Walkthrough",path:"/docs/2.0/walkthrough"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---docs-2-0-schema-7a452fdae2f085420ea5.js.map