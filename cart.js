let i = 0;
for(i = 0; i < 7; i++ ){
    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>");
    document.write("<td>Product" + (i + 1) + "</td>");
    document.write("<td> <input type='number' autocomplete='off' id='rate_"+ i +"' min=1 onkeyup='calculatetotal()'/></td>");
    document.write("<td> <input type='number' autocomplete='off' id='quantity_"+ i +"' min=1  onkeyup='calculatetotal()'/></td>");
    document.write("<td> <input type='number' readonly id='total_"+ i +"' min=1/></td>");
    document.write("</tr>");
}

function calculatetotal(){
    let subtotal=0;
    for(let i = 0; i < 7; i++){
        let rate=document.getElementById("rate_" + i).value;
        console.log(rate);
        let quantity=Number(document.getElementById("quantity_" + i).value);
        let total=rate * quantity;
        document.getElementById("total_"+ i).value= total;

        subtotal +=total;
    }
    document.getElementById("subtotal").value = subtotal;
    let gst=(18/100) * subtotal;
    document.getElementById("GST").value = gst;
    let total= subtotal + gst;
    document.getElementById("total").value =  total;
}   