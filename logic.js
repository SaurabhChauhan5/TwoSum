function sum()
{
    const e1=document.getElementById("n1");
    const e2=document.getElementById("n2");
    const sum= Number(e1.value)+Number(e2.value);

    const e3=document.getElementById("id-result");
    e3.innerText=sum;

}