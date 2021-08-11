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
	geometry: Geometry[],
}

export default Events



