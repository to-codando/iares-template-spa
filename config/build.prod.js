import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

import { build } from "esbuild";
import copy from "esbuild-copy-static-files";
import aliasPlugin from "esbuild-plugin-path-alias";
import { resolveEnvironment } from "./plugins/env.js";
import { timer } from "./utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = +process.env.PORT || 6000;
const isDevMode = process.env.NODE_ENV === "development";

const getGlobFiles = async (directory, ignore = null) => {
  const files = await glob(directory, { ignore: ignore });
  return files;
};

const runBuild = async () => {
  const testFiles = await getGlobFiles("./src/tests/**/*.spec.ts");
  const components = await getGlobFiles("./src/components/**/*.ts");
  const mock = await getGlobFiles("./src/mock/**/*.ts");

  const config = {
    plugins: [
      resolveEnvironment({ environment: "development" }),
      copy({
        src: resolve(__dirname, "../public"),
        dest: resolve(__dirname, "../dist"),
        recursive: true,
      }),
      aliasPlugin({
        "@/store": resolve(__dirname, "../src/store/index"),
        "@/components": resolve(__dirname, "../src/components/"),
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
    entryPoints: ["src/main.ts", ...testFiles, ...components, ...mock],
    tsconfig: "./config/tsconfig.json",
    outdir: "./dist",
    external: ["http", "canvas", "global-jsdom", "global-jsdom/register"],
    treeShaking: true,
    sourcemap: true,
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
    const time = timer();
    time.start();
    await build(config);
    time.stop();
    time.log();
  } catch (errors) {
    console.log(errors);
    process.exit(0);
  }
};

runBuild();
