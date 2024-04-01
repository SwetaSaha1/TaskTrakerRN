import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function TaskForm({ onAdd, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('p2');

  const handleSubmit = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      team,
      assignee,
      priority,
      status: 'Pending',
      startDate: new Date(),
    };
    onAdd(newTask);
    setTitle('');
    setDescription('');
    setTeam('');
    setAssignee('');
    setPriority('p2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Add New Task</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Team"
          value={team}
          onChangeText={(text) => setTeam(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Assignee"
          value={assignee}
          onChangeText={(text) => setAssignee(text)}
        />
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Add Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '300px', // Increased width by 50%
    maxWidth: 600, // Increased maximum width
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
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
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  priorityButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default TaskForm;