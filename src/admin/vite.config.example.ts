import { mergeConfig, type UserConfig } from "vite";
import path from "path";

export default (config: UserConfig) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@strapi/icons": path.resolve(
          __dirname,
          "../../node_modules/@strapi/icons",
        ),
      },
    },
  });
};
