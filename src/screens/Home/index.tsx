import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  import { styles } from "./styles";
  import { Tasks } from "../components/Tasks/index";
  
  export default function Home() {
    const task1 = ["Trabalhar"];
    const handlerAddTask = function () {
      task1.push("Estudar");
      return console.log(task1);
    };
    const handlerTaskRemove = function () {
      return console.log("Você clicou para excluir a tarefa!");
    };
  
    return (
      <>
        <View style={styles.topFrame}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
          ></TextInput>
          <TouchableOpacity style={styles.buttonAdd} onPress={handlerAddTask}>
            <Text style={styles.textButtonAdd}>+</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.centerFrame}>
          <Text style={styles.createdItem}>Criadas</Text>
          <Text style={styles.finishedItem}>Concluídas</Text>
        </View>
        <View style={styles.bottomFrame}>
          <FlatList
            data={[]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Tasks
                key={item}
                task={item}
                onRemove={() => handlerTaskRemove()}
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
  
  // <FlatList
  // data={participants}
  // keyExtractor={(item) => item}
  // renderItem={({ item }) => (
  //   <Participant
  //     key={item}
  //     name={item}
  //     onRemove={() => handlerParticipantRemove(item)}
  //   />
  // )}
  