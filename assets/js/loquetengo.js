Datos.value = "requiereCertificadoSani;muestras;importada;tipoConsumo;tipoDeclaracion;pais;codigoEstablecimiento;codigoProducto;fechaElaboracion;fechaVencimiento;origenMercancia;region\n\
true;false;false;HUMANO;PECES DE CULTIVO;US;77777;23934;2020-06-10;2021-06-10;ACUICULTURA;10"

function CSVaXML(csvData) {
  var xml = `<?xml version="1.0"?>\n<Informacion>\n`;
  var csvData = csvData.value.split("\n").map((row) => row.trim());
  console.log(csvData);
  var headers = csvData[0].split(";");
  console.log(headers);
  for (var i = 1; i < csvData.length; i++) {
    console.log(csvData[i]);
    var values = csvData[i].split(";");
    xml += `\t<Columna${i}>\n`;
    console.log(xml)
    for (var j = 0; j < headers.length; j++) {
      xml += `\t\t<${headers[j]}>${values[j]}</${headers[j]}>
      `;
      console.log(xml)
    }
    xml += `\t</Columna${i}>\n`;
  }
  xml += `</Informacion>`;
  convXML.value = xml;
}

function subirCSV(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    Datos.value = reader.result;
  };
  reader.onerror = function () {
    alert("Error en la lectura del archivo.");
    return;
  };
  CSVaXML(Datos);
}












// // download button
// function download(filename, text) {
//   var element = document.createElement("a");
//   element.setAttribute(
//     "href",
//     "data:text/plain;charset=utf-8," + encodeURIComponent(text)
//   );
//   element.setAttribute("download", filename);

//   element.style.display = "none";
//   document.body.appendChild(element);

//   element.click();

//   document.body.removeChild(element);
// }

// // start file download.
// document.getElementById("dwn-btn").addEventListener(
//   "click",
//   function () {
//     // make a date string for output
//     var returnDate = dateString(new Date());
//     // generate download of hello.txt file with some content
//     var text = document.getElementById("convXML").value;
//     var filename = "CASPA_XML_Course_File_" + returnDate + ".decrypt";

//     download(filename, text);
//   },
//   false
// );










// var datenow = function(){
//   var date = new Date();
//   var string = sprintf("%04d-%02d-%02dT%02d:%02d:%02d",
//     date.getUTCFullYear(),
//     date.getUTCMonth()+1,
//     date.getUTCDate(),
//     date.getUTCHours(),
//     date.getUTCMinutes(),
//     date.getUTCSeconds()
//   );
//   return string;
// }




//--------  AYUDAS PROFUNDIDAD DE NODOS

// function runit(what) {
//   var options = { "global": [] };
//   options.tryToObject = true;
//   var rootname = document.getElementById('txtTopName').value || "root";
//   var rowname = document.getElementById('txtRowName').value || "row";
//   CSV.arHeaderRow = renameDups(CSV.arHeaderRow);
//   if (what == 1) {
//       document.getElementById('txta').value = csvToJSON(CSV, options);
//       var xml = ""; //'<?xml version="1.0" encoding="UTF-8" ?>\n';
//       try {
//           var obj = {};
//           obj = JSON.parse(document.getElementById('txta').value);
//           var saveobj = {};
//           if (!obj) { window.alert("Oops - tenemos un problema!"); return; }
//           if (!_.isArray(obj) && (_.keys(obj).length > 1 || (_.keys(obj).length == 1 && _.isArray(obj[_.keys(obj)[0]])))) {
//               saveobj[rootname] = obj; // object con múltiples propiedades o una propiedad de tipo array
//           }
//           else if (!_.isArray(obj) && _.keys(obj).length == 0) {
//               saveobj[rootname] = obj; // object vacio
//           }
//           else if (_.isArray(obj)) {
//               saveobj[rowname] = obj; // Si un array de objects hace esto
//           }
//           s = js2xmlparser(rootname, JSON.stringify(saveobj), {});
//           document.getElementById("txta").value = xml + pd.xml(s);
//       } 
//       catch (e) {
//           alert("Oh No... Tenemos un problema! " + (e.Description ? ":" + e.Description : ""));
//       }
//   }
//   saveCsv();
// }


// function detCsvDateFormat(CSV) {
//   var i, j, k;
//   var v;
//   var fmts = ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY/MM/DD", "MM/DD/YY", "DD/MM/YY", "MM-DD-YYYY", "DD-MM-YYYY", "YYYY-MM-DD", "MM-DD-YY", "DD-MM-YY", "MMM DD YYYY", "DD MMM YYYY", "DD MMM YY"];
//   var fmtc = [];
//   for (i = 0; i < fmts.length; i++) fmtc.push(0); // counts
//   CSV.dateformat = [];
//   for (k = 0; k < CSV.maxColumnsFound; k++) CSV.dateformat.push("");
//   for (k = 0; k < CSV.maxColumnsFound; k++) {
//       if (CSV.statsCnt[k] && CSV.statsCnt[k].fieldType === "D") {
//           //alert("detCsvDateFormat: checking date format at " + k);
//           for (j = 0; j < CSV.table.length; j++) { // for each row
//               v = CSV.table[j][k] || "";
//               for (i = 0; i < fmts.length; i++) {
//                   //alert("date=" + v + ",format=" + fmts[i]);
//                   if(moment(v,fmts[i],true).isValid()) fmtc[i]++;
//               }
//           }
//           //alert(JSON.stringify(fmtc));
//           // find index of largest count
//           var max = fmtc[0];
//           var maxIndex = 0;

//           for (i = 1; i < fmtc.length; i++) {
//               if (fmtc[i] > max) {
//                   maxIndex = i;
//                   max = fmtc[i];
//               }
//           }
//           if (max > 0) { // one of the formats matched
//               CSV.dateformat[k] = fmts[maxIndex];
//           }
//       } // date found
//   }
//   //alert(JSON.stringify(CSV.dateformat));
// }








// function renameDups(a) {
//   b = []; cnts = {}; n = a.length;
//   for (var i = 0; i < n; i++) { cnts[a[i]] = []; b.push(a[i]); }
//   for (var i = 0; i < n; i++) { cnts[a[i]].push(i); }
//   for (var key in cnts) {
//       nn = cnts[key].length;
//       if (nn > 1) {
//           for (j = 0; j < nn; j++) { b[cnts[key][j]] += '/' + j; }
//       }
//   }
//   return b;
// }
// function assignText(s) {
//   if ((document.getElementById('chkReplaceAccents')).checked) s = s.removeDiacritics();
//   document.getElementById('txt1').value = s;
//   parseAndOptions(CSV);
//   setupSortDD();
//   document.getElementById('btnRun').click();
// }
// function namesUpper(checked) {
//   if (checked) document.getElementById('chkHeaderLower').checked = false;
//   parseAndOptions(CSV);
//   document.getElementById('txtTopName').value = document.getElementById('txtTopName').value.toUpperCase();
//   document.getElementById('txtRowName').value = document.getElementById('txtRowName').value.toUpperCase();
// }
// function namesLower(checked) {
//   if (checked) document.getElementById('chkHeaderUpper').checked = false;
//   parseAndOptions(CSV);
//   document.getElementById('txtTopName').value = document.getElementById('txtTopName').value.toLowerCase();
//   document.getElementById('txtRowName').value = document.getElementById('txtRowName').value.toLowerCase();
// }
// function genTemplate(what, user1, user2, user3) {
//   var j = 0;
//   var s = "";
//   var overwrite = (document.getElementById("chkOverwrite")).checked;
//   if (!overwrite && (document.getElementById('txtTemplate')).value.trim() != "") return;

//   switch (what) {
//       case 1:
//           s = '<?xml version="1.0"?>{br}<' + user1 + '>{br}';
//           document.getElementById('txtHeader').value = s;
//           document.getElementById('txtFooter').value = '</' + user1 + '>';

//           s = '<' + user2 + '>\n';
//           for (j = 1; j <= CSV.arHeaderRow.length; j++) {
//               s += '  <{h' + j + '}>{f' + j + '}</{h' + j + '}>\n';
//           }
//           s += '</' + user2 + '>\n';
//           break;
//       case 2:
//           s = '<?xml version="1.0"?>{br}<' + user1 + '>{br}';
//           document.getElementById('txtHeader').value = s;
//           document.getElementById('txtFooter').value = '</' + user1 + '>';

//           s = '<' + user2;
//           for (j = 1; j <= CSV.arHeaderRow.length; j++) {
//               s += ' {h' + j + '}="{f' + j + '}"';
//           }
//           s += '></' + user2 + '>\n';
//           break;
//       default:
//           break;
//   }

//   document.getElementById('txtTemplate').value = s;
// }
// function runit(what) {
//   var template = "";
//   var options = { "global": [] };
//   options.forceWrap = true;
//   options.nullIsNull = true;
//   options.useFieldsData = false;
//   options.skipEmpty = document.getElementById("chkSkipEmpty").checked;
//   options.tryToObject = true;
//   options.mongoDbMode = false;

//   var template = "";
//   if (CSV.mySortNeeded) parseAndOptions(CSV);
//   var rootname = document.getElementById('txtTopName').value || "root";
//   var rowname = document.getElementById('txtRowName').value || "row";
//   CSV.arHeaderRow = renameDups(CSV.arHeaderRow);
//   if (what == 1) {
//       genTemplate(what, rootname, rowname);
//       document.getElementById('txta').value = csvToJSON(CSV, options);
//       //var x2js = new X2JS();
//       var xml = ""; //'<?xml version="1.0" encoding="UTF-8" ?>\n';
//       try {

//           var obj = {};
//           obj = JSON.parse(document.getElementById('txta').value);
//           var saveobj = {};
//           //alert(JSON.stringify(obj,null,2));
//           if (!obj) { window.alert("Oops - we have a problem!"); return; }
//           if (!_.isArray(obj) && (_.keys(obj).length > 1 || (_.keys(obj).length == 1 && _.isArray(obj[_.keys(obj)[0]])))) {
//               saveobj[rootname] = obj; // object with multiple properties or one property of type array
//           }
//           else if (!_.isArray(obj) && _.keys(obj).length == 0) {
//               saveobj[rootname] = obj; // empty object
//           }
//           else if (_.isArray(obj)) {
//               saveobj[rowname] = obj; // If an array of objects do this
//           }
//           //
//           s = js2xmlparser(rootname, JSON.stringify(saveobj), {});
//           //alert(s);
//           document.getElementById("txta").value = xml + pd.xml(s);
//       } catch (e) {
//           alert("Oh No... We have a problem! " + (e.Description ? ":" + e.Description : ""));
//       }

//       //csvToXml(CSV,document.getElementById('txtTopName').value,document.getElementById('txtRowName').value);
//   }
//   else if (what == 2) {
//       genTemplate(what, document.getElementById('txtTopName').value, document.getElementById('txtRowName').value);
//       document.getElementById('txta').value = csvToXmlProperties(CSV, document.getElementById('txtTopName').value, document.getElementById('txtRowName').value, options)
//   }
//   else {
//       (document.getElementById("chkOverwrite")).checked = false;
//       template = document.getElementById('txtTemplate').value;
//       options.global.push("toXml()");
//       document.getElementById('txta').value = csvFromTem(CSV, document.getElementById('txtHeader').value, template, "", document.getElementById('txtFooter').value, "", options);

//   };
//   saveCsv();
// }
// function reprocessCsv() {
//   parseAndOptions(CSV);
//   setupSortDD();
// }
// function runExample(what) {
//   if (document.getElementById("defaultTabLink")) document.getElementById("defaultTabLink").click();
//   clearAll();
//   document.getElementById('chkHeader').checked = true;
//   switch (what) {
//       case 2: assignText(getExampleCsvJson());
//           break;
//       default: assignText(getExampleCsv());
//           break;
//   }

//   if (document.getElementById("btnColsReset")) document.getElementById("btnColsReset").click();
// }