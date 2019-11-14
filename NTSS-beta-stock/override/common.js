/**
 * 
 */
function barCode(seriorNo){
	var zf = seriorNo;
	var html = "";
	var code1 = '<div style="background-color: #ffffff; width: 1px; float: left; height: 32px; font-size: 0px;"></div>';
	var code2 = '<div style="border-left: #000000 1px solid; width: 0px; float: left; height: 32px; font-size: 0px;"></div>';
	zf = zf.replace("0","_|_|__||_||_|");
 	zf = zf.replace("1","_||_|__|_|_||");
 	zf = zf.replace("2","_|_||__|_|_||");
 	zf = zf.replace("3","_||_||__|_|_|");
	zf = zf.replace("4","_|_|__||_|_||");
	zf = zf.replace("5","_||_|__||_|_|");
	zf = zf.replace("7","_|_|__|_||_||");
	zf = zf.replace("6","_|_||__||_|_|");
	zf = zf.replace("8","_||_|__|_||_|");
	zf = zf.replace("9","_|_||__|_||_|");
	zf = zf.replace("A","_||_|_|__|_||");
	zf = zf.replace("B","_|_||_|__|_||");
	zf = zf.replace("C","_||_||_|__|_|");
	zf = zf.replace("D","_|_|_||__|_||");
	zf = zf.replace("E","_||_|_||__|_|");
	zf = zf.replace("F","_|_||_||__|_|");
	zf = zf.replace("G","_|_|_|__||_||");
	zf = zf.replace("H","_||_|_|__||_|");
	zf = zf.replace("I","_|_||_|__||_|");
	zf = zf.replace("J","_|_|_||__||_|");
	zf = zf.replace("K","_||_|_|_|__||");
	zf = zf.replace("L","_|_||_|_|__||");
	zf = zf.replace("M","_||_||_|_|__|");
	zf = zf.replace("N","_|_|_||_|__||");
	zf = zf.replace("O","_||_|_||_|__|");
	zf = zf.replace("P","_|_||_||_|__|");
	zf = zf.replace("Q","_||_|_|_||__|");
	zf = zf.replace("R","_|_|_|_||__||");
	zf = zf.replace("S","_|_||_|_||__|");
	zf = zf.replace("T","_|_|_||_||__|");
	zf = zf.replace("U","_||__|_|_|_||");
	zf = zf.replace("V","_|__||_|_|_||");
	zf = zf.replace("W","_||__||_|_|_|");
	zf = zf.replace("X","_|__|_||_|_||");
	zf = zf.replace("Y","_||__|_||_|_|");
	zf = zf.replace("Z","_|__||_||_|_|");
	for(var i=0;i<zf.length;i++){
		if(zf.substring(i,i+1)=="_"){
			html=html+code1;
		}else if(zf.substring(i,i+1)=="|"){
			html=html+code2;
		}else{
			continue;
		}
	}
	return html;
}

/**
 * 转数字大写
 */
function convertCurrency(currencyDigits) {
	// Constants:
	 var MAXIMUM_NUMBER = 99999999999.99;
	 // Predefine the radix characters and currency symbols for output:
	 var CN_ZERO = "零";
	 var CN_ONE = "壹";
	 var CN_TWO = "贰";
	 var CN_THREE = "叁";
	 var CN_FOUR = "肆";
	 var CN_FIVE = "伍";
	 var CN_SIX = "陆";
	 var CN_SEVEN = "柒";
	 var CN_EIGHT = "捌";
	 var CN_NINE = "玖";
	 var CN_TEN = "拾";
	 var CN_HUNDRED = "佰";
	 var CN_THOUSAND = "仟";
	 var CN_TEN_THOUSAND = "万";
	 var CN_HUNDRED_MILLION = "亿";
	 var CN_SYMBOL = "";
	 var CN_DOLLAR = "元";
	 var CN_TEN_CENT = "角";
	 var CN_CENT = "分";
	 var CN_INTEGER = "整";
	 
	// Variables:
	 var integral; // Represent integral part of digit number.
	 var decimal; // Represent decimal part of digit number.
	 var outputCharacters; // The output result.
	 var parts;
	 var digits, radices, bigRadices, decimals;
	 var zeroCount;
	 var i, p, d;
	 var quotient, modulus;
	 
	 // Validate input string:
	 currencyDigits = currencyDigits.toString();
	 if (currencyDigits == "") {
		 alert("Empty input!");
		 return "";
	 }
	 if (currencyDigits.match(/[^,.\d]/) != null) {
		 alert("Invalid characters in the input string!");
		 return "";
	 }
	 if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
		 alert("Illegal format of digit number!");
		 return "";
	 }
	 
	 // Normalize the format of input digits:
	 currencyDigits = currencyDigits.replace(/,/g, ""); // Remove comma delimiters.
	 currencyDigits = currencyDigits.replace(/^0+/, ""); // Trim zeros at the beginning.
	 // Assert the number is not greater than the maximum number.
	 if (Number(currencyDigits) > MAXIMUM_NUMBER) {
		 alert("Too large a number to convert!");
		 return "";
	 }
	 
	 // Process the coversion from currency digits to characters:
	 // Separate integral and decimal parts before processing coversion:
	 parts = currencyDigits.split(".");
	 if (parts.length > 1) {
		 integral = parts[0];
		 decimal = parts[1];
	  // Cut down redundant decimal digits that are after the second.
	  decimal = decimal.substr(0, 2);
	 }
	 else {
	  integral = parts[0];
	  decimal = "";
	 }
	 // Prepare the characters corresponding to the digits:
	 digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
	 radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
	 bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
	 decimals = new Array(CN_TEN_CENT, CN_CENT);
	 // Start processing:
	 outputCharacters = "";
	 // Process integral part if it is larger than 0:
	 if (Number(integral) > 0) {
	  zeroCount = 0;
	  for (i = 0; i < integral.length; i++) {
	   p = integral.length - i - 1;
	   d = integral.substr(i, 1);
	   quotient = p / 4;
	   modulus = p % 4;
	   if (d == "0") {
	    zeroCount++;
	   }
	   else {
	    if (zeroCount > 0)
	    {
	     outputCharacters += digits[0];
	    }
	    zeroCount = 0;
	    outputCharacters += digits[Number(d)] + radices[modulus];
	   }
	   if (modulus == 0 && zeroCount < 4) {
	    outputCharacters += bigRadices[quotient];
	   }
	  }
	  outputCharacters += CN_DOLLAR;
	 }
	 // Process decimal part if there is:
	 if (decimal != "") {
	  for (i = 0; i < decimal.length; i++) {
	   d = decimal.substr(i, 1);
	   if (d != "0") {
	    outputCharacters += digits[Number(d)] + decimals[i];
	   }
	  }
	 }
	 // Confirm and return the final output string:
	 if (outputCharacters == "") {
	  outputCharacters = CN_ZERO + CN_DOLLAR;
	 }
	 if (decimal == "") {
	  outputCharacters += CN_INTEGER;
	 }
	 outputCharacters = CN_SYMBOL + outputCharacters;
	 return outputCharacters;
}
/**
 * 转2位小数
 */
function changeTwoDecimal(x){
	if(x==0){
		return "0.00";
	}
	var f_x = parseFloat(x);
	
	if (isNaN(f_x)){
		return "";
	}
	f_x = Math.round(f_x*100)/100;
	var s_x = f_x.toString();
	var pos_decimal = s_x.indexOf('.');
	if (pos_decimal < 0){
		pos_decimal = s_x.length;
		s_x += '.';
	}
	while (s_x.length <= pos_decimal + 2){
		s_x += '0';
	}
	return changeCurrency(s_x);
}

/**
 * 设置千分位
 */
function changeCurrency(x){
	var pointBack = x.split(".")[1];
	var pointFront = x.split(".")[0];
	var current = "";
	if(pointFront.length<=3){
		return x;
	}else{
		var j=1;
		for(var i=pointFront.length-1;i>=0;i--,j++){
			if(j%3==0){
				current = ","+pointFront.charAt(i)+current;
			}else{
				current = pointFront.charAt(i)+current;
			}
		}
		if(pointFront.length%3==0){
			current = current.substring(1,current.length-1);
		}
		return current+"."+pointBack;
	}
}

/**
 * 解决低版本浏览器placeholder无法使用
 */
function placeholder(){
	if(!('placeholder' in document.createElement('input'))){
		 $('input[placeholder],textarea[placeholder]').each(function(){
			 var that = $(this); 
			 var text= that.attr('placeholder');
			 if(that.val()===""){    
				 that.val(text).addClass('placeholder');    
			 }
			 that.focus(function(){    
				 if(that.val()===text){    
					 that.val("").removeClass('placeholder');    
				 }    
			 }).blur(function(){    
				 if(that.val()===""){    
					 that.val(text).addClass('placeholder');    
				 }    
			 }).closest('form').submit(function(){    
				 if(that.val() === text){    
					 that.val('');    
				 }    
			 }); 
		 });
	}
}


function HashMap()
{
     /** Map 大小 **/
     var size = 0;
     /** 对象 **/
     var entry = new Object();
      
     /** 存 **/
     this.put = function (key , value)
     {
         if(!this.containsKey(key))
         {
             size ++ ;
         }
         entry[key] = value;
     };
      
     /** 取 **/
     this.get = function (key)
     {
         if( this.containsKey(key) )
         {
             return entry[key];
         }
         else
         {
             return null;
         }
     };
      
     /** 删除 **/
     this.remove = function ( key )
     {
         if( delete entry[key] )
         {
             size --;
         }
     };
      
     /** 是否包含 Key **/
     this.containsKey = function ( key )
     {
         return (key in entry);
     };
      
     /** 是否包含 Value **/
     this.containsValue = function ( value )
     {
         for(var prop in entry)
         {
             if(entry[prop] == value)
             {
                 return true;
             }
         }
         return false;
     };
      
     /** 所有 Value **/
     this.values = function ()
     {
         var values = new Array(size);
         for(var prop in entry)
         {
             values.push(entry[prop]);
         }
         return values;
     };
      
     /** 所有 Key **/
     this.keys = function ()
     {
         var keys = new Array(size);
         for(var prop in entry)
         {
             keys.push(prop);
         }
         return keys;
     };
      
     /** Map Size **/
     this.size = function ()
     {
         return size;
     };
     
}


