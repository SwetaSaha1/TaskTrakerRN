import React from 'react';
import { View, Text } from 'react-native';
import TaskItem from './TaskItem';

const DeployedBox = ({ deployedTasks, onEdit, onDelete, onAssign }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Deployed</Text>
      {deployedTasks.map((task) => (
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

export default DeployedBox;