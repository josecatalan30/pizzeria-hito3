import Header from '../components/Header.jsx'
import CardPizza from '../components/CardPizza.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { pizzas } from '../../pizzas.js'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container py-4">
      <h2 className="mb-4">Nuestro Menú</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {pizzas.map((p) => (
          <CardPizza
            key={p.id}
            name={p.name}
            price={p.price}
            ingredients={p.ingredients}
            img={p.img}
          />
        ))}
      </div>
    </main>
    </>
  );
}
