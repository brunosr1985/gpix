import { IDinamico } from "./idinamico";
import { IEstatico } from "./iestatico";
export declare class PIX implements IDinamico, IEstatico {
    private _is_transacao_unica;
    private _chave;
    private _nome_recebedor;
    private _cidade_recebedor;
    private _valor;
    private _cep_recebedor;
    private _identificador_transacao;
    private _descricao_transacao;
    private _url_padrao_pix;
    private constructor();
    static estatico(): IEstatico;
    static dinamico(): IDinamico;
    setUrlPadraoPix(url_padrao_pix: string): void;
    setChave(chave: string): void;
    setCepRecebedor(cep: string): void;
    setNomeRecebedor(nome_recebedor: string): void;
    setIdentificador(identificador_transacao: string): void;
    setDescricao(descricao_transacao: string): void;
    setCidadeRecebedor(cidade_recebedor: string): void;
    setValor(valor: number): void;
    isTransacaoUnica(_is_transacao_unica: boolean): void;
    private _rightPad;
    private _normalizarTexto;
    getBRCode(): string;
}
