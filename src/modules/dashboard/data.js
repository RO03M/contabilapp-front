import BookIcon from '@mui/icons-material/Book';
import CreateIcon from '@mui/icons-material/Create';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsIcon from '@mui/icons-material/Settings';

export const pages = [
    {
        label: "Cadastros",
        items: [
            { label: "Clientes", link: "/clients" },
            { label: "Contas L. Caixa" },
            { label: "Históricos" },
            { label: "Registro Saldos" },
        ],
        icon: <BookIcon/>
    },
    {
        label: "Lançamentos",
        items: [
            { label: "Dig. Dados da Ficha" },
            { label: "Livro Caixa" }
        ],
        icon: <CreateIcon/>
    },
    {
        label: "Relatórios",
        items: [
            { label: "Ficha de Movimento" },
            { label: "Relatório de Vendas" },
            { label: "Livro Caixa" },
            { label: "Apurações Tributos" },
            { label: "Fechamento Anual" },
        ],
        icon: <AccountTreeIcon/>
    },
    {
        label: "Utilitários",
        items: [
            { label: "Configurações" },
            { label: "Reorganizar" },
            { label: "Reorganizar Movimento" },
            { label: "Trf. Anual de Saldos" },
        ],
        icon: <SettingsIcon/>
    },
];

export const DRAWER_WIDTH = 12;
export const CLOSED_DRAWER_WIDTH = 3.5;