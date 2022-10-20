import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CheckBox, Icon } from "@rneui/themed";

import { styles } from "../Tasks/styles";

type TaskType = {
  task: String;
  onRemove: () => void;
};
export function Tasks({ task, onRemove }: TaskType) {
  const [isSelected, setSelection] = useState(false);

  function handlerFinishedTask() {
    const invertSelectedTask = function () {
      setSelection(!isSelected);
    };
    invertSelectedTask();
  }

  return (
    <View style={styles.bodyTask}>
      <View style={styles.containercheckBox}>
        <CheckBox
          center
          style={styles.checkBox}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          containerStyle={{
            backgroundColor: "#262626",
            justifyContent: "center",
            marginTop: 7,
          }}
          size={18}
          checked={isSelected}
          onPress={() => handlerFinishedTask()}
        />
      </View>
      <Text style={styles.task}>{task}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.iconTrash}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}
