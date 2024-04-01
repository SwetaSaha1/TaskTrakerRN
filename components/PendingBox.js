import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from './TaskItem';

const PendingBox = ({ pendingTasks, onEdit, onDelete, onAssign }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Pending</Text>
      {pendingTasks.map((task) => (
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

export default PendingBox;