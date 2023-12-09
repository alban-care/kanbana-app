import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import SwitchButtonTheme from "@/components/SwitchButtonTheme";

const App = () => {
  return (
    <Layout>
      <div className="container mt-4">
        <div className="w-full flex justify-between">
          <Logo />
          <SwitchButtonTheme />
        </div>
        <h1 className="text-3xl font-bold my-4">
          Simplify your project management with Kanbana
        </h1>
        <p className="italic text-xl">
          Kanbana is a simple project management tool that helps you to organize
          your work and collaborate with your team.
        </p>
      </div>
    </Layout>
  );
};

export default App;
