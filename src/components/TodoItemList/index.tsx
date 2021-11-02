import React from 'react';
import {IItem} from '../../types/todo';
import firestore from '@react-native-firebase/firestore';

import {
  HStack,
  Text,
  Box,
  CheckCircleIcon,
  WarningIcon,
  CloseIcon,
} from 'native-base';

const TodoItemList = ({item}: {item: IItem}) => {
  const handleRemove = async (id: string) => {
    await firestore().collection('todos').doc(id).delete();
  };

  return (
    <Box borderBottomWidth="1" pl="4" pr="5" py="2">
      <HStack space={3} justifyContent="flex-start" alignItems="center">
        <Box>
          {item.isDone ? (
            <CheckCircleIcon size={12} color="#03BB85" />
          ) : (
            <WarningIcon size={12} color="#FF6961" />
          )}
        </Box>
        <Text
          _dark={{
            color: 'primary.800',
          }}
          flex={1}
          color="red.800"
          bold>
          {item.title}
        </Text>
        <Box>
          <CloseIcon
            size={4}
            color="#FF0000"
            onPress={() => handleRemove(item.id)}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default TodoItemList;
