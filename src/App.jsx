import ServicesClass from "./classComponent/ServicesClass";
import About from "./Pages/About";
import Services from "./Pages/Services";

const App = () => {
  return (
    <>
      <section className="mx-4 my-3">
        <h1>About</h1>
        <About />

        <h1>Services</h1>
        <Services />

        <h1>ServicesClass</h1>
        <ServicesClass />
      </section>
    </>
  );
};

export default App;
