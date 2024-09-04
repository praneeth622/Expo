import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header() {
    const { user } = useUser();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                    {user?.imageUrl ? (
                        <Image
                            source={{ uri: user.imageUrl }}
                            style={styles.profileImage}
                        />
                    ) : (
                        <Text style={styles.loadingText}>Loading Image...</Text>
                    )}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.userName}>{user?.firstName}</Text>
                </View>
            </View>
            {/* SearchBar */}
            <View style={styles.searchBar}>
                <FontAwesome name="search" size={20} color="#6C48C5" />
                <TextInput
                    placeholder="Search..."
                    placeholderTextColor="#8A7FA7"
                    style={styles.searchInput}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#6C48C5',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 8,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileContainer: {
        marginRight: 15,
        backgroundColor: '#FFF',
        padding: 2,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    loadingText: {
        color: '#FFF',
        fontSize: 16,
    },
    textContainer: {
        flex: 1,
    },
    welcomeText: {
        fontSize: 20,
        color: '#E4D9FF',
        marginBottom: 5,
    },
    userName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
        color: '#6C48C5',
    },
});
