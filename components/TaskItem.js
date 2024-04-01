import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from './Modal';
import EditTaskForm from './EditTaskForm';

const TaskItem = ({ task, onEdit, onDelete, onAssign }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleEditSubmit = (updatedTask) => {
    onEdit(updatedTask);
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    onDelete(task.id);
    setShowDeleteModal(false);
  };

  const handleAssignClick = () => {
    onAssign(task);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {task.title}
        <Text style={styles.priority}>[{task.priority}]</Text>
      </Text>

      <Text style={styles.description}>{task.description}</Text>

      <View style={styles.assigneeContainer}>
        <Text style={styles.assignee}>@{task.assignee}</Text>
        <TouchableOpacity style={styles.optionsButton} onPress={handleOptionsClick}>
          <Text style={styles.optionsButtonText}>&#8230;</Text>
        </TouchableOpacity>
      </View>

      {showOptions && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={handleEditClick}>
            <Text style={styles.optionButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleDeleteClick}>
            <Text style={styles.optionButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.assignButton} onPress={handleAssignClick}>
        <Text style={styles.assignButtonText}>Assign</Text>
      </TouchableOpacity>

      {/* Edit Modal */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
        <EditTaskForm task={task} onSubmit={handleEditSubmit} />
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <View>
          <Text style={styles.deleteModalText}>Are you sure you want to delete this task?</Text>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteConfirm}>
            <Text style={styles.deleteButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setShowDeleteModal(false)}>
            <Text style={styles.cancelButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8ece7',
    borderRadius: 0,
    padding: 6,
    marginTop: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priority: {
    marginLeft: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    backgroundColor: '#e8ece7',
  },
  assigneeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  assignee: {
    fontSize: 14,
  },
  optionsButton: {
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 4,
  },
  optionsButtonText: {
    fontSize: 16,
  },
  optionsContainer: {
    backgroundColor: '#e4e6e3',
    borderRadius: 1,
    padding: 2,
    marginTop: 8,
  },
  optionButton: {
    backgroundColor: '#ebe5e5',
    padding: 4,
    marginBottom: 4,
  },
  optionButtonText: {
    fontSize: 14,
  },
  assignButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  assignButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  deleteModalText: {
    fontSize: 16,
    marginBottom: 16,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 14,
  },
});

export default TaskItem;