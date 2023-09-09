export default function calculateSubtotal() {
  let product_rows = document.getElementsByClassName("row");
  let subtotal = 0;
  for (let i = 0; i < product_rows.length; i++) {

    let td = product_rows[i].childNodes;

    for (let j = 0; j < td.length; j++) {
      if ((td[j].id == "item-total")) {
        let row_total = td[j].childNodes
        row_total = row_total[0].value;
        subtotal += parseInt(row_total);
      }
    }
  }

  // set the totals for the invoice.
  set_total_box_dom(subtotal);
 
}




function set_total_box_dom(subtotal){
  let total_box = document.getElementById('zero-rated') || document.getElementById("vat-totals");

  const children = total_box.childNodes;
  if(children.length == 4){
    let vat = Math.round(subtotal * 0.14);
    let final_total = subtotal + vat;


    let subtotal_div = children[0];
    let subtotal_div_children = subtotal_div.childNodes;
    let subtotal_div_children_left = subtotal_div_children[1];
    subtotal_div_children_left.innerHTML = subtotal ;

    let vat_div = children[1];
    let vat_div_children = vat_div.childNodes;
    let vat_div_children_left = vat_div_children[1];
    vat_div_children_left.innerHTML = vat;

    let final_div = children[2];
    let final_div_children = final_div.childNodes;
    let final_div_children_left = final_div_children[1];
    final_div_children_left.innerHTML = final_total;
  }

  if(children.length == 2){
    let final_div = children[0];
    let final_div_children = final_div.childNodes;
    let final_div_children_left = final_div_children[1];
    final_div_children_left.innerHTML = subtotal;

  }
}


