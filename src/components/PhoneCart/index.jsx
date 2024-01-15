function PhoneCart(props) {
  const { cart } = props;

  const cartElems = cart.map((phone) => (
    <li key={phone.id}>
      <article>
        <h3>{phone.color}</h3>
        <p>Total price: {phone.price * phone.quantity} UAH</p>
      </article>
    </li>
  ));

  return (
    <section>
      <h2>Phone Cart</h2>
      <ul>{cartElems}</ul>
    </section>
  );
}

export default PhoneCart;
