import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

import { context } from "esbuild";
import copy from "esbuild-copy-static-files";
import aliasPlugin from "esbuild-plugin-path-alias";
import { dTSPathAliasPlugin } from 'esbuild-plugin-d-ts-path-alias';
import { resolveEnvironment } from "./plugins/env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = +process.env.PORT || 6000;
const isDevMode = process.env.NODE_ENV === "development";

const getGlobFiles = async (directory, ignore = null) => {
  const files = await glob(directory, { ignore: ignore });
  return files;
};

const runBuild = async () => {
  const sources = await getGlobFiles("./src/main.ts");
  console.log("---->", sources)
  const configBuild = {
    plugins: [
      resolveEnvironment({ environment: "development" }),
      copy({
        src: resolve(__dirname, "../public"),
        dest: resolve(__dirname, "../dist"),
        recursive: true,
      }),
      dTSPathAliasPlugin({
        tsconfigPath: "./config/tsconfig.json",
        debug: true
      }),
      aliasPlugin({
        "@/store": resolve(__dirname, "../src/store/index"),
        "@/components": resolve(__dirname, "../src/components"),
        "@/services": resolve(__dirname, "../src/services"),
        "@/utils": resolve(__dirname, "../src/utils"),
        "@/assets": resolve(__dirname, "../public/assets"),
        "@/mock": resolve(__dirname, "../src/mock/"),
      }),
    ],
    supported: {
      "dynamic-import": true,
    },
    platform: "browser",
    format: "esm",
    bundle: true,
    write: true,
    entryPoints: [...sources],
    outfile: "./dist/main.js",
    tsconfig: "./config/tsconfig.json",
    external: ["http", "canvas", "global-jsdom", "global-jsdom/register"],
    treeShaking: true,
    sourcemap: "both",
    minify: false,
    target: isDevMode ? ["esnext"] : ["es2018"],
    loader: {
      ".js": "ts",
      ".png": "dataurl",
      ".jpg": "file",
      ".jpeg": "file",
      ".svg": "text",
    },
  };

  try {
    const ctx = await context(configBuild);

    const { port } = await ctx.serve({
      port: PORT,
      servedir: "./dist",
    });

    ctx.watch();
    console.log(`server running in localhost:${port}`);
  } catch (errors) {
    console.log(errors);
    process.exit(0);
  }
};

runBuild();
