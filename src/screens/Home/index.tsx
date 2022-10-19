import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Tasks } from "../components/Tasks/index";

export default function Home() {
  // const [state, setState]
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState("");
  const countCreated = tasks.length;
  const countCompleted = 0;

  // function task includes
  function handlerAddTask() {
    if (tasks.includes(taskDescription)) {
      return Alert.alert(
        "Essa tarefa já existe!",
        "Esta tarefa já existe em sua lista! Tente novamente alterando alguma informação!"
      );
    }
    if (taskDescription != "") {
      setTasks((prevState) => [...prevState, taskDescription]);
    } else
      return Alert.alert(
        "Campo Vazio!",
        "Adicione informações para poder incluir uma nova tarefa em sua lista."
      );
    setTaskDescription("");
    return console.log(tasks);
  }
  // function task delete
  function handlerTaskRemove(name: String) {
    Alert.alert("Remover", `Deseja remover a tarefa "${name}"?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((Task) => Task !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  // screen componentization
  return (
    <>
      <View style={styles.topFrame}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={setTaskDescription}
          value={taskDescription}
        ></TextInput>
        <TouchableOpacity style={styles.buttonAdd} onPress={handlerAddTask}>
          <Text style={styles.textButtonAdd}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.centerFrame}>
        <Text style={styles.createdItem}>Criadas</Text>
        <Text style={styles.countCreated}>{countCreated}</Text>
        <Text style={styles.finishedItem}>Concluídas</Text>
        <Text style={styles.countCompleted}>{countCompleted}</Text>
      </View>
      <View style={styles.bottomFrame}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Tasks
              key={item}
              task={item}
              onRemove={() => handlerTaskRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <>
              <Text style={styles.listEmpty}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmpty2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </>
          )}
        />
      </View>
    </>
  );
}
