var button_code_bar = document.getElementById('button_code_bar');
var text = document.getElementById('text');
var box = document.getElementById('box');
var pdf_box = document.getElementById('pdf_box');

button_code_bar.onclick = function(){
  //alert('clicked');
  if(text.value.length > 0){
      if(text.value.length < 50){
      // generate the bar code.
        box.innerHTML = "<svg id='barcode'></svg>"
        JsBarcode("#barcode", text.value);
        box.style.border = '1px solid #999'
        // Create a download button
        pdf_box.innerHTML = "<button onclick = 'genererPDF()'>Download the code</button>"
        // Style the pdf button
        pdf_box.style.marginTop = "10px";

      }else {
         box.style.border = "0";
         box.innerHTML = "<p class = 'error'>The text is too long !</p>";
         pdf_box.style.display = "none"; 
         pdf_box.style.display = "flex";
      }

  }else {
      box.style.border = "0";
      box.innerHTML = "<p class = 'error'>Filled out the field  !</p>";
      pdf_box.style.display = "none"; 
  }
}

 // Generate the PDF
  function genererPDF(){
    var opt = {
      margin:  1,
      filename: `${text.value}.pdf`,
      image: {type: 'jpeg', quality: 0.98},
      html2canvas: {scale: 2},
      jsPDF: { unit: 'in', format: 'a6', orientation: 'l'}
    };
     html2pdf().set(opt).from(box).save();

    //alert('clicked')
          
        /*  var opt = {
            margin:       1,
            filename:     `${text.value}.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a6', orientation: '1' }
          };

          // New Promise-based usage:
          html2pdf().set(opt).from(box).save();*/      
  }