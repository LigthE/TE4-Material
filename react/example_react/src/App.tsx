import CardComponent from "./components/card/card.component";

function App() {
  return (
    <div className="container">
      <h1>heloo ögh</h1>
      <CardComponent
        title="an amazing journey"
        description="our journey of space exploration 
    thank you USA"
        imgUrl="https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1587"
      />
      <CardComponent
        title="amazing journey2 "
        description="our journey of space exploration 
    thank you USA"
        imgUrl="https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1587"
      />
    </div>
  );
}

export default App;
