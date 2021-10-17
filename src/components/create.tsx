import React from "react"
import { View,Text } from "react-native"
export interface CreateFormProps {

}
const CreateForm: React.ReactNode = () => {
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