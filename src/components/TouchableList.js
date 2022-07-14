import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    } from 'react-native';

const studentData = [
    {   
        id : '1',
        name : 'Iron man',
        image : require('../../assets/Images/Iron_man.jpg'),
        description: 'Iron man is a superHero appearing in American comic books published by Marvel.',
    },
    {   
        id : '2',
        name : 'Captain America',
        image : require('../../assets/Images/captain_america.jpg'),
        description: 'Iron man is a superHero appearing in American comic books published by Marvel. '
    },
    {   
        id : '3',
        name : 'Thor',
        image : require('../../assets/Images/Thor.jpg'),
        description: 'Iron man is a superHero appearing in American comic books published by Marvel. '
    },
    {   
        id : '4',
        name : 'Hulk',
        image : require('../../assets/Images/hulk.jpg'),
        description: 'Iron man is a superHero appearing in American comic books published by Marvel. '
    },
    {   
        id : '5',
        name : 'Black Widow',
        image : require('../../assets/Images/Black_widow.jpg'),
        description: 'Iron man is a superHero appearing in American comic books published by Marvel. '
    },
    {   
        id : '6',
        name : 'Hawkeye',
        image : require('../../assets/Images/Hawkeye.jpg'),
        description: 'Iron man is a superHero appearing in American comic books published by Marvel. '
    },
]

const TouchableList = () => {

    const DataItems = (Item) => {
        return(
            <TouchableOpacity
                style={styles.ListBackground}>
                <View style={[styles.ListItemStyling, {flexDirection: 'row'}]}>
                    <View style={[styles.ListBackground, {flex: 1}]}>
                        <Image 
                            style={styles.ImageStyling}
                            source={Item.item.image}
                            />
                    </View>
                    <View style={[styles.ListBackground, {flex: 2}]}>
                        <View>
                            <Text style={styles.NameStyle}>{Item.item.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.description}>         {Item.item.description}</Text>
                        </View>
                    </View>           
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView>
            <View>
                <FlatList
                    data={studentData}
                    renderItem={DataItems}
                    ItemSeparatorComponent={()=>{
                                        return(
                                            <View style={styles.ItemSeparatorstyle} />
                                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default TouchableList;

const styles = StyleSheet.create({
    ListItemStyling: {
        flex: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    ImageStyling: {
        width: 100, 
        height: 100, 
        margin: 5 ,
        resizeMode: 'cover', 
        borderRadius: 100
    },
    NameStyle: {
        fontSize: 18, 
        padding: 10,
        paddingBottom: 0,
        color:'white',
        },
    description:{
        padding: 10,
        fontSize: 15,
        color: 'white',
    },
    ListBackground: {
        backgroundColor: 'black',
        borderColor: 'red',
    },
    ItemSeparatorstyle:{
        height: 1,
        width: '100%'
    }
})