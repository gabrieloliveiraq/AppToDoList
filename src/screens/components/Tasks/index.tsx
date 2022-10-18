import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Tasks/styles";

type TaskType = {
  task: String;
  onRemove: () => void;
};
export function Tasks({ task, onRemove }: TaskType) {
  return (
    <View>
      <Text style={styles.task}>{task}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text>Ícone da Lixeira</Text>
      </TouchableOpacity>
    </View>
  );
}
