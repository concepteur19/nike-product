import "../src/styles/App.css";
import Card from "../src/components/card";
import img from "../src/Yellow2.png";
import img2 from "../src/RedBlackWhite1.png";
import img3 from "../src/Green1.png";

function App() {

  const products = [
    { name: "AirMax 97", price: "₹ 7995", src: img, alt: "yellow", hoverColor: "#FDBA62", hoverTextColor: "#fff" },
    { name: "AlphaSavage", price: "₹ 9985", src: img2, alt: "red", hoverColor: "#E24C4D", hoverTextColor: "#fff" },
    { name: "AirPresto", price: "₹ 6995", src: img3, alt: "green", hoverColor: "#599C99", hoverTextColor: "#fff" },
  ];

  return (
    <div className="App">
      <div className="nike-contain">
        <p className="title">Best Selling</p>
        <div className="vector">
          {products.map((product, index) => {
            return (
              <Card
                key={index}
                name={product.name}
                price={product.price}
                src={product.src}
                alt={product.src}
                hoverColor={product.hoverColor}
                hoverTextColor={product.hoverTextColor}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
