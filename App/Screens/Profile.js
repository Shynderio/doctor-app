import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import url from '../../assets/images/url';
import {useAuth } from "@clerk/clerk-expo";
const Profile = () => {
  // Sample user data, replace with actual user data from your application state or context
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '********', // Password field should be masked or handled securely
    phoneNumber: '123-456-7890',
    avatar: url.male
  });

  const [editableFields, setEditableFields] = useState(false);

  const handleLogout = () => {
    // Logic for handling user logout, such as clearing session data or navigating to the logout screen
    // ...
  };

  const handleSave = () => {
    // Logic for saving updated user data
    // This example just toggles editable mode for demonstration purposes
    setEditableFields(false);
    // Save updated user data to your state or send it to the server
    // ...
  };
  const SignOut = () => {
    const { isLoaded,signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }
    return (
      <View>
        <Button
          title="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={{uri:userData.avatar}} style={styles.avatar} />
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={userData.name}
          editable={editableFields}
          onChangeText={(text) => setUserData({ ...userData, name: text })}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={userData.email}
          editable={editableFields}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={userData.password}
          editable={editableFields}
          onChangeText={(text) => setUserData({ ...userData, password: text })}
          secureTextEntry // For password security (text masked)
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={userData.phoneNumber}
          editable={editableFields}
          onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })}
        />

        {editableFields ? (
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => setEditableFields(true)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}

        <SignOut/>
      </View>
    </View>
  );
};





 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileSection: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile;
