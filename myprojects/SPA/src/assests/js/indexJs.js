/* nav home*/
document.getElementById("home").addEventListener("click",function (){
    document.getElementById("itemManage").style.display='none';
    document.getElementById("customerManage").style.display='none';
    document.getElementById("orderInvoice").style.display='block';
});

/*nav Order*/
document.getElementById("order").addEventListener("click",function (){
    alert("Working");
});

/*nav Items*/
document.getElementById("item").addEventListener("click",function (){
    document.getElementById("customerManage").style.display='none';
    document.getElementById("orderInvoice").style.display='none';
    document.getElementById("itemManage").style.display='block';
});

/*nav Customer*/
document.getElementById("customer").addEventListener("click",function (){
    document.getElementById("orderInvoice").style.display='none';
    document.getElementById("itemManage").style.display='none';
    document.getElementById("customerManage").style.display='block';
});