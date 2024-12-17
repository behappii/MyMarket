export default function Item(props: any) {

  return (
    <div className="item">
      <img src={"../img/" + props.item.img} alt="" />
      <h2>{props.item.title}</h2>
      <p>{props.item.description}</p>
      <b>{props.item.price}$</b>
      <div className="add-to-cart">+</div>
    </div>
  )
}