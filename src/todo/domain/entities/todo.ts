import type { Progress } from "../enums/progressEnum";

export interface Todo {
	id: string;
	title: string;
	progress: Progress;
}
