import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from './TaskItem';

const CompletedBox = ({ completedTasks, onEdit, onDelete, onAssign }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Completed</Text>
      {completedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onAssign={onAssign}
        />
      ))}
    </View>
  );
};

export default CompletedBox;