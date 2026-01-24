/**
 * Projeto: Automação de Solicitação de Pagamentos
 * Stack: Google Apps Script + Google Forms + Google Sheets
 * Objetivo: Enviar e-mails HTML profissionais a partir de respostas de formulário
 */

// === ABERTURA DE FORMULÁRIO E PLANILHAS ===

// ID do Google Form (substituído por segurança)
const formserv = FormApp.openById('FORM_ID_AQUI');

// ID da planilha principal (substituído por segurança)
const spreadsheet = SpreadsheetApp.openById('SPREADSHEET_ID_AQUI');

const servdb     = spreadsheet.getSheetByName('MOTORISTAS');
const servdbcar  = spreadsheet.getSheetByName('PLACAS');
const servresp   = spreadsheet.getSheetByName('Respostas');

// === DADOS PARA LISTAS DINÂMICAS ===

let lastRow    = servdb.getLastRow();
let lastRowCar = servdbcar.getLastRow();

let motoristas = servdb.getRange(`A2:A${lastRow}`).getValues().flat();
let placas     = servdbcar.getRange(`A2:A${lastRowCar}`).getValues().flat();

// === ÚLTIMA RESPOSTA DO FORMULÁRIO ===

let lastRowResp = servresp.getLastRow();

let solicitante = servresp.getRange(`B${lastRowResp}`).getValue();
let tipoServico = servresp.getRange(`D${lastRowResp}`).getValue();
let favorecido  = servresp.getRange(`E${lastRowResp}`).getValue();
let documento   = servresp.getRange(`P${lastRowResp}`).getValue();
let banco       = servresp.getRange(`F${lastRowResp}`).getValue();
let agencia     = servresp.getRange(`G${lastRowResp}`).getValue();
let conta       = servresp.getRange(`H${lastRowResp}`).getValue();
let pix         = servresp.getRange(`I${lastRowResp}`).getValue();
let valor       = servresp.getRange(`J${lastRowResp}`).getValue();
let motorista   = servresp.getRange(`O${lastRowResp}`).getValue();
let observacao  = servresp.getRange(`K${lastRowResp}`).getValue();
let comprovante = servresp.getRange(`L${lastRowResp}`).getValue();
let placa       = servresp.getRange(`N${lastRowResp}`).getValue();
let departamento= servresp.getRange(`C${lastRowResp}`).getValue();
let copiaEmail  = servresp.getRange(`M${lastRowResp}`).getValue();

// === FORMATAÇÃO DE VALOR ===

let valorFormatado = valor.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

// === ASSUNTO DO E-MAIL ===

let assuntoEmail = `Solicitação de Pagamento | ${tipoServico}`;

// === CORPO DO E-MAIL (HTML INLINE) ===

let body = `
<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2f2f2f;line-height:1.6;max-width:640px;margin:auto;padding:20px;">

  <h2 style="color:#1f2937;">Solicitação de Pagamento</h2>
  <p style="color:#4b5563;">Referente a serviço prestado</p>

  <p>Prezados,<br><br>
  Solicito o pagamento conforme informações abaixo:</p>

  <div style="margin:20px 0;padding:14px;background:#f9fafb;border-left:4px solid #2563eb;">
    <p><strong>Serviço:</strong> ${tipoServico}</p>
    <p><strong>Valor:</strong> ${valorFormatado}</p>
    <p><strong>Placa:</strong> ${placa}</p>
  </div>

  <h3>Dados do Favorecido</h3>
  <p>
    <strong>Nome:</strong> ${favorecido}<br>
    <strong>Documento:</strong> ${documento}<br>
    <strong>Banco:</strong> ${banco}<br>
    <strong>Agência:</strong> ${agencia}<br>
    <strong>Conta:</strong> ${conta}<br>
    <strong>PIX:</strong> ${pix}
  </p>

  <h3>Dados Operacionais</h3>
  <p>
    <strong>Motorista:</strong> ${motorista}<br>
    <strong>Placa:</strong> ${placa}
  </p>

  <p><strong>Observações:</strong><br>${observacao || '-'}</p>

  <p>
    <strong>Comprovante:</strong><br>
    <a href="${comprovante}" target="_blank">Visualizar</a>
  </p>

  <hr style="margin:30px 0;border:0;border-top:1px solid #e5e7eb;">

  <p>
    Atenciosamente,<br><br>
    <strong>${solicitante}</strong><br>
    ${departamento}
  </p>

  <p style="font-size:12px;color:#6b7280;">
    Empresa Exemplo S/A<br>
    Documento institucional omitido por segurança
  </p>

</div>
`;

// === ENVIO DE E-MAIL ===

function enviarEmail() {
  MailApp.sendEmail({
    to: 'financeiro@empresaexemplo.com',
    cc: copiaEmail,
    subject: assuntoEmail,
    htmlBody: body,
    name: `${solicitante} | ${departamento}`
  });
}
