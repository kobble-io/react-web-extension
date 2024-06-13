// vite.config.ts
import { defineConfig } from "file:///Users/kevinpiacentini/Projects/kobble/@kobbleio/react-web-extension/node_modules/vite/dist/node/index.js";
import react from "file:///Users/kevinpiacentini/Projects/kobble/@kobbleio/react-web-extension/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import dts from "file:///Users/kevinpiacentini/Projects/kobble/@kobbleio/react-web-extension/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/kevinpiacentini/Projects/kobble/@kobbleio/react-web-extension";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./src/index.ts"),
      name: "@kobbleio/react-web-extension",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts({ rollupTypes: true })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2V2aW5waWFjZW50aW5pL1Byb2plY3RzL2tvYmJsZS9Aa29iYmxlaW8vcmVhY3Qtd2ViLWV4dGVuc2lvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tldmlucGlhY2VudGluaS9Qcm9qZWN0cy9rb2JibGUvQGtvYmJsZWlvL3JlYWN0LXdlYi1leHRlbnNpb24vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2tldmlucGlhY2VudGluaS9Qcm9qZWN0cy9rb2JibGUvQGtvYmJsZWlvL3JlYWN0LXdlYi1leHRlbnNpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRidWlsZDoge1xuXHRcdGxpYjoge1xuXHRcdFx0ZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvaW5kZXgudHMnKSxcblx0XHRcdG5hbWU6ICdAa29iYmxlaW8vcmVhY3Qtd2ViLWV4dGVuc2lvbicsXG5cdFx0XHRmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2Bcblx0XHR9LFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuXHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdGdsb2JhbHM6IHtcblx0XHRcdFx0XHRyZWFjdDogJ1JlYWN0Jyxcblx0XHRcdFx0XHQncmVhY3QtZG9tJzogJ1JlYWN0RE9NJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzb3VyY2VtYXA6IHRydWUsXG5cdFx0ZW1wdHlPdXREaXI6IHRydWVcblx0fSxcblx0cGx1Z2luczogW3JlYWN0KCksIGR0cyh7IHJvbGx1cFR5cGVzOiB0cnVlIH0pXVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThYLFNBQVMsb0JBQW9CO0FBQzNaLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE9BQU87QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNKLE9BQU8sUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUMxQyxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN0QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2QsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNkO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRSxhQUFhLEtBQUssQ0FBQyxDQUFDO0FBQzlDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
