**Form to Email Automation**

Automação de Solicitação de Pagamentos com Google Apps Script

Projeto desenvolvido para automatizar o processo de solicitação de pagamentos à vista em uma transportadora, reduzindo tarefas manuais, erros operacionais e tempo de processamento no setor administrativo.

A solução integra Google Forms, Google Sheets e Gmail, gerando e enviando automaticamente solicitações de pagamento padronizadas e completas.

**Problema Resolvido**

Antes da automação:

Preenchimento manual de e-mails

Risco de erro em dados bancários

Retrabalho administrativo

Demora na liberação de pagamentos

Depois da automação:

✅ Processo padronizado

✅ Redução de erros humanos

✅ Ganho de tempo operacional

✅ Comunicação clara e rastreável

**Funcionalidades**
Integração com Google Forms

Preenchimento automático das listas de motoristas e placas a partir das planilhas.

Atualização dinâmica sempre que novos dados são adicionados.

Integração com Google Sheets

Leitura de múltiplas abas:

Motoristas

Placas

Respostas do formulário

Extração automática da última solicitação registrada.

Envio Automático de E-mails

Geração dinâmica do assunto e corpo do e-mail.

Inclusão de:

Dados bancários

Valor

Motorista

Placa

Observações

Envio automático via Gmail (MailApp).

Atualização Dinâmica

Funções específicas para atualizar listas do formulário sem intervenção manual.

**Tecnologias Utilizadas**

Google Apps Script (JavaScript)

Google Forms

Google Sheets

Gmail API (MailApp)

🔄 Fluxo de Funcionamento
Usuário preenche o formulário
        ↓
Respostas salvas no Google Sheets
        ↓
Script coleta os dados
        ↓
Script monta o corpo do e-mail
        ↓
E-mail é enviado automaticamente aos responsáveis

📧 Exemplo de E-mail Gerado

Assunto:
Pagamento / João Silva - ABC1234 - Transporte XYZ

Corpo:

Ao senhor responsável,

Solicito o pagamento de Transporte XYZ.

Dados bancários do favorecido:
Nome: João Silva
Banco: Banco X
Agência: 1234
Conta: 56789
Chave Pix: joao@pix.com
CPF/CNPJ: 000.000.000-00

Valor: R$ 1.250,00

Motorista: João Silva
Placa: ABC1234

Obs: Entrega realizada conforme programação.

Departamento Solicitante
Empresa S/A

**Caso Real de Uso**

Este projeto está em uso real em uma transportadora, apoiando o setor administrativo e financeiro no controle e solicitação de pagamentos à vista para motoristas e prestadores de serviço.

👤 Autor

Alessandro Santos
Desenvolvedor Front-end | Analista de Sistemas
MBA Executivo em Gestão Empresarial

🔗 LinkedIn: https://www.linkedin.com/in/alessandro-leite-219bb71b9/

💻 GitHub: https://github.com/alessandroleitte
