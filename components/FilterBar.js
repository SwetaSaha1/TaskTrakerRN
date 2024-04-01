import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

function FilterBar({ onFilters, initialFilters }) {
  const [dateRange, setDateRange] = useState(initialFilters.dateRange);
  const [assignee, setAssignee] = useState(initialFilters.assignee);
  const [priority, setPriority] = useState(initialFilters.priority);

  const handleFilters = () => onFilters({ dateRange, assignee, priority });

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Date:</Text>
        <Picker
          style={styles.picker}
          selectedValue={dateRange}
          onValueChange={(itemValue) => setDateRange(itemValue)}
        >
          <Picker.Item label="All" value="All" />
        </Picker>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Assignee:</Text>
        <Picker
          style={styles.picker}
          selectedValue={assignee}
          onValueChange={(itemValue) => setAssignee(itemValue)}
        >
          <Picker.Item label="All" value="All" />
        </Picker>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Priority:</Text>
        <Picker
          style={styles.picker}
          selectedValue={priority}
          onValueChange={(itemValue) => setPriority(itemValue)}
        >
          <Picker.Item label="All" value="All" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.applyButton} onPress={handleFilters}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#f2f2f2',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
  },
  filterLabel: {
    fontSize: 10,
    marginRight: 2,
    fontWeight: 'bold',
  },
  picker: {
    height: 24,
    width: 80,
    fontSize: 10,
  },
  applyButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default FilterBar;