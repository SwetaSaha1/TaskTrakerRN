import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from './TaskItem';

const DeferredBox = ({ deferredTasks, onEdit, onDelete }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Deferred</Text>
      {deferredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </View>
  );
};

export default DeferredBox;