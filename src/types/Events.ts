import Category from './Category'
import Source from './Source'
import Geometry from './Geometry'

interface Events {
	id: string,
	title: string,
	description: ( string | null )
	link: string,
	closed: ( string | null )
	categories: Category[],
	sources: Source[],
	geometries: Geometry[],
}

export default Events

// const sortedCategory = () => {
//   objId.value = categoryObj.value.sort((a, b) => {
//     let fa = a.id.toLowerCase(), fb = b.id.toLowerCase()
//     if (fa < fb) {
//       return -1
//     }
//     if (fa > fb) {
//       return 1
//     }
//     return 0
//   })
// } 
