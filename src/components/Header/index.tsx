import React, {useState} from 'react';
import {Heading, Input, Spacer, HStack, Button} from 'native-base';
import firestore from '@react-native-firebase/firestore';

const Header = () => {
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    const newData = {
      title: newItem,
      isDone: false,
      createdAt: new Date(),
    };

    firestore().collection('todos').add(newData);
    setNewItem('');
  };

  return (
    <>
      <Heading textAlign="center" mb="10" color="#88AAFF">
        Todo List
      </Heading>
      <HStack>
        <Input
          color="#000000"
          placeholder="Adicione uma nova tarefa"
          w={{
            base: '70%',
            md: '90%',
          }}
          value={newItem}
          onChangeText={setNewItem}
        />
        <Button mx={1} onPress={handleAddItem}>
          Salvar
        </Button>
      </HStack>
      <Spacer />
    </>
  );
};

export default Header;
