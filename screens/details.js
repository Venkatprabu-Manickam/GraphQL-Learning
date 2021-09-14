import React from 'react';
import { View, Text,FlatList,TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_DOGS_BY_BREED } from '../queries';
import FastImage from 'react-native-fast-image';

export function DogsDetails({navigation,route}) {
    const { loading, error, data } = useQuery(GET_DOGS_BY_BREED , {
      variables : {
        breed : route?.params?.breed ?? ''
      }
    });
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: () => (
            <Text style = {{fontSize:18,fontWeight:'600' ,textTransform : 'capitalize'}}>{route?.params?.breed ?? 'Details'}</Text>
        ),
       headerBackTitle : ' '
      });
    })
     
    if (loading || error) return (
      <View style={{ flex:1 ,justifyContent:'center',alignItems:'center'}}>
        <Text style = {{fontSize:16,fontWeight:'600'}}>{loading ? 'Loading...' : `${error.message}`}</Text>
      </View>
    );
  
    return(
      <View style = {{flex:1}}>
        <FlatList
          data={data?.dog?.images ?? []}
          numColumns = {2}
          renderItem={({ item }) => {
            return (
              <FastImage 
                style = {{height:200,width : '45%',borderRadius : 10,margin : 10}}
                source = {{uri : item?.url}}/>
            )
          }} 
          keyExtractor = {(item,index) => `${item?.id}-${index}`}/>
      </View>
    )
  };