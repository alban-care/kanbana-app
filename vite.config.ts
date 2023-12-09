import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const metaModule = () => {
    const meta = `
    <Title>${metadata.title} - Kanbana</Title>
    <meta name="description" content="${metadata.description}">
    ` as const;

    return {
      name: "meta-description",
      transformIndexHtml(html: string) {
        html = html.replace(/<!-- meta-->/, meta as string);
        return html as string;
      },
    };
  };

  return defineConfig({
    plugins: [react(), metaModule()],
    base: process.env.VITE_BASE_URL,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};

const metadata = {
  title: "Simplify your project management with Kanbana",
  description:
    "Kanbana is a simple project management tool that helps you to organize your work and collaborate with your team.",
};
