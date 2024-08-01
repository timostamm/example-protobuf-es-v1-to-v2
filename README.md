# Migrate to Protobuf-ES v2

This example shows how to migrate from Protobuf-ES v1 to v2 while running both versions in parallel.

We start with a small sample project that uses `@bufbuild/protobuf` v1.10.0. At every step, run `npm ci` to install
dependencies. Run `npm test` to re-generate code and run the file [src/test.ts](src/test.ts).
