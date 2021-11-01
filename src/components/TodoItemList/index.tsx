import React from 'react';
import {IItem} from '../../types/todo';

import {HStack, Text, Box, CheckCircleIcon, WarningIcon} from 'native-base';

const TodoItemList = ({item}: {item: IItem}) => {
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
          color="red.800"
          bold>
          {item.title}
        </Text>
      </HStack>
    </Box>
  );
};

export default TodoItemList;
