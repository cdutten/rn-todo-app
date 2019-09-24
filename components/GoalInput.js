import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View, Modal, TouchableNativeFeedback, Text} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder={"A new goal!"}
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsContainer}>
                    <TouchableNativeFeedback onPress={props.onCancel}>
                        <View style={styles.button}>
                            <Text styles={styles.buttons}> Cancel </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Button color={'blueviolet'} title={"Add"} onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonsContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textInput: {
        borderBottomColor: 'blueviolet',
        borderBottomWidth: 1,
        padding: 4,
        width: '80%',
        marginVertical: 15
    },
    button: {
        width:60
    }
});

export default GoalInput;
