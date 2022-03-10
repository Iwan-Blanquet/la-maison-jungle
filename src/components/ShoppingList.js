// Import des ficgiers nécessaire au composant ShoppingList
import '../styles/ShoppingList.css'
import { plantList } from "../datas/plantList"
import PlantItem from './PlantItem'

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, light, water}) => (
                    <PlantItem 
                        id={id}
                        cover={cover}
                        name={name}
                        light={light}
                        water={water}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList