# form-to-email-automation
Automação com Google Apps Script que integra Google Forms, Sheets e Gmail para gerar e enviar solicitações de pagamento automaticamente.

# 🚛 Google Apps Script - Automação de solicitação de pagamentos 

Este projeto é um **script em Google Apps Script** desenvolvido para automatizar o processo de solicitação de pagamentos a vista em uma transportadora.  

Ele integra **Google Forms**, **Google Sheets** e **Gmail** para reduzir tarefas manuais e agilizar o fluxo administrativo.

---

📌 Funcionalidades

- 📋 **Integração com Google Forms**  
  Preenche automaticamente as listas de **motoristas** e **placas** com base nos dados da planilha.

- 📊 **Integração com Google Sheets**  
  Lê os dados das planilhas (motoristas, placas e respostas do formulário).

- ✉️ **Envio Automático de E-mails**  
  Gera e envia e-mails formatados para os responsáveis com todos os dados necessários para pagamento.

- 🔄 **Atualização Dinâmica**  
  Sempre que motoristas ou placas são adicionados, o formulário é atualizado automaticamente.

---

🛠️ Tecnologias Utilizadas

- **Google Apps Script (JavaScript)**
- **Google Forms**
- **Google Sheets**
- **Gmail (MailApp)**

---

🔄 Fluxo de Funcionamento

    A --> [Usuário preenche o Formulário] --> B[Respostas salvas no Google Sheets];
    B --> C[Script coleta os dados];
    C --> D[Script monta corpo do e-mail];
    D --> E[Script envia e-mail automático aos responsáveis];


📋 Exemplo de E-mail Gerado

------------------------------------------------

Assunto: Pagamento / João Silva - ABC1234 - Transporte XYZ

Ao senhor responsável,

Solicito o pagamento de Transporte XYZ.

Dados bancários do favorecido:
NOME: João Silva
BANCO: Banco X
AGÊNCIA: 1234
CONTA: 56789
CHAVE PIX: joao@pix.com
CPF/CNPJ: 000.000.000-00

VALOR: R$ 1.250,00

MOTORISTA: João Silva
PLACA: ABC1234

Obs: Entrega realizada conforme programação.

SOlicitante
Departamento

AV. DAS NAÇÕES QD 301 LOTE 01,
BRASILIA-DF / CEP 00000-000
EMPRESA S/A
CNPJ: 00.000.000/0001-00
Telefone: (61) 0000-0000

------------------------------------------------



👤 Autor
Alessandro Santos

💼 LinkedIn 
linkedin.com/in/alessandro-leite-219bb71b9

💻 GitHub
https://github.com/alessandroleitte