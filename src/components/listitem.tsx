import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
export interface TodoItem {
	id: number
	todo: string
	detail: string
	status: string
}
interface ListItemProps {
	item: TodoItem
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
	return (<TouchableWithoutFeedback
		onPress={() => {
			console.log(item.id)
		}}>
		<View style={styles.mainCardView}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>

				<View style={{ marginLeft: 12 }}>
					<Text
						style={{
							fontSize: 14,
							color: Colors.black,
							fontWeight: 'bold',
							textTransform: 'capitalize',
						}}>
						{item.todo}
					</Text>
					<View
						style={{
							marginTop: 4,
							borderWidth: 0,
							width: '85%',
						}}>
						<Text
							style={{
								color: Colors.gray,
								fontSize: 12,
							}}>
							{item.detail}
						</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					height: 25,
					backgroundColor: Colors.pink,
					borderWidth: 0,
					width: 25,
					marginLeft: -26,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 50,
				}}>
			</View>
		</View>
	</TouchableWithoutFeedback>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	mainCardView: {
		height: 90,
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderRadius: 15,
		shadowColor: Colors.shadow,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 8,
		elevation: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 16,
		paddingRight: 14,
		marginTop: 6,
		marginBottom: 6,
		marginLeft: 16,
		marginRight: 16,
	},
	subCardView: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: Colors.history_back,
		borderColor: Colors.color_eeeeee,
		borderWidth: 1,
		borderStyle: 'solid',
		alignItems: 'center',
		justifyContent: 'center',
	},
});