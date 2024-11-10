import { CheckIcon, TrashIcon } from '@radix-ui/react-icons';
import { Box, Button, Container, Flex, Grid, Strong } from '@radix-ui/themes';
import type { Todo } from '../../../domain/entities/todo';

interface CardProps {
  todo: Todo;
  removeItem(id: string): void;
}

export function TodoCard({ todo, removeItem }: CardProps) {
  function handleRemoveItem() {
    removeItem(todo.id);
  }

  return (
    <Box
      style={{
        display: 'flex',
        background: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
      }}
    >
      <Container size="3">
        <Box p="4">
          <Grid columns={{ initial: '1', md: '2' }} gap="3" width="auto">
            <Strong>{todo.title}</Strong>

            <Flex justify="center" gap="3">
              <Button color="green">
                <CheckIcon /> Completar
              </Button>
              <Button type="button" onClick={handleRemoveItem} color="red">
                <TrashIcon /> Deletar
              </Button>
            </Flex>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
