import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";
import { Box, Button, Container, Flex, Grid, Strong } from "@radix-ui/themes";

interface CardProps {
	title: string;
}

export function TodoCard({ title }: CardProps) {
	return (
		<Box
			style={{
				display: "flex",
				background: "var(--gray-a2)",
				borderRadius: "var(--radius-3)",
			}}
		>
			<Container size="3">
				<Box p="4">
					<Grid columns={{ initial: "1", md: "2" }} gap="3" width="auto">
						<Strong>{title}</Strong>

						<Flex justify="center" gap="3">
							<Button color="green">
								<CheckIcon /> Completar
							</Button>
							<Button color="red">
								<TrashIcon /> Deletar
							</Button>
						</Flex>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
