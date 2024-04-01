import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import PendingBox from './components/PendingBox';
import InProgressBox from './components/InProgressBox';
import CompletedBox from './components/CompletedBox';
import DeployedBox from './components/DeployedBox';
import DeferredBox from './components/DeferredBox';

function App() {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deployedTasks, setDeployedTasks] = useState([]);
  const [deferredTasks, setDeferredTasks] = useState([]);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: 'All',
    assignee: 'All',
    priority: 'All',
  });

  const handleEditTask = (updatedTask, currentBox) => {
    const updateTasks = (tasks, updatedTask) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    if (currentBox === 'pending') setPendingTasks(updateTasks(pendingTasks, updatedTask));
    else if (currentBox === 'inProgress') setInProgressTasks(updateTasks(inProgressTasks, updatedTask));
    else if (currentBox === 'completed') setCompletedTasks(updateTasks(completedTasks, updatedTask));
    else if (currentBox === 'deployed') setDeployedTasks(updateTasks(deployedTasks, updatedTask));
    else if (currentBox === 'deferred') setDeferredTasks(updateTasks(deferredTasks, updatedTask));
  };

  const handleDeleteTask = (taskId, currentBox) => {
    const filterTasks = (tasks, taskId) => tasks.filter((task) => task.id !== taskId);
    if (currentBox === 'pending') setPendingTasks(filterTasks(pendingTasks, taskId));
    else if (currentBox === 'inProgress') setInProgressTasks(filterTasks(inProgressTasks, taskId));
    else if (currentBox === 'completed') setCompletedTasks(filterTasks(completedTasks, taskId));
    else if (currentBox === 'deployed') setDeployedTasks(filterTasks(deployedTasks, taskId));
    else if (currentBox === 'deferred') setDeferredTasks(filterTasks(deferredTasks, taskId));
  };

  const handleAddTask = (newTask) => {
    setPendingTasks([...pendingTasks, newTask]);
    setShowNewTaskModal(false);
  };

  const openNewTaskModal = () => setShowNewTaskModal(true);

  const handleFilters = (newFilters) => setFilters(newFilters);

  const handleAssignTask = (task, currentBox) => {
    const assignTask = (setFrom, setTo, task) => {
      setFrom(setFrom.filter((t) => t.id !== task.id));
      setTo([...setTo, task]);
    };
    if (currentBox === 'pending') assignTask(setPendingTasks, setInProgressTasks, task);
    else if (currentBox === 'inProgress') assignTask(setInProgressTasks, setCompletedTasks, task);
    else if (currentBox === 'completed') assignTask(setCompletedTasks, setDeployedTasks, task);
    else if (currentBox === 'deployed') assignTask(setDeployedTasks, setDeferredTasks, task);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.filterLabel}>Filter By</Text>
      <View style={styles.topBar}>
        <FilterBar onFilters={handleFilters} initialFilters={filters} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.boxContainer}
        contentContainerStyle={styles.boxContainerContent}
      >
        <View style={[styles.boxWrapper, styles.wideBox]}>
          <PendingBox
            pendingTasks={pendingTasks}
            onEdit={(task) => handleEditTask(task, 'pending')}
            onDelete={(taskId) => handleDeleteTask(taskId, 'pending')}
            onAssign={(task) => handleAssignTask(task, 'pending')}
          />
        </View>
        <View style={[styles.boxWrapper, styles.wideBox]}>
          <InProgressBox
            inProgressTasks={inProgressTasks}
            onEdit={(task) => handleEditTask(task, 'inProgress')}
            onDelete={(taskId) => handleDeleteTask(taskId, 'inProgress')}
            onAssign={(task) => handleAssignTask(task, 'inProgress')}
          />
        </View>
        <View style={[styles.boxWrapper, styles.wideBox]}>
          <CompletedBox
            completedTasks={completedTasks}
            onEdit={(task) => handleEditTask(task, 'completed')}
            onDelete={(taskId) => handleDeleteTask(taskId, 'completed')}
            onAssign={(task) => handleAssignTask(task, 'completed')}
          />
        </View>
        <View style={[styles.boxWrapper, styles.wideBox]}>
          <DeployedBox
            deployedTasks={deployedTasks}
            onEdit={(task) => handleEditTask(task, 'deployed')}
            onDelete={(taskId) => handleDeleteTask(taskId, 'deployed')}
            onAssign={(task) => handleAssignTask(task, 'deployed')}
          />
        </View>
        <View style={[styles.boxWrapper, styles.wideBox]}>
          <DeferredBox
            deferredTasks={deferredTasks}
            onEdit={(task) => handleEditTask(task, 'deferred')}
            onDelete={(taskId) => handleDeleteTask(taskId, 'deferred')}
          />
        </View>
      </ScrollView>

      <View style={styles.addTaskButtonContainer}>
        <TouchableOpacity style={styles.addTaskButton} onPress={openNewTaskModal}>
          <Text style={styles.addTaskButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {showNewTaskModal && (
        <View style={styles.modal}>
          <TaskForm onAdd={handleAddTask} onClose={() => setShowNewTaskModal(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007bff',
    paddingHorizontal: 8,
  },
  filterLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '25%',
    marginBottom: 8,
    textAlign: 'center',
  },
  topBar: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 16,
  },
  addTaskButtonContainer: {
    marginTop: 16,
    marginBottom: '25%',
  },
  addTaskButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: 'center',
  },
  addTaskButtonText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  boxContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  boxContainerContent: {
    paddingHorizontal: 32,
  },
  boxWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 8,
    flexGrow: 1, // Reset flexGrow to 1
  },
  wideBox: {
    width: '20%', // Set width to 80%
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;