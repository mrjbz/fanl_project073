$(function() {
    $.get("data/customers.json", function(data) {
        
        
    
        var data1 = data;
          var customers = data1[document.cookie];
          var tab =
            "customerID : " + customers.customerID + "<br>" +
            "companyName : " + customers.companyName + "<br>" +
            "contactName : " + customers.contactName + "<br>" +
            "contactTitle : " + customers.contactTitle + "<br>" +
            "address , " + 
            "street : "+ customers.address.street + "<br>" +
            "city : "+ customers.address.city + "<br>" +
            "region : "+ customers.address.region + "<br>" +
            "postalCode : "+ customers.address.postalCode + "<br>" +
            "country : "+ customers.address.country + "<br>" +
            "phone : "+ customers.address.phone;
    
          $("#data").append(tab);
      });
    console.log(document.cookie);
});
