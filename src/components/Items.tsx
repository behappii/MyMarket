import data from '../items.json'
import Item from './Item'

export default function Items() {
  return (
    <main>
        {data.items.map(el => (
            <Item key={el.id} item={el}/>
        ))}
    </main>
  )
}