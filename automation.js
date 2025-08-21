var formserv =  FormApp.openById('Id do formulario'); //substitua pelo ID do seu formulário
var servdb = SpreadsheetApp.openById('id da planilha').getSheetByName('MOTORISTAS'); // substitua pelo nome da sua planilha
var servdbcar = SpreadsheetApp.openById('id da planilha').getSheetByName('PLACAS'); // substitua pelo nome da sua planilha
var servresp = SpreadsheetApp.openById('id da planilha').getSheetByName('RESPOSTAS'); // substitua pelo nome da sua planilha
var lastRow = servdb.getLastRow();
var lastRowcar = servdbcar.getLastRow();
var motoristas = servdb.getRange("A2:A"+lastRow).getValues();
var placas = servdbcar.getRange("A2:A"+lastRowcar).getValues();

var lastRowresp = servresp.getLastRow();

var nresp = servresp.getRange(`B${lastRowresp}`).getValues();
var tserv = servresp.getRange(`D${lastRowresp}`).getValues();
var favor = servresp.getRange(`E${lastRowresp}`).getValues();
var cpf = servresp.getRange(`P${lastRowresp}`).getValues();
var banco = servresp.getRange(`F${lastRowresp}`).getValues();
var ag= servresp.getRange(`G${lastRowresp}`).getValues();
var ct = servresp.getRange(`H${lastRowresp}`).getValues();
var pix = servresp.getRange(`I${lastRowresp}`).getValues();
var valor = servresp.getRange(`J${lastRowresp}`).getValues();
var mot = servresp.getRange(`O${lastRowresp}`).getValues();
var obs = servresp.getRange(`K${lastRowresp}`).getValues();
var img = servresp.getRange(`L${lastRowresp}`).getValues();
var placa = servresp.getRange(`N${lastRowresp}`).getValues();
var dpt = servresp.getRange(`C${lastRowresp}`).getValues();
var envioC = servresp.getRange(`M${lastRowresp}`).getValues();

var assuntoemail  = `${tserv} / ${mot} - ${placa} - ${favor};`
var valort = valor && !isNaN(valor) ? parseFloat(valor).toFixed(2) : "0.00";


// corpo do e-mail
var body = `
Ao senhor responsável, 

Solicito o pagamento de ${tserv}.

Dados bancários do favorecido:
NOME: ${favor}
BANCO: ${banco}
AGÊNCIA : ${ag}
CONTA: ${ct}
CHAVE PIX: ${pix}
CPF/CNPJ: ${cpf}

VALOR: R$ ${valort} 

MOTORISTA: ${mot}
PLACA: ${placa}

Obs: ${obs}

_
${img}
_

Respeitosamente, 

${nresp}
${dpt}
AV. DAS NAÇÕES QD 301 LOTE 01,
BRASILIA-DF / CEP 00000-000
EMPRESA S/A
CNPJ: 00.000.000/0001-00
Telefone: (61) 0000-0000
`;


// Função mostrar lista de motoristas 
function getDriver()
{
var item = formserv.addListItem();
item.setTitle('Motorista')
item.setChoiceValues(motoristas);
Logger.log(item.getId());
}


// Função mostrar lista de Placas 
function getPlaca()
{
var item = formserv.addListItem();
item.setTitle('Placa')
item.setChoiceValues(placas);
Logger.log(item.getId());
}

// Atualização de listas 
function updateDriver()
{
  formserv.getItemById("id do formulario").asListItem().setChoiceValues(motoristas);
}
function updatePlacas()
{
  formserv.getItemById("id do formulario").asListItem().setChoiceValues(placas);
}

var nm = `${nresp} - ${dpt} solicitação para pagamento de ${tserv}`;

// FUNÇÃO PARA ENVIAR E-MAIL	
function email() {
  var destino = `exemplo@email.com,${envioC}`;
  var assunto = assuntoemail;
  var mensagem = body;
  var nome = nm;
  MailApp.sendEmail(destino, assunto,mensagem,{
    name: nome,
});
 }	