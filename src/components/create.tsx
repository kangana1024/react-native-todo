import { Text } from "native-base"
import React from "react"
import { View } from "react-native"
interface CreateFormProps {

}
const CreateForm: React.FC<CreateFormProps> = () => {
	return (
		<View>
			<Text style={{
				fontSize: 25,
				fontWeight: 'bold'
			}}>Todo Lists</Text>
		</View>
	)
}

export default CreateForm