import React, {useState} from 'react';
import {VStack, FlatList, Box, Spacer} from 'native-base';

import Header from '../../components/Header';
import TodoItemList from '../../components/TodoItemList';
import {IItem} from '../../types/todo';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([
    {
      id: '12312',
      title: 'Assistir Aula Ignite',
      isDone: false,
      createdAt: new Date(),
    },
    {
      id: '321456',
      title: 'Finalizar desafio',
      isDone: true,
      createdAt: new Date(),
    },
    {
      id: '3214',
      title: 'Estudar para prova',
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  return (
    <VStack space={1} alignItems="center" mt={3}>
      <Header />
      <Spacer />
      <Box
        pt={12}
        w={{
          base: '100%',
          md: '25%',
        }}>
        <FlatList
          data={todos}
          renderItem={({item}) => <TodoItemList item={item} />}
          keyExtractor={item => item.title}
        />
      </Box>
    </VStack>
  );
};

export default Home;
