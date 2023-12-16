


const Cart = ({cartContent, birdPrice}) => {

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total: {birdPrice}</h4>
      <ol>{cartContent.length > 0 && cartContent.map(bird => <li key= {bird.id}>{bird.name} {bird.amount} <button onClick="">Delete</button></li>)}
     

      </ol>
    </div>
  );
};

const removeBird = ({cartContent, birdPrice}) => {

}


export default Cart;
