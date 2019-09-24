import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, FlatList} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoal] = useState([])
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = goalTitle => {
        setCourseGoal(
            currentGoals => [
                ...currentGoals, {
                    //TODO: This can not be that unique
                    id: Math.random().toString(),
                    value: goalTitle
                }
            ]
        );
        disableAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoal( currentGoals => {
            return currentGoals.filter(
                (goal) => goal.id !== goalId
            )
        });
    };

    const enableAddMode = () => {
        setIsAddMode(true);
    };

    const disableAddMode = () => {
        setIsAddMode(false)
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" color={'blueviolet'} onPress={enableAddMode}/>
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={disableAddMode}/>
            <FlatList
                keyExtractor={itemData => itemData.id}
                data={courseGoals}
                renderItem={
                    itemData =>
                        <GoalItem
                            id={itemData.item.id}
                            title={itemData.item.value}
                            onDelete={removeGoalHandler}
                        />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },

    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textInput: {
        borderBottomColor: 'blueviolet',
        borderBottomWidth: 1,
        padding: 4,
        width: '80%'
    }
});
