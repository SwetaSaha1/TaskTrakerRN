import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SortComponent = ({ sortBy, onSort }) => {
  const handleSort = (value) => {
    onSort(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort by:</Text>
      <TouchableOpacity
        style={[
          styles.sortButton,
          sortBy === 'priorityAsc' && styles.selectedSortButton,
        ]}
        onPress={() => handleSort('priorityAsc')}
      >
        <Text
          style={[
            styles.sortButtonText,
            sortBy === 'priorityAsc' && styles.selectedSortButtonText,
          ]}
        >
          Priority (Ascending)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.sortButton,
          sortBy === 'priorityDesc' && styles.selectedSortButton,
        ]}
        onPress={() => handleSort('priorityDesc')}
      >
        <Text
          style={[
            styles.sortButtonText,
            sortBy === 'priorityDesc' && styles.selectedSortButtonText,
          ]}
        >
          Priority (Descending)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.sortButton,
          sortBy === 'startDateAsc' && styles.selectedSortButton,
        ]}
        onPress={() => handleSort('startDateAsc')}
      >
        <Text
          style={[
            styles.sortButtonText,
            sortBy === 'startDateAsc' && styles.selectedSortButtonText,
          ]}
        >
          Start Date (Ascending)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.sortButton,
          sortBy === 'startDateDesc' && styles.selectedSortButton,
        ]}
        onPress={() => handleSort('startDateDesc')}
      >
        <Text
          style={[
            styles.sortButtonText,
            sortBy === 'startDateDesc' && styles.selectedSortButtonText,
          ]}
        >
          Start Date (Descending)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.sortButton,
          sortBy === 'endDateAsc' && styles.selectedSortButton,
        ]}
        onPress={() => handleSort('endDateAsc')}
      >
        <Text
          style={[
            styles.sortButtonText,
            sortBy === 'endDateAsc' && styles.selectedSortButtonText,
          ]}
        >
          End Date (Ascending)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.sortButton,
          sortBy === 'endDateDesc' && styles.selectedSortButton,
        ]}
        onPress={() => handleSort('endDateDesc')}
      >
        <Text
          style={[
            styles.sortButtonText,
            sortBy === 'endDateDesc' && styles.selectedSortButtonText,
          ]}
        >
          End Date (Descending)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#eee',
    marginBottom: 8,
  },
  selectedSortButton: {
    backgroundColor: '#007bff',
  },
  sortButtonText: {
    fontSize: 10.8,
    color: '#333',
  },
  selectedSortButtonText: {
    color: '#fff',
  },
});

export default SortComponent;