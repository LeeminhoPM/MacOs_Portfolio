import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            // import.meta.url: Lấy url của file này (vite.config.js)
            // fileURLToPath: Chuyển url -> filepath
            // dirname: Lấy thư mục chứa filepath (project này)
            // resolve: Ghép đường dẫn filepath + tên thư mục
            "#components": resolve(
                dirname(fileURLToPath(import.meta.url)),
                "src/components",
            ),
            "#constants": resolve(
                dirname(fileURLToPath(import.meta.url)),
                "src/constants",
            ),
            "#store": resolve(
                dirname(fileURLToPath(import.meta.url)),
                "src/store",
            ),
            "#hoc": resolve(dirname(fileURLToPath(import.meta.url)), "src/hoc"),
            "#windows": resolve(
                dirname(fileURLToPath(import.meta.url)),
                "src/windows",
            ),
        },
    },
});
