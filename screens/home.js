import React from 'react';
import { View, Text,FlatList,TouchableOpacity ,RefreshControl} from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_DOGS } from '../queries';
import FastImage from 'react-native-fast-image';

export function DogsHomeScreen({ navigation }) {
    const { loading, error, data ,refetch} = useQuery(GET_DOGS , {
      notifyOnNetworkStatusChange : true
    });
    
    if (loading || error) return (
      <View style={{ flex:1 ,justifyContent:'center',alignItems:'center'}}>
        <Text style = {{fontSize:16,fontWeight:'600'}}>{loading ? 'Loading...' : `${error.message}`}</Text>
      </View>
    )
  
    return (
      <View style={{ flex:1 }}>
        <FlatList
          data={data?.dogs ?? []}
          refreshControl = {
            <RefreshControl
            refreshing={false}
            onRefresh={() => refetch()}
          />
          }
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{
                margin: 10,
                backgroundColor: 'lightgray',
                minHeight: 50,
                alignItems: 'center',
                justifyContent:'space-between',
                borderRadius: 10,
                flexDirection: 'row',
                padding:10
              }} onPress = {() => navigation.navigate('Details',{breed : item?.breed})}>
                <Text style = {{fontSize:14,fontWeight:'bold',textTransform: 'capitalize'}}>{item?.breed}</Text>
                <FastImage 
                style = {{height:100,width:100}}
                source = {{uri : item?.displayImage}}/>
              </TouchableOpacity>
            )
          }} />
      </View>
    )
  };