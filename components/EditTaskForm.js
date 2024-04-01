import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditTaskForm = ({ task, onSubmit }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.assignee);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = () => {
    const updatedTask = { ...task, title, description, assignee, priority };
    onSubmit(updatedTask);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
      />
      <Text style={styles.label}>Assignee:</Text>
      <TextInput
        style={styles.input}
        value={assignee}
        onChangeText={(text) => setAssignee(text)}
      />
      <Text style={styles.label}>Priority:</Text>
      <View style={styles.priorityContainer}>
        <TouchableOpacity
          style={[styles.priorityButton, priority === 'P0' && styles.selectedPriorityButton]}
          onPress={() => setPriority('P0')}
        >
          <Text style={[styles.priorityButtonText, priority === 'P0' && styles.selectedPriorityButtonText]}>P0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.priorityButton, priority === 'P1' && styles.selectedPriorityButton]}
          onPress={() => setPriority('P1')}
        >
          <Text style={[styles.priorityButtonText, priority === 'P1' && styles.selectedPriorityButtonText]}>P1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.priorityButton, priority === 'P2' && styles.selectedPriorityButton]}
          onPress={() => setPriority('P2')}
        >
          <Text style={[styles.priorityButtonText, priority === 'P2' && styles.selectedPriorityButtonText]}>P2</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  priorityContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  priorityButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginRight: 8,
  },
  selectedPriorityButton: {
    backgroundColor: '#007bff',
  },
  priorityButtonText: {
    fontSize: 14,
    color: '#333',
  },
  selectedPriorityButtonText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EditTaskForm;