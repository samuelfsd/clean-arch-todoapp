import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons';
import { Box, Button, Container, Flex, TextField } from '@radix-ui/themes';

export function TodoSearch() {
  return (
    <Container size="4" my="6">
      <Flex align="center" justify="center" gap="3">
        <Box flexGrow="1" maxWidth="900px">
          <TextField.Root size="3" placeholder="Pesquise aqui…">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </Box>

        <Button size="3" color="green">
          <PlusIcon />
          Adicionar
        </Button>
      </Flex>
    </Container>
  );
}
