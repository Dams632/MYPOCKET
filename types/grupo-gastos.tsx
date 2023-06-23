import { Gasto } from "./gastos";

export type GrupoGastos={
    day: string;
    expenses: Gasto[];
    total: number;
}