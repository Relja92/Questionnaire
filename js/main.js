$('document').ready(function(){
    
                  $.ajax({    
                  type: "GET",
                  dataType: "json",
                  url: 'pitanja.json',
                  success: function (data) {
                    // console.log(data);
                      
                      $.each(data, function(key, value) {
                            console.log(value.id);
                            var klasa=value.id;
                            var brojPitanja=klasa+1
                            brojSvihPitanja=data.length;
                          $('.velikiDiv').append('<div class="pitanje"><p>'+brojPitanja+ '.'+value.tekst+' </p><form><input class="pitanje'+klasa+'" type="radio" name="No1" value="1">Uopste se ne slazem <br><input class="pitanje'+klasa+'" type="radio" name="No1" value="2">Uglavnom se ne slazem<br><input class="pitanje'+klasa+'" type="radio" name="No1" value="3">Nisam siguran<br><input class="pitanje'+klasa+'" type="radio" name="No1" value="4">Uglavnom se slazem<br><input class="pitanje'+klasa+'" type="radio" name="No1" value="5">Potpuno se slazem   </form></div>');
                      });
                  }
                
              });
    
});


$('#submit').click(function(){
    console.log(brojSvihPitanja);
    anksioznost=0;
    depresivnost=0;
    negativniAfekt=0;
    srdacnost=0;
    pozitivniAfekt=0;
    drustvenost=0;
    samodisciplina=0;
    istrajnost=0;
    promisljenost=0;
    bes=0;
    nepopustljivost=0;
    teskaNarav=0;
    intelekt=0;
    trazenjeNovina=0;
    manipulativnost=0;
    negativnaSlika=0;
    superiornost=0;
    pozitivnaSlika=0;
    var provera=true;
    var myObj='[';
    
    for(i=0;i<brojSvihPitanja;i++){
        
        var text='pitanje'+i;
        var odgovor =$('.'+text+':radio:checked').val();
        if(typeof odgovor==='undefined'){
            provera=false;
        }
    }
    
    
    if(provera){
    for(i=0;i<brojSvihPitanja;i++){
        var iPlusJedan=i+1;
        var text='pitanje'+i;
        var odgovor =$('.'+text+':radio:checked').val();
        var pitanje= "Pitanje broj "+iPlusJedan;
//        console.log('Pitanje broj'+i);
//        console.log(odgovor);
        var myObj=myObj+'{ "pitanje":\"'+pitanje+'\" , "odgovor":'+odgovor+' },';
        
        odgovor=parseInt(odgovor);

            switch(i) {
                case 0:
                case 5:
                case 23:
                case 44:
                case 66:
                case 87:
                case 109:
                case 130:
                case 141:
                case 157:
                case 160:
                case 166:
                case 175:
                    anksioznost=anksioznost+odgovor;
                break;
                    
                case 7:
                case 13:
                case 30:
                case 52:
                case 73:
                case 95:
                case 116:
                case 137:
                case 145:
                case 178:
                    depresivnost=depresivnost+odgovor;
                break;
                    
                case 16:
                case 37:
                case 59:
                case 80:
                case 91:
                case 102:
                case 123:
                case 151:
                case 163:
                case 169:
                case 172:
                case 181:
                    negativniAfekt=negativniAfekt+odgovor;
                break;
                    
                case 3:
                case 27:
                case 47:
                case 69:
                case 92:
                case 112:
                case 133:
                case 161:
                    srdacnost=srdacnost+odgovor;
                break;
                    
                case 11:
                case 34:
                case 55:
                case 76:
                case 98:
                case 119:
                case 140:
                case 148:
                    pozitivniAfekt=pozitivniAfekt+odgovor;
                break;
                    
                case 20:
                case 62:
                case 83:
                case 105:
                case 154:
                case 167:
                    drustvenost=drustvenost+odgovor;
                break;
                    
                case 40:
                case 126:
                    drustvenost=drustvenost+6-odgovor;
                break;
                    
                case 110:
                case 158:
                    samodisciplina=samodisciplina+odgovor;
                break;
                   
                case 1:
                case 24:
                case 45:
                case 67:
                case 88:
                case 131:
                    samodisciplina=samodisciplina+6-odgovor;
                break;
                    
                case 9:
                case 31:
                case 53:
                case 74:
                case 96:
                case 117:
                case 138:
                case 146:
                case 164:
                case 170:
                case 179:
                    istrajnost=istrajnost+odgovor;
                break;
                    
                case 17:
                case 38:
                case 60:
                case 81:
                case 103:
                case 124:
                case 152:
                case 176:
                case 182:
                    promisljenost=promisljenost+odgovor;
                break;
                    
                case 2:
                case 25:
                case 46:
                case 68:
                case 89:
                case 111:
                case 132:
                case 159:
                case 174:
                    bes=bes+odgovor;
                break;
                    
                case 180:
                    nepopustljivost=nepopustljivost+odgovor;
                break;
                    
                case 10:
                case 32:
                case 54:
                case 75:
                case 97:
                case 118:
                case 139:
                case 147:
                case 165:
                case 177:
                    nepopustljivost=nepopustljivost+6-odgovor;
                break;
                    
                case 18:
                case 39:
                case 51:
                case 61:
                case 82:
                case 104:
                case 125:
                case 153:
                case 171:
                case 183:
                    teskaNarav=teskaNarav+odgovor;
                break;
                    
                case 4:
                case 21:
                case 28:
                case 42:
                case 49:
                case 64:
                case 78:
                case 85:
                case 94:
                case 100:
                case 114:
                case 128:
                case 143:
                    intelekt=intelekt+odgovor;
                break;
                    
                case 12:
                case 35:
                case 57:
                case 71:
                case 121:
                case 135:
                    trazenjeNovina=trazenjeNovina+odgovor;
                break;
                    
                case 107:
                    trazenjeNovina=trazenjeNovina+6-odgovor;
                break;
                    
                case 6:
                case 19:
                case 41:
                case 48:
                case 63:
                case 84:
                case 99:
                case 113:
                case 120:
                case 127:
                case 142:
                case 155:
                    manipulativnost=manipulativnost+odgovor;
                break;
                
                case 14:
                case 26:
                case 33:
                case 70:
                case 77:
                case 106:
                case 134:
                    negativnaSlika=negativnaSlika+odgovor;
                break;
                
                case 56:
                case 93:
                case 149:
                    negativnaSlika=negativnaSlika+6-odgovor;
                break;
                    
                case 15:
                case 22:
                case 36:
                case 43:
                case 50:
                case 79:
                case 90:
                case 108:
                case 144:
                case 168:
                case 173:
                    superiornost=superiornost+odgovor;
                break;
                    
                case 8:
                case 65:
                case 122:
                    superiornost=superiornost+6-odgovor;
                break;
                    
                case 29:
                case 58:
                case 72:
                case 86:
                case 101:
                case 115:
                case 129:
                case 136:
                case 150:
                case 156:
                case 162:
                    pozitivnaSlika=pozitivnaSlika+odgovor;
                break;
                    
                default:
            }
        
    }
        var prva3=anksioznost+depresivnost+negativniAfekt;
        var druga3=srdacnost+pozitivniAfekt+drustvenost;
        var treca3=samodisciplina+istrajnost+promisljenost;
        var intelektTrazenjeNovina = intelekt+trazenjeNovina;
        var manipulativnostNegativnaSlika = manipulativnost+negativnaSlika;
        var superiornostPozitivnaSlika = superiornost+pozitivnaSlika;
        var besNepopusTesNarav = bes+nepopustljivost+teskaNarav;
        
        var myObj=myObj+'{ "pitanje":"Anksioznost" , "odgovor":'+anksioznost+' },';
        var myObj=myObj+'{ "pitanje":"Depresivnost" , "odgovor":'+depresivnost+' },';
        var myObj=myObj+'{ "pitanje":"Negativni Afekt" , "odgovor":'+negativniAfekt+' },';
        var myObj=myObj+'{ "pitanje":"Srdacnost" , "odgovor":'+srdacnost+' },';
        var myObj=myObj+'{ "pitanje":"Pozitivni Afekt" , "odgovor":'+pozitivniAfekt+' },';
        var myObj=myObj+'{ "pitanje":"Drustvenost" , "odgovor":'+drustvenost+' },';
        var myObj=myObj+'{ "pitanje":"Samodisciplina" , "odgovor":'+samodisciplina+' },';
        var myObj=myObj+'{ "pitanje":" Istrajnost" , "odgovor":'+istrajnost+' },';
        var myObj=myObj+'{ "pitanje":"Promisljenost" , "odgovor":'+promisljenost+' },';
        var myObj=myObj+'{ "pitanje":"Bes " , "odgovor":'+bes+' },';
        var myObj=myObj+'{ "pitanje":"Nepopustljivost" , "odgovor":'+nepopustljivost+' },';
        var myObj=myObj+'{ "pitanje":"Teska narav " , "odgovor":'+teskaNarav+' },';
        var myObj=myObj+'{ "pitanje":"Intelekt " , "odgovor":'+intelekt+' },';
        var myObj=myObj+'{ "pitanje":"Trazenje Novina " , "odgovor":'+trazenjeNovina+' },';
        var myObj=myObj+'{ "pitanje":"Manipulativnost " , "odgovor":'+manipulativnost+' },';
        var myObj=myObj+'{ "pitanje":"Negativna slika o sebi " , "odgovor":'+negativnaSlika+' },';
        var myObj=myObj+'{ "pitanje":"Superiornost " , "odgovor":'+superiornost+' },';
        var myObj=myObj+'{ "pitanje":"Pozitivna slika o sebi " , "odgovor":'+pozitivnaSlika+' },';
        var myObj=myObj+'{ "pitanje":"Prve 3 " , "odgovor":'+prva3+' },';
        var myObj=myObj+'{ "pitanje":"Druge 3 " , "odgovor":'+druga3+' },';
        var myObj=myObj+'{ "pitanje":"Trece 3 " , "odgovor":'+treca3+' },';
        var myObj=myObj+'{ "pitanje":"Intelekt i trazenje novina " , "odgovor":'+intelektTrazenjeNovina+' },';
        var myObj=myObj+'{ "pitanje":"Manipulativnost i negativna slika o sebi " , "odgovor":'+manipulativnostNegativnaSlika+' },';
        var myObj=myObj+'{ "pitanje":"Superiornost i pozitivna slika o sebi " , "odgovor":'+superiornostPozitivnaSlika+' },';
        var myObj=myObj+'{ "pitanje":"Bes, nepopustljivost i teska narav " , "odgovor":'+besNepopusTesNarav+' },';
        
        var duzina= myObj.length;
        console.log(duzina);
        var myObj= myObj.substr(0,duzina-1);
        var myObj=myObj+']';
//        console.log('json fajl je ');
//        console.log(text2);
        
        var fullName= $('#fullName').val();
        
         JSONToCSVConvertor(myObj, fullName, true);
        
//        var obj = JSON.parse(text2);
//        console.log(obj);
        console.log('Average prve grupe pitanja je'+ prvagrupa/3);
        console.log('Average druge grupe pitanja je'+drugagrupa/2);
        
    }
    else{
        alert('Molimo vas popunite sva polja');
    }
    
});




function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';    
    //Set Report title in first row or line
    
    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = "Izvestaj_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



