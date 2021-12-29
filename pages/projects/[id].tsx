import { Heading } from '@chakra-ui/layout'
import Base from '../../components/layout/Base'

interface props {
	title: string,
}

const ProjectPage = ({ title }: props) => {
	return (
		<Base headerColor='black'>
			<Heading>{title}</Heading>
		</Base>
	)
}

export default ProjectPage
