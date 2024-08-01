# Migrate to Protobuf-ES v2

This example shows how to migrate from Protobuf-ES v1 to v2 while running both versions in parallel.

We start with a small sample project that uses `@bufbuild/protobuf` v1.10.0. See commit
[a9a352c](https://github.com/timostamm/example-protobuf-es-v1-to-v2/tree/a9a352ca6f731c3b6608b285a62f53b1aad1419a).

At every step, run `npm ci` to install dependencies. Run `npm test` to re-generate code and run 
the file [src/test.ts](src/test.ts).

## Alias v1

You cannot import from different package versions at the same time, so we use an alias to rename
the v1 package in `package.json`:

```diff
{
  "dependencies": {
-   "@bufbuild/protobuf": "^1.0.0",
-   "@bufbuild/protoc-gen-es": "^1.0.0",
+   "@bufbuild/protobufv1": "npm:@bufbuild/protobuf@^1.10.0",
+   "@bufbuild/protoc-gen-esv1": "npm:@bufbuild/protoc-gen-es@^1.10.0",
  }
}
```

Let's move the generated code, and rewrite imports to import from the alias in `buf.gen.yaml`:

```diff
plugins:
- - local: protoc-gen-es
+ - local: "node_modules/@bufbuild/protoc-gen-esv1/bin/protoc-gen-es"
    opt:
      - target=ts
+     - rewrite_imports=@bufbuild/protobuf:@bufbuild/protobufv1
    out: src/genv1
```

We specify a path to the plugin to make sure we use the correct version. 

After generating code with `npx buf generate`, we update the imports in the project:

```diff
- import {User} from "./gen/example_pb";
+ import {User as UserV1} from "./genv1/example_pb";
```
