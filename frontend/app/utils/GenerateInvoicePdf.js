import axios from "axios";

export default async function MakeInvoiceRequest(payload) {
  let load = 
  {
     "logo": "http://invoiced.com/img/logo-invoice.png",
      "from": "Shiw Sales and Service\n73 La Bonne Intention,\nEast Coast Demerara,\nGuyana",
      "to": "Survival Supermarket",
      "currency": "gyd",
      "number": "INV-0001",
      "payment_terms": "Auto-Billed - Do Not Pay",
      "items": [
          {
              "name": "Constar Tomato Paste 200g",
              "quantity": 48,
              "unit_cost": 220,
              "description" : "24 per case"
          },
         {
              "name": "Ocean Spray Cranberry",
              "quantity": 8,
              "unit_cost": 965,
               "description" : "8 per case"
          },
        {
              "name": "Aersol 600 ml Fish Spray",
              "quantity": 24,
              "unit_cost": 695
          }
      ],
      "fields": {
          "tax": "%"
      },
      "tax": 14,
      "notes": "Thanks for being an awesome customer!",
      "terms": "No need to submit payment. You will be auto-billed for this invoice."
  
  }; 
  load = JSON.stringify(load);



  let response = await fetch("https://invoice-generator.com", {
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(load),
    },
    method: "POST",
    body: load,
  });
  return response; 




}
