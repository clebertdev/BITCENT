import { TipoTransacao } from "./TipoTransacao"

export default interface Transacao {
    id?: string
    descricao: string
    valor: string
    data: Date
    tipo: TipoTransacao
}

export const transacaoVazia: Transacao = {
    descricao: '',
    valor: '',
    data: new Date(),
    tipo: TipoTransacao.DESPESA
}