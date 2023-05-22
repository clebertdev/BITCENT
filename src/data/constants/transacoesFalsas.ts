import Id from "@/logic/core/comum/Id"
import { TipoTransacao } from "@/logic/core/financas/TipoTransacao"
import Transacao from "@/logic/core/financas/Transacao"


const transacoesFalsas: Transacao[] = [
    {
        id: Id.novo(),
        descricao: 'Salário',
        data: new Date(2025, 4, 1),
        valor: 7123.34,
        tipo: TipoTransacao.RECEITA,
    },
    {
        id: Id.novo(),
        descricao: 'Conta de luz',
        data: new Date(2025, 4, 3),
        valor: 320.00,
        tipo: TipoTransacao.DESPESA,
    },
    {
        id: Id.novo(),
        descricao: 'Cartão de Crédito',
        data: new Date(2025, 4, 1 ),
        valor: 2200.00,
        tipo: TipoTransacao.DESPESA,
    },
    {
        id: Id.novo(),
        descricao: 'Conta de Água',
        data: new Date(2025, 4, 8),
        valor: 174.35,
        tipo: TipoTransacao.DESPESA,
    },
    {
        id: Id.novo(),
        descricao: 'Mensalidade MBA',
        data: new Date(2023, 4, 2),
        valor: 750.00,
        tipo: TipoTransacao.DESPESA,
    },    
    {
        id: Id.novo(),
        descricao: 'Investimentos',
        data: new Date(2022, 4, 1),
        valor: 2123.34,
        tipo: TipoTransacao.RECEITA,
    },
    {
        id: Id.novo(),
        descricao: 'Aluguel + Cond.',
        data: new Date(2022, 4, 1),
        valor: 1817.59,
        tipo: TipoTransacao.DESPESA,
    },
]

export default transacoesFalsas